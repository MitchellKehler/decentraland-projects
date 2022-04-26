// Create Bat
const bat = new Entity()
bat.addComponent(new GLTFShape('models/pets/Bat.glb'))
bat.addComponent(new Transform({
    position: new Vector3(1, 1, 1)
}))

// Add Bat to engine
engine.addEntity(bat)

// Create Spider
const spider = new Entity()
spider.addComponent(new GLTFShape('models/pets/Spider.glb'))
spider.addComponent(new Transform({
    position: new Vector3(1, 0, 1)
}))

// Add Spider to engine
engine.addEntity(spider)

// Create animator component to handle animations
let petAnimator = new Animator()

// Create clip
const idle = new AnimationState('Idle')

// Add clip to animator
petAnimator.addClip(idle)

// Add animator to pets
bat.addComponent(petAnimator)
spider.addComponent(petAnimator)

// Activate clip
idle.play()