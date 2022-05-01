/* To Do
 * 
 * CHECK IN
 * 
 * Recreate schene in builder to use the right amount of materials and include the arrow over the shop plus make it clickable. Maybe also make the scene 4 tiles so it is less cramped (does that give more materials?)
 * Add the shop and the ability to switch out your pet
 * 
 * FUTURE
 * Stop critters from moving out of owned land
 * Handle pathing around obstacles and players moving up in elevation with a non flyer pet.
 * Handle multiple players each with their own pet. Can't just get the camera location for all of them
 * Handle storing pet data and putting the pet back into the scene when the player arrives if they already had a pet.
*/

//log("this is how you log")

// Lerp data component is used to determine critter movments
@Component('lerpData')
export class LerpData {
    origin: Vector3 = new Vector3(1, 0, 1)
    target: Vector3 = new Vector3(4, 0, 5)
    fraction: number = 1
    fractionDivider: number = 6
}

// The critter componenet contains all the behavioral data of the critter.
@Component('critter')
export class Critter {
    tetherPoint: Vector3
    yOffset: number = 0
    slowSpeed: number = 30
    fastSpeed: number = 60
    energy: number = .5
    curiosity: number = 3
    moving: boolean = true
    idleAnimationDuration: number
}

const critters = engine.getComponentGroup(Critter)

@Component('pet')
export class Pet {
    /* For now this component is just a way to find the critters that are also pets so that we can adjust their tether to match the player's location
     * 
     * later this would contain information about which player owns the pet
     * later this might contain uneique information about the pet not contained in the parent critter component
     *  for example the level and stats of the creature might be in the critter component but the nickname given by the player might be in the pet component?
    */
}

const pets = engine.getComponentGroup(Pet)

 //Create Creature Functions

// Create an entity and add all the generic components then pass it back.
function CreateCritter() {
    const critter = new Entity()
    critter.addComponent(new Critter())
    critter.addComponent(new LerpData())
    critter.addComponent(new Animator())
    critter.getComponent(Animator).addClip(new AnimationState('Idle'))
    critter.getComponent(Animator).getClip('Idle').play()
    critter.getComponent(Animator).addClip(new AnimationState('MoveInPlaceFast'))
    critter.getComponent(Animator).addClip(new AnimationState('CastSpell'))
    critter.getComponent(Animator).getClip('CastSpell').looping = false
    return critter
}

// Create a Bat
function CreateBat(spawnPoint: Vector3) {
    const bat = CreateCritter()
    bat.addComponent(new GLTFShape('models/pets/Bat.glb'))
    bat.getComponent(Critter).tetherPoint = spawnPoint
    bat.getComponent(Critter).energy = .7
    bat.getComponent(Critter).curiosity = 5
    bat.getComponent(Critter).yOffset = 1
    bat.getComponent(Critter).idleAnimationDuration = 1
    bat.addComponent(new Transform({
        position: new Vector3(bat.getComponent(Critter).tetherPoint.x, bat.getComponent(Critter).tetherPoint.y + bat.getComponent(Critter).yOffset, bat.getComponent(Critter).tetherPoint.z)
    }))
    bat.getComponent(LerpData).target = bat.getComponent(Transform).position
    engine.addEntity(bat)

    return bat
}

// Create a Spider
function CreateSpider(spawnPoint: Vector3) {
    const spider = CreateCritter()
    spider.addComponent(new GLTFShape('models/pets/Spider/Spider.gltf'))
    spider.getComponent(Critter).tetherPoint = spawnPoint
    spider.getComponent(Critter).idleAnimationDuration = 1.2
    spider.addComponent(new Transform({
        position: new Vector3(spider.getComponent(Critter).tetherPoint.x, spider.getComponent(Critter).tetherPoint.y + spider.getComponent(Critter).yOffset, spider.getComponent(Critter).tetherPoint.z)
    }))
    spider.getComponent(LerpData).target = spider.getComponent(Transform).position
    engine.addEntity(spider)

    return spider
}

// Add Wait System

@Component("timeOut")
export class TimeOut {
    timeLeft: number
    constructor(time: number) {
        this.timeLeft = time
    }
}

export const paused = engine.getComponentGroup(TimeOut)

export class CritterWaitSystem {
    update(dt: number) {
        for (let ent of paused.entities) {
            let time = ent.getComponentOrNull(TimeOut)
            if (time) {
                if (time.timeLeft > 0) {
                    time.timeLeft -= dt
                } else {
                    ent.removeComponent(TimeOut)
                    // this is the only line that is different from the standard wait system taken from examples. After the critter has finished waiting we want it to pick a new action.
                    chooseNextCritterAction(ent)
                }
            }
        }
    }
}

