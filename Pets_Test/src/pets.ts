/* To Do
 * 
 * Tidy up calls, split into CreateCritter method and method for creating each critter type
 * 
 * CHECK IN
 * 
 * Have creatures which are pets use the player's location as their spawn point
 * Add logic to chase the player if they get to far away, maybe drop what they are doing, definately run fast if the player reaches a certain distance away
 * 
 * CHECK IN
 * 
 * Recreate schene in builder to use the right amount of materials and include the arrow over the shop plus make it clickable. Maybe also make the scene 4 tiles so it is less cramped (does that give more materials?)
 * Add the shop and the ability to switch out your pet
 * 
 * FUTURE
 * Stop critters from moving out of owned land
*/

@Component('lerpData')
export class LerpData {
    origin: Vector3 = new Vector3(1, 0, 1)
    target: Vector3 = new Vector3(4, 0, 5)
    fraction: number = 1
    fractionDivider: number = 6
}

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

 //Create Creature Functions

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
}

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

export class WaitSystem {
    update(dt: number) {
        for (let ent of paused.entities) {
            let time = ent.getComponentOrNull(TimeOut)
            if (time) {
                if (time.timeLeft > 0) {
                    time.timeLeft -= dt
                } else {
                    ent.removeComponent(TimeOut)
                    chooseNextCritterAction(ent)
                }
            }
        }
    }
}

engine.addSystem(new WaitSystem())

export class CrittersMove {
    update(dt: number) {
       for (let critter of critters.entities) {
           let critterData = critter.getComponent(Critter)
           if (critterData.moving) {
                let transform = critter.getComponent(Transform)
                let path = critter.getComponent(LerpData)
                if (path.fraction < 1) {
                    path.fraction += dt / path.fractionDivider
                    transform.position = Vector3.Lerp(
                        path.origin,
                        path.target,
                        path.fraction
                    )
                } else {
                    // doesn't work to add it as a component. Gotta figure out methods?
                    critter.getComponent(Animator).getClip('MoveInPlaceFast').pause()
                    critterData.moving = false
                    chooseNextCritterAction(critter)
                }
            }
        }
    }
}

engine.addSystem(new CrittersMove)

function chooseNextCritterAction(critter: IEntity) {
    let critterData = critter.getComponent(Critter)
    if (Math.random() > critterData.energy) {
        critter.getComponent(Animator).getClip('Idle').play(true)
        critter.addComponent(new TimeOut(1.5))
    } else {
        if (Math.random() > critterData.energy) {
            critter.getComponent(Animator).getClip('CastSpell').play(true)
            critter.addComponent(new TimeOut(critterData.idleAnimationDuration))
        } else {
            PickNextPath(critter)
        }
    }
}

function PickNextPath(critter: IEntity) {
    let path = critter.getComponent(LerpData)
    let critterData = critter.getComponent(Critter)
    let transform = critter.getComponent(Transform)
    path.origin = path.target
    let Y = 0
    if (critterData.yOffset != 0) {
        Y = ((Math.random() * (critterData.curiosity)) - (critterData.curiosity / 2) + critterData.tetherPoint.y + critterData.yOffset) // this will make more sence once there are pets following players who might be elevated.
        if (Y < .5) {
            Y = .5
        }
    }
    path.target = new Vector3(((Math.random() * (critterData.curiosity * 2)) - critterData.curiosity + critterData.tetherPoint.x), Y, ((Math.random() * (critterData.curiosity * 2)) - critterData.curiosity + critterData.tetherPoint.z))
    let X = 1
    let Z = 1
    if (path.target.x >= 1) {
        let X = Math.abs(path.target.x - path.origin.x)
    }
    if (path.target.z >= 1) {
        let Z = Math.abs(path.target.z - path.origin.z)
    }
    path.fractionDivider = Math.floor((X + Z) * 1.5) // higher is slower
    path.fraction = 0
    transform.lookAt(path.target)
    transform.rotate(new Vector3(0, 1, 0), 180)
    critterData.moving = true
    critter.getComponent(Animator).getClip('MoveInPlaceFast').play(true)

}

CreateBat(new Vector3(8, 0, 8))

CreateSpider(new Vector3(8, 0, 8))