
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const greenRoundedPineTree = new Entity('greenRoundedPineTree')
engine.addEntity(greenRoundedPineTree)
greenRoundedPineTree.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(6.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("338c2b2a-65b4-4012-8a19-06eab5c861d6/TreeRoundPine_02/TreeRoundPine_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
greenRoundedPineTree.addComponentOrReplace(gltfShape2)

const largeRoundBrickGrassBed = new Entity('largeRoundBrickGrassBed')
engine.addEntity(largeRoundBrickGrassBed)
largeRoundBrickGrassBed.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeRoundBrickGrassBed.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("8e71706b-3a3d-4255-b888-d86eb6318278/GrassPatchLarge_01/GrassPatchLarge_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largeRoundBrickGrassBed.addComponentOrReplace(gltfShape3)

const lightGreenPoplars = new Entity('lightGreenPoplars')
engine.addEntity(lightGreenPoplars)
lightGreenPoplars.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(2, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenPoplars.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("bf27e07a-726f-4752-bce5-4792a0022583/TreeFir_01/TreeFir_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
lightGreenPoplars.addComponentOrReplace(gltfShape4)

const lightGreenPineTree = new Entity('lightGreenPineTree')
engine.addEntity(lightGreenPineTree)
lightGreenPineTree.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(13.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenPineTree.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("cae55030-f588-44df-85df-6cd5e4d9dab0/TreeRoundPine_03/TreeRoundPine_03.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
lightGreenPineTree.addComponentOrReplace(gltfShape5)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(14, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("eb584cdc-2d37-45a1-a464-45007058b3d5/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape6)

const lightYellowRoundedPineTree = new Entity('lightYellowRoundedPineTree')
engine.addEntity(lightYellowRoundedPineTree)
lightYellowRoundedPineTree.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightYellowRoundedPineTree.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("2e169288-f6a0-4d7b-bc48-6319d95878b1/TreePine_03/TreePine_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
lightYellowRoundedPineTree.addComponentOrReplace(gltfShape7)

const lightGreenSycamoreTree2 = new Entity('lightGreenSycamoreTree2')
engine.addEntity(lightGreenSycamoreTree2)
lightGreenSycamoreTree2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(4, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree2.addComponentOrReplace(transform9)
lightGreenSycamoreTree2.addComponentOrReplace(gltfShape6)

const pond = new Entity('pond')
engine.addEntity(pond)
pond.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(3.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pond.addComponentOrReplace(transform10)
const gltfShape8 = new GLTFShape("2950ca19-cb51-422b-b80e-fc0765d6cf4b/Pond_01/Pond_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
pond.addComponentOrReplace(gltfShape8)

const mediumForestLog = new Entity('mediumForestLog')
engine.addEntity(mediumForestLog)
mediumForestLog.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(1, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mediumForestLog.addComponentOrReplace(transform11)
const gltfShape9 = new GLTFShape("00f75e38-8746-492a-8e1a-f2433c3c99ba/Log_02/Log_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
mediumForestLog.addComponentOrReplace(gltfShape9)

const logRound = new Entity('logRound')
engine.addEntity(logRound)
logRound.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(14, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
logRound.addComponentOrReplace(transform12)
const gltfShape10 = new GLTFShape("451e0090-76a4-41e9-924b-cf30c148f3fc/Log_04/Log_04.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
logRound.addComponentOrReplace(gltfShape10)

const mediumMossyRock = new Entity('mediumMossyRock')
engine.addEntity(mediumMossyRock)
mediumMossyRock.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(13, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mediumMossyRock.addComponentOrReplace(transform13)
const gltfShape11 = new GLTFShape("21cee882-17e9-40c6-b919-ce3b497ada04/RockMediumMoss_01/RockMediumMoss_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
mediumMossyRock.addComponentOrReplace(gltfShape11)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform14)
const gltfShape12 = new GLTFShape("4db158c0-a44f-4f79-a9e6-c5d6a219d48d/Bush_01/Bush_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
shrub.addComponentOrReplace(gltfShape12)

const shrub2 = new Entity('shrub2')
engine.addEntity(shrub2)
shrub2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(4.5, 0, 14),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
shrub2.addComponentOrReplace(transform15)
shrub2.addComponentOrReplace(gltfShape12)

const shrub3 = new Entity('shrub3')
engine.addEntity(shrub3)
shrub3.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(3, 0, 14.5),
  rotation: new Quaternion(-3.922956332847447e-17, 0.6343933343887329, -7.56255715828047e-8, 0.7730104327201843),
  scale: new Vector3(1, 1, 1)
})
shrub3.addComponentOrReplace(transform16)
shrub3.addComponentOrReplace(gltfShape12)

const shrub4 = new Entity('shrub4')
engine.addEntity(shrub4)
shrub4.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(2.5, 0, 12.5),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
shrub4.addComponentOrReplace(transform17)
shrub4.addComponentOrReplace(gltfShape12)

const shrub5 = new Entity('shrub5')
engine.addEntity(shrub5)
shrub5.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(1, 0, 14.5),
  rotation: new Quaternion(-2.4513002203432627e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
shrub5.addComponentOrReplace(transform18)
shrub5.addComponentOrReplace(gltfShape12)

const shrub6 = new Entity('shrub6')
engine.addEntity(shrub6)
shrub6.setParent(_scene)
shrub6.addComponentOrReplace(gltfShape12)
const transform19 = new Transform({
  position: new Vector3(1.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub6.addComponentOrReplace(transform19)

const rose = new Entity('rose')
engine.addEntity(rose)
rose.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(3.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose.addComponentOrReplace(transform20)
const gltfShape13 = new GLTFShape("18bbb621-1c3e-4ee1-ba0a-a7c77dd01cbb/Flower_03/Flower_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
rose.addComponentOrReplace(gltfShape13)

const rose2 = new Entity('rose2')
engine.addEntity(rose2)
rose2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(4.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose2.addComponentOrReplace(transform21)
rose2.addComponentOrReplace(gltfShape13)

const sunflower = new Entity('sunflower')
engine.addEntity(sunflower)
sunflower.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(0.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower.addComponentOrReplace(transform22)
const gltfShape14 = new GLTFShape("c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
sunflower.addComponentOrReplace(gltfShape14)

const sunflowerHead = new Entity('sunflowerHead')
engine.addEntity(sunflowerHead)
sunflowerHead.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(1.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead.addComponentOrReplace(transform23)
const gltfShape15 = new GLTFShape("29198994-d436-4b4b-8314-cfa2c4306dd9/Flower_01/Flower_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
sunflowerHead.addComponentOrReplace(gltfShape15)

const sunflowerHead2 = new Entity('sunflowerHead2')
engine.addEntity(sunflowerHead2)
sunflowerHead2.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(1, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead2.addComponentOrReplace(transform24)
sunflowerHead2.addComponentOrReplace(gltfShape15)

const sunflower2 = new Entity('sunflower2')
engine.addEntity(sunflower2)
sunflower2.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(6.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower2.addComponentOrReplace(transform25)
sunflower2.addComponentOrReplace(gltfShape14)

const sunflower3 = new Entity('sunflower3')
engine.addEntity(sunflower3)
sunflower3.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(12.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower3.addComponentOrReplace(transform26)
sunflower3.addComponentOrReplace(gltfShape14)

const sunflower4 = new Entity('sunflower4')
engine.addEntity(sunflower4)
sunflower4.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(14.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower4.addComponentOrReplace(transform27)
sunflower4.addComponentOrReplace(gltfShape14)

const sunflowerHead3 = new Entity('sunflowerHead3')
engine.addEntity(sunflowerHead3)
sunflowerHead3.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(13, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead3.addComponentOrReplace(transform28)
sunflowerHead3.addComponentOrReplace(gltfShape15)

const shrub7 = new Entity('shrub7')
engine.addEntity(shrub7)
shrub7.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub7.addComponentOrReplace(transform29)
shrub7.addComponentOrReplace(gltfShape12)

const treeStump = new Entity('treeStump')
engine.addEntity(treeStump)
treeStump.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(11.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeStump.addComponentOrReplace(transform30)
const gltfShape16 = new GLTFShape("d3cf58bc-16df-4c4c-9c3a-74f659164363/TreeStump_01/TreeStump_01.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
treeStump.addComponentOrReplace(gltfShape16)

const fairKiosk = new Entity('fairKiosk')
engine.addEntity(fairKiosk)
fairKiosk.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(11, 0, 3),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
fairKiosk.addComponentOrReplace(transform31)
const gltfShape17 = new GLTFShape("b72478c3-f485-42b9-8dd4-94a4f34588f4/Store_01/Store_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
fairKiosk.addComponentOrReplace(gltfShape17)

const bookshelfBench = new Entity('bookshelfBench')
engine.addEntity(bookshelfBench)
bookshelfBench.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(4.5, 0, 8),
  rotation: new Quaternion(-8.945314844418877e-16, 0.6343932747840881, -7.56255715828047e-8, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
bookshelfBench.addComponentOrReplace(transform32)
const gltfShape18 = new GLTFShape("d4f3489d-e228-4145-9bd6-18d696779f6b/Shelf_03/Shelf_03.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
bookshelfBench.addComponentOrReplace(gltfShape18)

const classicBench = new Entity('classicBench')
engine.addEntity(classicBench)
classicBench.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(8.5, 0, 12.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
classicBench.addComponentOrReplace(transform33)
const gltfShape19 = new GLTFShape("2cd78a5d-d01d-4d31-8940-c7fb8948e14e/Bench_01/Bench_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
classicBench.addComponentOrReplace(gltfShape19)

const classicBench2 = new Entity('classicBench2')
engine.addEntity(classicBench2)
classicBench2.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(11.5, 0, 6.5),
  rotation: new Quaternion(2.220446049250313e-16, -0.290284663438797, 3.460462139059928e-8, -0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
classicBench2.addComponentOrReplace(transform34)
classicBench2.addComponentOrReplace(gltfShape19)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(14.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform35)
const gltfShape20 = new GLTFShape("3168d3fe-8f93-4a1a-81f4-689780f2a373/Bush_02/Bush_02.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
bush.addComponentOrReplace(gltfShape20)

const bush2 = new Entity('bush2')
engine.addEntity(bush2)
bush2.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(9, 0, 14.5),
  rotation: new Quaternion(-8.881527969534708e-16, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
bush2.addComponentOrReplace(transform36)
bush2.addComponentOrReplace(gltfShape20)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(11.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout.addComponentOrReplace(transform37)
const gltfShape21 = new GLTFShape("43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
grassSprout.addComponentOrReplace(gltfShape21)

const grassSprout2 = new Entity('grassSprout2')
engine.addEntity(grassSprout2)
grassSprout2.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(15.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout2.addComponentOrReplace(transform38)
grassSprout2.addComponentOrReplace(gltfShape21)

const grassSprout3 = new Entity('grassSprout3')
engine.addEntity(grassSprout3)
grassSprout3.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(13, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout3.addComponentOrReplace(transform39)
grassSprout3.addComponentOrReplace(gltfShape21)

const javaFern = new Entity('javaFern')
engine.addEntity(javaFern)
javaFern.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(13, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern.addComponentOrReplace(transform40)
const gltfShape22 = new GLTFShape("734c6696-dc46-4f79-a817-41319bcc7395/Grass_01/Grass_01.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
javaFern.addComponentOrReplace(gltfShape22)

const javaFern2 = new Entity('javaFern2')
engine.addEntity(javaFern2)
javaFern2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(12.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern2.addComponentOrReplace(transform41)
javaFern2.addComponentOrReplace(gltfShape22)

const grassSprout4 = new Entity('grassSprout4')
engine.addEntity(grassSprout4)
grassSprout4.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(12.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout4.addComponentOrReplace(transform42)
grassSprout4.addComponentOrReplace(gltfShape21)

const birdSNestFern = new Entity('birdSNestFern')
engine.addEntity(birdSNestFern)
birdSNestFern.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(15, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern.addComponentOrReplace(transform43)
const gltfShape23 = new GLTFShape("f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
birdSNestFern.addComponentOrReplace(gltfShape23)

const grassSprout5 = new Entity('grassSprout5')
engine.addEntity(grassSprout5)
grassSprout5.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(15, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout5.addComponentOrReplace(transform44)
grassSprout5.addComponentOrReplace(gltfShape21)

const grassSprout6 = new Entity('grassSprout6')
engine.addEntity(grassSprout6)
grassSprout6.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(2, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout6.addComponentOrReplace(transform45)
grassSprout6.addComponentOrReplace(gltfShape21)

const grassSprout7 = new Entity('grassSprout7')
engine.addEntity(grassSprout7)
grassSprout7.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(1.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout7.addComponentOrReplace(transform46)
grassSprout7.addComponentOrReplace(gltfShape21)

const grassSprout8 = new Entity('grassSprout8')
engine.addEntity(grassSprout8)
grassSprout8.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(1, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout8.addComponentOrReplace(transform47)
grassSprout8.addComponentOrReplace(gltfShape21)

const grassSprout9 = new Entity('grassSprout9')
engine.addEntity(grassSprout9)
grassSprout9.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(3.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout9.addComponentOrReplace(transform48)
grassSprout9.addComponentOrReplace(gltfShape21)

const grassSprout10 = new Entity('grassSprout10')
engine.addEntity(grassSprout10)
grassSprout10.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout10.addComponentOrReplace(transform49)
grassSprout10.addComponentOrReplace(gltfShape21)

const grassSprout11 = new Entity('grassSprout11')
engine.addEntity(grassSprout11)
grassSprout11.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(5.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout11.addComponentOrReplace(transform50)
grassSprout11.addComponentOrReplace(gltfShape21)

const grassSprout12 = new Entity('grassSprout12')
engine.addEntity(grassSprout12)
grassSprout12.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(5.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout12.addComponentOrReplace(transform51)
grassSprout12.addComponentOrReplace(gltfShape21)

const ostrichFerns = new Entity('ostrichFerns')
engine.addEntity(ostrichFerns)
ostrichFerns.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(2.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns.addComponentOrReplace(transform52)
const gltfShape24 = new GLTFShape("af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
ostrichFerns.addComponentOrReplace(gltfShape24)

const ostrichFerns2 = new Entity('ostrichFerns2')
engine.addEntity(ostrichFerns2)
ostrichFerns2.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(6, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns2.addComponentOrReplace(transform53)
ostrichFerns2.addComponentOrReplace(gltfShape24)

const ostrichFerns3 = new Entity('ostrichFerns3')
engine.addEntity(ostrichFerns3)
ostrichFerns3.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(4, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns3.addComponentOrReplace(transform54)
ostrichFerns3.addComponentOrReplace(gltfShape24)

const ostrichFerns4 = new Entity('ostrichFerns4')
engine.addEntity(ostrichFerns4)
ostrichFerns4.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(11.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns4.addComponentOrReplace(transform55)
ostrichFerns4.addComponentOrReplace(gltfShape24)

const ostrichFerns5 = new Entity('ostrichFerns5')
engine.addEntity(ostrichFerns5)
ostrichFerns5.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(7.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns5.addComponentOrReplace(transform56)
ostrichFerns5.addComponentOrReplace(gltfShape24)

const ostrichFerns6 = new Entity('ostrichFerns6')
engine.addEntity(ostrichFerns6)
ostrichFerns6.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(14, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns6.addComponentOrReplace(transform57)
ostrichFerns6.addComponentOrReplace(gltfShape24)