engine.addSystem(new CritterWaitSystem())

export class CrittersMove {
    update(dt: number) {
       for (let critter of critters.entities) {
           let critterData = critter.getComponent(Critter)
           if (critterData.moving) {
                let transform = critter.getComponent(Transform)
                let path = critter.getComponent(LerpData)
               if (path.fraction < 1) {
                    // Not finished current movement. Continue on lerp path
                    path.fraction += dt / path.fractionDivider
                    transform.position = Vector3.Lerp(
                        path.origin,
                        path.target,
                        path.fraction
                    )
                } else {
                    // Reached destination, reset values and request critter's next action
                    path.fraction = 0
                    path.origin = path.target
                    critter.getComponent(Animator).getClip('MoveInPlaceFast').pause()
                    critter.getComponent(Animator).getClip('MoveInPlaceFast').speed = 1
                    critterData.moving = false
                    chooseNextCritterAction(critter)
                }
            }
        }
    }
}

engine.addSystem(new CrittersMove)

async function chooseNextCritterAction(critter: IEntity) {
    let critterData = critter.getComponent(Critter)
    let transform = critter.getComponent(Transform)
    // Chooses next action. The creature is more likely to move and perform animations if it has a higher energy.
    if ((Math.abs(critterData.tetherPoint.x - transform.position.x) > critterData.curiosity) || (Math.abs(critterData.tetherPoint.z - transform.position.z) > critterData.curiosity)) {
        // Critter is too far from it's tether point. It must quickly move back to a point in range of it's tether.
        PickNextPath(critter, true)
    } else if (Math.random() > critterData.energy) {
        // just chill with the idle animation playing for a bit
        critter.getComponent(Animator).getClip('Idle').play()
        critter.addComponent(new TimeOut(1.5))
    } else {
        if (Math.random() > critterData.energy) {
            // Play castSpell animation because you are board
            critter.getComponent(Animator).getClip('CastSpell').play(true)
            critter.addComponent(new TimeOut(critterData.idleAnimationDuration))
        } else {
            // Move somewhere else at a normal speed
            PickNextPath(critter, false)
        }
    }
}

function PickNextPath(critter: IEntity, fast: boolean) {
    /*
     * Choose next position to travel to then turn on the walking animation and set moving to true to start the trip
     * The creature's curiosity determines how far from their tether point they are willing to travel.
    */
    let path = critter.getComponent(LerpData)
    let critterData = critter.getComponent(Critter)
    let transform = critter.getComponent(Transform)
    let X = 1
    let Y = 0
    let Z = 1

    // Set hight of target position. Always 0 if the yOffset is 0 since that means it is not a flyer.
    // Eventually we need to figure out how to handle non flyers who's owners move to a higher position but that will likely require pathing and can wait.
    if (critterData.yOffset != 0) {
        Y = ((Math.random() * (critterData.curiosity)) - (critterData.curiosity / 2) + critterData.tetherPoint.y + critterData.yOffset) // this will make more sence once there are pets following players who might be elevated.
        if (Y < .5) {
            Y = .5
        }
    }

    // Set x and z of target position
    path.target = new Vector3(((Math.random() * (critterData.curiosity * 2)) - critterData.curiosity + critterData.tetherPoint.x), Y, ((Math.random() * (critterData.curiosity * 2)) - critterData.curiosity + critterData.tetherPoint.z))

    // Set speed to travel to target position. Faster if the distance is longer. High fractionDivider value means slow speed.
    if (path.target.x >= 1) {
        let X = Math.abs(path.target.x - path.origin.x)
    }
    if (path.target.z >= 1) {
        let Z = Math.abs(path.target.z - path.origin.z)
    }
    path.fractionDivider = Math.floor((X + Z) * 1.5)

    // Face new target position
    transform.lookAt(path.target)
    transform.rotate(new Vector3(0, 1, 0), 180)

    // set movement animation and modify speed if the fast bool was set
    critter.getComponent(Animator).getClip('MoveInPlaceFast').play(true)
    if (fast) {
        critter.getComponent(Animator).getClip('MoveInPlaceFast').speed = 2
        path.fractionDivider = 3
    }

    // toggle movement so that the CrittersMove system will start moving this creature.
    critterData.moving = true
}

// eventually needs to handle more then just the current player with the camera
export class UpdatePetTethers {
    update(dt: number) {
        for (let pet of pets.entities) {
            pet.getComponent(Critter).tetherPoint = Camera.instance.feetPosition
        }
    }
}

engine.addSystem(new UpdatePetTethers)


CreateBat(new Vector3(8, 0, 8))

const spider = CreateSpider(new Vector3(8, 0, 8))
spider.addComponent(new Pet)
