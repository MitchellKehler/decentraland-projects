import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a491051c-8092-4245-ae85-d274e90d8443/src/item"

import { petStoreCanvas } from 'ui'

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

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const largeRoundBrickGrassBed = new Entity('largeRoundBrickGrassBed')
engine.addEntity(largeRoundBrickGrassBed)
largeRoundBrickGrassBed.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeRoundBrickGrassBed.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("8e71706b-3a3d-4255-b888-d86eb6318278/GrassPatchLarge_01/GrassPatchLarge_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
largeRoundBrickGrassBed.addComponentOrReplace(gltfShape2)

const largePond = new Entity('largePond')
engine.addEntity(largePond)
largePond.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(26.5, 0, 25),
  rotation: new Quaternion(3.919772349233608e-17, -0.1950903683900833, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
largePond.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("622c9a64-8acc-4c24-bcf3-d9cd740a9c20/Pond_02/Pond_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largePond.addComponentOrReplace(gltfShape3)

const largeForestLog = new Entity('largeForestLog')
engine.addEntity(largeForestLog)
largeForestLog.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(26.5, 0, 30.5),
  rotation: new Quaternion(0, 0.19509033858776093, -2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
largeForestLog.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("ec3a27f6-7974-493f-b783-9fc2e4d29e5b/Log_03/Log_03.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
largeForestLog.addComponentOrReplace(gltfShape4)

const lightGreenPoplars = new Entity('lightGreenPoplars')
engine.addEntity(lightGreenPoplars)
lightGreenPoplars.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(28.5, 0, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
lightGreenPoplars.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("bf27e07a-726f-4752-bce5-4792a0022583/TreeFir_01/TreeFir_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
lightGreenPoplars.addComponentOrReplace(gltfShape5)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(29.5, 0, 26),
  rotation: new Quaternion(2.1991133921248155e-16, 0.5555703043937683, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree.addComponentOrReplace(transform10)
const gltfShape6 = new GLTFShape("eb584cdc-2d37-45a1-a464-45007058b3d5/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape6)

const fairKiosk = new Entity('fairKiosk')
engine.addEntity(fairKiosk)
fairKiosk.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(5, 0, 24.5),
  rotation: new Quaternion(-2.837041353863476e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
fairKiosk.addComponentOrReplace(transform11)
const gltfShape7 = new GLTFShape("b72478c3-f485-42b9-8dd4-94a4f34588f4/Store_01/Store_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
fairKiosk.addComponentOrReplace(gltfShape7)
fairKiosk.addComponent(
    new OnClick(e => {
        log("Shop was Clicked")
        petStoreCanvas.visible = true
    }))

const indicatorArrowGree = new Entity('indicatorArrowGree')
engine.addEntity(indicatorArrowGree)
indicatorArrowGree.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(5.416045188903809, 3.5, 26.31984519958496),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.989999771118164, 4.989999771118164, 4.989999771118164)
})
indicatorArrowGree.addComponentOrReplace(transform12)

const bookshelfBench = new Entity('bookshelfBench')
engine.addEntity(bookshelfBench)
bookshelfBench.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(22, 0, 25),
  rotation: new Quaternion(-1.3446381222283633e-15, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
bookshelfBench.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("d4f3489d-e228-4145-9bd6-18d696779f6b/Shelf_03/Shelf_03.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bookshelfBench.addComponentOrReplace(gltfShape8)

const classicBench = new Entity('classicBench')
engine.addEntity(classicBench)
classicBench.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(12.5, 0, 16),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
classicBench.addComponentOrReplace(transform14)
const gltfShape9 = new GLTFShape("2cd78a5d-d01d-4d31-8940-c7fb8948e14e/Bench_01/Bench_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
classicBench.addComponentOrReplace(gltfShape9)

const classicBench2 = new Entity('classicBench2')
engine.addEntity(classicBench2)
classicBench2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(16.5, 0, 12.5),
  rotation: new Quaternion(-5.973212816566282e-16, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
classicBench2.addComponentOrReplace(transform15)
classicBench2.addComponentOrReplace(gltfShape9)

const classicBench3 = new Entity('classicBench3')
engine.addEntity(classicBench3)
classicBench3.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(18.5, 0, 18.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
classicBench3.addComponentOrReplace(transform16)
classicBench3.addComponentOrReplace(gltfShape9)

const bookshelfBench2 = new Entity('bookshelfBench2')
engine.addEntity(bookshelfBench2)
bookshelfBench2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(25, 0, 20),
  rotation: new Quaternion(0, 0.0980171412229538, -1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
bookshelfBench2.addComponentOrReplace(transform17)
bookshelfBench2.addComponentOrReplace(gltfShape8)

const lightGreenPoplars2 = new Entity('lightGreenPoplars2')
engine.addEntity(lightGreenPoplars2)
lightGreenPoplars2.setParent(_scene)
lightGreenPoplars2.addComponentOrReplace(gltfShape5)
const transform18 = new Transform({
  position: new Vector3(3.5, 0, 5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
lightGreenPoplars2.addComponentOrReplace(transform18)

const lightGreenSycamoreTree2 = new Entity('lightGreenSycamoreTree2')
engine.addEntity(lightGreenSycamoreTree2)
lightGreenSycamoreTree2.setParent(_scene)
lightGreenSycamoreTree2.addComponentOrReplace(gltfShape6)
const transform19 = new Transform({
  position: new Vector3(9, 0, 6.5),
  rotation: new Quaternion(1.1399297406347857e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
lightGreenSycamoreTree2.addComponentOrReplace(transform19)

const lightGreenSycamoreTree3 = new Entity('lightGreenSycamoreTree3')
engine.addEntity(lightGreenSycamoreTree3)
lightGreenSycamoreTree3.setParent(_scene)
lightGreenSycamoreTree3.addComponentOrReplace(gltfShape6)
const transform20 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
lightGreenSycamoreTree3.addComponentOrReplace(transform20)

const lightGreenSycamoreTree4 = new Entity('lightGreenSycamoreTree4')
engine.addEntity(lightGreenSycamoreTree4)
lightGreenSycamoreTree4.setParent(_scene)
lightGreenSycamoreTree4.addComponentOrReplace(gltfShape6)
const transform21 = new Transform({
  position: new Vector3(5.5, 0, 2.5),
  rotation: new Quaternion(-3.2607767855074915e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
lightGreenSycamoreTree4.addComponentOrReplace(transform21)

const lightGreenPoplars3 = new Entity('lightGreenPoplars3')
engine.addEntity(lightGreenPoplars3)
lightGreenPoplars3.setParent(_scene)
lightGreenPoplars3.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(1.5, 0, 17),
  rotation: new Quaternion(4.440840747128199e-16, -0.19509033858776093, 2.3256578884911505e-8, 0.9807853698730469),
  scale: new Vector3(1, 1, 1)
})
lightGreenPoplars3.addComponentOrReplace(transform22)

const lightGreenPoplars4 = new Entity('lightGreenPoplars4')
engine.addEntity(lightGreenPoplars4)
lightGreenPoplars4.setParent(_scene)
lightGreenPoplars4.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(7, 0, 10.5),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
lightGreenPoplars4.addComponentOrReplace(transform23)

const lightGreenPoplars6 = new Entity('lightGreenPoplars6')
engine.addEntity(lightGreenPoplars6)
lightGreenPoplars6.setParent(_scene)
lightGreenPoplars6.addComponentOrReplace(gltfShape5)
const transform24 = new Transform({
  position: new Vector3(18, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenPoplars6.addComponentOrReplace(transform24)

const lightGreenPineTree = new Entity('lightGreenPineTree')
engine.addEntity(lightGreenPineTree)
lightGreenPineTree.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(2.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenPineTree.addComponentOrReplace(transform25)
const gltfShape10 = new GLTFShape("cae55030-f588-44df-85df-6cd5e4d9dab0/TreeRoundPine_03/TreeRoundPine_03.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
lightGreenPineTree.addComponentOrReplace(gltfShape10)

const lightGreenPineTree2 = new Entity('lightGreenPineTree2')
engine.addEntity(lightGreenPineTree2)
lightGreenPineTree2.setParent(_scene)
lightGreenPineTree2.addComponentOrReplace(gltfShape10)
const transform26 = new Transform({
  position: new Vector3(9.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenPineTree2.addComponentOrReplace(transform26)

const roundedPergola = new Entity('roundedPergola')
engine.addEntity(roundedPergola)
roundedPergola.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(26.5, 0, 8),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
roundedPergola.addComponentOrReplace(transform27)
const gltfShape11 = new GLTFShape("0fcee508-fd37-41c0-bbd1-9eca41c917b3/Pergola_01/Pergola_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
roundedPergola.addComponentOrReplace(gltfShape11)

const sunflower = new Entity('sunflower')
engine.addEntity(sunflower)
sunflower.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(22.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower.addComponentOrReplace(transform28)
const gltfShape12 = new GLTFShape("c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
sunflower.addComponentOrReplace(gltfShape12)

const magentaMushroom = new Entity('magentaMushroom')
engine.addEntity(magentaMushroom)
magentaMushroom.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(28.91999053955078, 0, 23.69496726989746),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("b6f18059-00be-4460-bcd4-06473ad61420/Mushroom_01/Mushroom_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
magentaMushroom.addComponentOrReplace(gltfShape13)

const gypsyMushroom = new Entity('gypsyMushroom')
engine.addEntity(gypsyMushroom)
gypsyMushroom.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(28.85870361328125, 0, 22.883344650268555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom.addComponentOrReplace(transform30)
const gltfShape14 = new GLTFShape("cf22fe9b-69b1-40d8-92d7-7a8caa71ade8/Mushroom_02/Mushroom_02.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
gypsyMushroom.addComponentOrReplace(gltfShape14)

const javaFern = new Entity('javaFern')
engine.addEntity(javaFern)
javaFern.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(15, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern.addComponentOrReplace(transform31)
const gltfShape15 = new GLTFShape("734c6696-dc46-4f79-a817-41319bcc7395/Grass_01/Grass_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
javaFern.addComponentOrReplace(gltfShape15)

const flowerSprouts = new Entity('flowerSprouts')
engine.addEntity(flowerSprouts)
flowerSprouts.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(25, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts.addComponentOrReplace(transform32)
const gltfShape16 = new GLTFShape("bf0962d5-8904-4f4a-b2b6-9f4607ba1e0d/Plant_03/Plant_03.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
flowerSprouts.addComponentOrReplace(gltfShape16)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(1.5, 0, 24.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub.addComponentOrReplace(transform33)
const gltfShape17 = new GLTFShape("0d4f1e28-c9bd-4f3e-9605-c76c84702742/Bush_03/Bush_03.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
evergreenShrub.addComponentOrReplace(gltfShape17)

const sunflower2 = new Entity('sunflower2')
engine.addEntity(sunflower2)
sunflower2.setParent(_scene)
sunflower2.addComponentOrReplace(gltfShape12)
const transform34 = new Transform({
  position: new Vector3(23, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower2.addComponentOrReplace(transform34)

const sunflower5 = new Entity('sunflower5')
engine.addEntity(sunflower5)
sunflower5.setParent(_scene)
sunflower5.addComponentOrReplace(gltfShape12)
const transform35 = new Transform({
  position: new Vector3(30.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower5.addComponentOrReplace(transform35)

const sunflowerHead2 = new Entity('sunflowerHead2')
engine.addEntity(sunflowerHead2)
sunflowerHead2.setParent(_scene)
const gltfShape18 = new GLTFShape("29198994-d436-4b4b-8314-cfa2c4306dd9/Flower_01/Flower_01.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
sunflowerHead2.addComponentOrReplace(gltfShape18)
const transform36 = new Transform({
  position: new Vector3(26.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead2.addComponentOrReplace(transform36)

const sunflowerHead3 = new Entity('sunflowerHead3')
engine.addEntity(sunflowerHead3)
sunflowerHead3.setParent(_scene)
sunflowerHead3.addComponentOrReplace(gltfShape18)
const transform37 = new Transform({
  position: new Vector3(29.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead3.addComponentOrReplace(transform37)

const sunflowerHead5 = new Entity('sunflowerHead5')
engine.addEntity(sunflowerHead5)
sunflowerHead5.setParent(_scene)
sunflowerHead5.addComponentOrReplace(gltfShape18)
const transform38 = new Transform({
  position: new Vector3(23, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead5.addComponentOrReplace(transform38)

const sunflowerHead6 = new Entity('sunflowerHead6')
engine.addEntity(sunflowerHead6)
sunflowerHead6.setParent(_scene)
sunflowerHead6.addComponentOrReplace(gltfShape18)
const transform39 = new Transform({
  position: new Vector3(28.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead6.addComponentOrReplace(transform39)

const sunflower8 = new Entity('sunflower8')
engine.addEntity(sunflower8)
sunflower8.setParent(_scene)
sunflower8.addComponentOrReplace(gltfShape12)
const transform40 = new Transform({
  position: new Vector3(29, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower8.addComponentOrReplace(transform40)

const sunflower12 = new Entity('sunflower12')
engine.addEntity(sunflower12)
sunflower12.setParent(_scene)
sunflower12.addComponentOrReplace(gltfShape12)
const transform41 = new Transform({
  position: new Vector3(27, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower12.addComponentOrReplace(transform41)

const sunflower15 = new Entity('sunflower15')
engine.addEntity(sunflower15)
sunflower15.setParent(_scene)
sunflower15.addComponentOrReplace(gltfShape12)
const transform42 = new Transform({
  position: new Vector3(29.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower15.addComponentOrReplace(transform42)

const sunflower19 = new Entity('sunflower19')
engine.addEntity(sunflower19)
sunflower19.setParent(_scene)
sunflower19.addComponentOrReplace(gltfShape12)
const transform43 = new Transform({
  position: new Vector3(26.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower19.addComponentOrReplace(transform43)

const sunflower21 = new Entity('sunflower21')
engine.addEntity(sunflower21)
sunflower21.setParent(_scene)
sunflower21.addComponentOrReplace(gltfShape12)
const transform44 = new Transform({
  position: new Vector3(24, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower21.addComponentOrReplace(transform44)

const sunflower25 = new Entity('sunflower25')
engine.addEntity(sunflower25)
sunflower25.setParent(_scene)
sunflower25.addComponentOrReplace(gltfShape12)
const transform45 = new Transform({
  position: new Vector3(13, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower25.addComponentOrReplace(transform45)

const sunflowerHead7 = new Entity('sunflowerHead7')
engine.addEntity(sunflowerHead7)
sunflowerHead7.setParent(_scene)
sunflowerHead7.addComponentOrReplace(gltfShape18)
const transform46 = new Transform({
  position: new Vector3(14.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead7.addComponentOrReplace(transform46)

const sunflower27 = new Entity('sunflower27')
engine.addEntity(sunflower27)
sunflower27.setParent(_scene)
sunflower27.addComponentOrReplace(gltfShape12)
const transform47 = new Transform({
  position: new Vector3(20, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower27.addComponentOrReplace(transform47)

const ostrichFerns2 = new Entity('ostrichFerns2')
engine.addEntity(ostrichFerns2)
ostrichFerns2.setParent(_scene)
const gltfShape19 = new GLTFShape("af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
ostrichFerns2.addComponentOrReplace(gltfShape19)
const transform48 = new Transform({
  position: new Vector3(26, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns2.addComponentOrReplace(transform48)

const ostrichFerns3 = new Entity('ostrichFerns3')
engine.addEntity(ostrichFerns3)
ostrichFerns3.setParent(_scene)
ostrichFerns3.addComponentOrReplace(gltfShape19)
const transform49 = new Transform({
  position: new Vector3(31, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns3.addComponentOrReplace(transform49)

const ostrichFerns4 = new Entity('ostrichFerns4')
engine.addEntity(ostrichFerns4)
ostrichFerns4.setParent(_scene)
ostrichFerns4.addComponentOrReplace(gltfShape19)
const transform50 = new Transform({
  position: new Vector3(28.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns4.addComponentOrReplace(transform50)

const ostrichFerns5 = new Entity('ostrichFerns5')
engine.addEntity(ostrichFerns5)
ostrichFerns5.setParent(_scene)
ostrichFerns5.addComponentOrReplace(gltfShape19)
const transform51 = new Transform({
  position: new Vector3(29.735958099365234, 0, 0.7590470314025879),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns5.addComponentOrReplace(transform51)

const ostrichFerns6 = new Entity('ostrichFerns6')
engine.addEntity(ostrichFerns6)
ostrichFerns6.setParent(_scene)
ostrichFerns6.addComponentOrReplace(gltfShape19)
const transform52 = new Transform({
  position: new Vector3(26, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns6.addComponentOrReplace(transform52)

const ostrichFerns7 = new Entity('ostrichFerns7')
engine.addEntity(ostrichFerns7)
ostrichFerns7.setParent(_scene)
ostrichFerns7.addComponentOrReplace(gltfShape19)
const transform53 = new Transform({
  position: new Vector3(22.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns7.addComponentOrReplace(transform53)

const javaFern2 = new Entity('javaFern2')
engine.addEntity(javaFern2)
javaFern2.setParent(_scene)
javaFern2.addComponentOrReplace(gltfShape15)
const transform54 = new Transform({
  position: new Vector3(24, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern2.addComponentOrReplace(transform54)

const javaFern3 = new Entity('javaFern3')
engine.addEntity(javaFern3)
javaFern3.setParent(_scene)
javaFern3.addComponentOrReplace(gltfShape15)
const transform55 = new Transform({
  position: new Vector3(23.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern3.addComponentOrReplace(transform55)

const javaFern7 = new Entity('javaFern7')
engine.addEntity(javaFern7)
javaFern7.setParent(_scene)
javaFern7.addComponentOrReplace(gltfShape15)
const transform56 = new Transform({
  position: new Vector3(30.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern7.addComponentOrReplace(transform56)

const javaFern9 = new Entity('javaFern9')
engine.addEntity(javaFern9)
javaFern9.setParent(_scene)
javaFern9.addComponentOrReplace(gltfShape15)
const transform57 = new Transform({
  position: new Vector3(30.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern9.addComponentOrReplace(transform57)

const javaFern10 = new Entity('javaFern10')
engine.addEntity(javaFern10)
javaFern10.setParent(_scene)
javaFern10.addComponentOrReplace(gltfShape15)
const transform58 = new Transform({
  position: new Vector3(28, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern10.addComponentOrReplace(transform58)

const javaFern11 = new Entity('javaFern11')
engine.addEntity(javaFern11)
javaFern11.setParent(_scene)
javaFern11.addComponentOrReplace(gltfShape15)
const transform59 = new Transform({
  position: new Vector3(29, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern11.addComponentOrReplace(transform59)

const javaFern13 = new Entity('javaFern13')
engine.addEntity(javaFern13)
javaFern13.setParent(_scene)
javaFern13.addComponentOrReplace(gltfShape15)
const transform60 = new Transform({
  position: new Vector3(29, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern13.addComponentOrReplace(transform60)

const javaFern18 = new Entity('javaFern18')
engine.addEntity(javaFern18)
javaFern18.setParent(_scene)
javaFern18.addComponentOrReplace(gltfShape15)
const transform61 = new Transform({
  position: new Vector3(26.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern18.addComponentOrReplace(transform61)

const javaFern22 = new Entity('javaFern22')
engine.addEntity(javaFern22)
javaFern22.setParent(_scene)
javaFern22.addComponentOrReplace(gltfShape15)
const transform62 = new Transform({
  position: new Vector3(15.5, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern22.addComponentOrReplace(transform62)

const javaFern25 = new Entity('javaFern25')
engine.addEntity(javaFern25)
javaFern25.setParent(_scene)
javaFern25.addComponentOrReplace(gltfShape15)
const transform63 = new Transform({
  position: new Vector3(12, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern25.addComponentOrReplace(transform63)

const javaFern28 = new Entity('javaFern28')
engine.addEntity(javaFern28)
javaFern28.setParent(_scene)
javaFern28.addComponentOrReplace(gltfShape15)
const transform64 = new Transform({
  position: new Vector3(1, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern28.addComponentOrReplace(transform64)

const javaFern32 = new Entity('javaFern32')
engine.addEntity(javaFern32)
javaFern32.setParent(_scene)
javaFern32.addComponentOrReplace(gltfShape15)
const transform65 = new Transform({
  position: new Vector3(17, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern32.addComponentOrReplace(transform65)

const javaFern34 = new Entity('javaFern34')
engine.addEntity(javaFern34)
javaFern34.setParent(_scene)
javaFern34.addComponentOrReplace(gltfShape15)
const transform66 = new Transform({
  position: new Vector3(27.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern34.addComponentOrReplace(transform66)

const javaFern35 = new Entity('javaFern35')
engine.addEntity(javaFern35)
javaFern35.setParent(_scene)
javaFern35.addComponentOrReplace(gltfShape15)
const transform67 = new Transform({
  position: new Vector3(26.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern35.addComponentOrReplace(transform67)

const javaFern36 = new Entity('javaFern36')
engine.addEntity(javaFern36)
javaFern36.setParent(_scene)
javaFern36.addComponentOrReplace(gltfShape15)
const transform68 = new Transform({
  position: new Vector3(26, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern36.addComponentOrReplace(transform68)

const javaFern38 = new Entity('javaFern38')
engine.addEntity(javaFern38)
javaFern38.setParent(_scene)
javaFern38.addComponentOrReplace(gltfShape15)
const transform69 = new Transform({
  position: new Vector3(29.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern38.addComponentOrReplace(transform69)

const ostrichFerns12 = new Entity('ostrichFerns12')
engine.addEntity(ostrichFerns12)
ostrichFerns12.setParent(_scene)
ostrichFerns12.addComponentOrReplace(gltfShape19)
const transform70 = new Transform({
  position: new Vector3(21.5, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns12.addComponentOrReplace(transform70)

const ostrichFerns14 = new Entity('ostrichFerns14')
engine.addEntity(ostrichFerns14)
ostrichFerns14.setParent(_scene)
ostrichFerns14.addComponentOrReplace(gltfShape19)
const transform71 = new Transform({
  position: new Vector3(17, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns14.addComponentOrReplace(transform71)

const javaFern40 = new Entity('javaFern40')
engine.addEntity(javaFern40)
javaFern40.setParent(_scene)
javaFern40.addComponentOrReplace(gltfShape15)
const transform72 = new Transform({
  position: new Vector3(23.5, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern40.addComponentOrReplace(transform72)

const javaFern41 = new Entity('javaFern41')
engine.addEntity(javaFern41)
javaFern41.setParent(_scene)
javaFern41.addComponentOrReplace(gltfShape15)
const transform73 = new Transform({
  position: new Vector3(27, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern41.addComponentOrReplace(transform73)

const javaFern42 = new Entity('javaFern42')
engine.addEntity(javaFern42)
javaFern42.setParent(_scene)
javaFern42.addComponentOrReplace(gltfShape15)
const transform74 = new Transform({
  position: new Vector3(30, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern42.addComponentOrReplace(transform74)

const javaFern43 = new Entity('javaFern43')
engine.addEntity(javaFern43)
javaFern43.setParent(_scene)
javaFern43.addComponentOrReplace(gltfShape15)
const transform75 = new Transform({
  position: new Vector3(24, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern43.addComponentOrReplace(transform75)

const javaFern44 = new Entity('javaFern44')
engine.addEntity(javaFern44)
javaFern44.setParent(_scene)
javaFern44.addComponentOrReplace(gltfShape15)
const transform76 = new Transform({
  position: new Vector3(26.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern44.addComponentOrReplace(transform76)

const javaFern45 = new Entity('javaFern45')
engine.addEntity(javaFern45)
javaFern45.setParent(_scene)
javaFern45.addComponentOrReplace(gltfShape15)
const transform77 = new Transform({
  position: new Vector3(22.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern45.addComponentOrReplace(transform77)

const ostrichFerns15 = new Entity('ostrichFerns15')
engine.addEntity(ostrichFerns15)
ostrichFerns15.setParent(_scene)
ostrichFerns15.addComponentOrReplace(gltfShape19)
const transform78 = new Transform({
  position: new Vector3(18.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns15.addComponentOrReplace(transform78)

const javaFern47 = new Entity('javaFern47')
engine.addEntity(javaFern47)
javaFern47.setParent(_scene)
javaFern47.addComponentOrReplace(gltfShape15)
const transform79 = new Transform({
  position: new Vector3(22.5, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern47.addComponentOrReplace(transform79)

const javaFern49 = new Entity('javaFern49')
engine.addEntity(javaFern49)
javaFern49.setParent(_scene)
javaFern49.addComponentOrReplace(gltfShape15)
const transform80 = new Transform({
  position: new Vector3(22.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern49.addComponentOrReplace(transform80)

const ostrichFerns16 = new Entity('ostrichFerns16')
engine.addEntity(ostrichFerns16)
ostrichFerns16.setParent(_scene)
ostrichFerns16.addComponentOrReplace(gltfShape19)
const transform81 = new Transform({
  position: new Vector3(26.5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns16.addComponentOrReplace(transform81)

const gypsyMushroom2 = new Entity('gypsyMushroom2')
engine.addEntity(gypsyMushroom2)
gypsyMushroom2.setParent(_scene)
gypsyMushroom2.addComponentOrReplace(gltfShape14)
const transform82 = new Transform({
  position: new Vector3(29, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom2.addComponentOrReplace(transform82)

const gypsyMushroom3 = new Entity('gypsyMushroom3')
engine.addEntity(gypsyMushroom3)
gypsyMushroom3.setParent(_scene)
gypsyMushroom3.addComponentOrReplace(gltfShape14)
const transform83 = new Transform({
  position: new Vector3(29, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom3.addComponentOrReplace(transform83)

const gypsyMushroom4 = new Entity('gypsyMushroom4')
engine.addEntity(gypsyMushroom4)
gypsyMushroom4.setParent(_scene)
gypsyMushroom4.addComponentOrReplace(gltfShape14)
const transform84 = new Transform({
  position: new Vector3(29, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom4.addComponentOrReplace(transform84)

const gypsyMushroom5 = new Entity('gypsyMushroom5')
engine.addEntity(gypsyMushroom5)
gypsyMushroom5.setParent(_scene)
gypsyMushroom5.addComponentOrReplace(gltfShape14)
const transform85 = new Transform({
  position: new Vector3(28.834016799926758, 0, 23.169950485229492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom5.addComponentOrReplace(transform85)

const gypsyMushroom6 = new Entity('gypsyMushroom6')
engine.addEntity(gypsyMushroom6)
gypsyMushroom6.setParent(_scene)
gypsyMushroom6.addComponentOrReplace(gltfShape14)
const transform86 = new Transform({
  position: new Vector3(29.28367042541504, 0, 23.953168869018555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom6.addComponentOrReplace(transform86)

const gypsyMushroom7 = new Entity('gypsyMushroom7')
engine.addEntity(gypsyMushroom7)
gypsyMushroom7.setParent(_scene)
gypsyMushroom7.addComponentOrReplace(gltfShape14)
const transform87 = new Transform({
  position: new Vector3(29, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom7.addComponentOrReplace(transform87)

const gypsyMushroom8 = new Entity('gypsyMushroom8')
engine.addEntity(gypsyMushroom8)
gypsyMushroom8.setParent(_scene)
gypsyMushroom8.addComponentOrReplace(gltfShape14)
const transform88 = new Transform({
  position: new Vector3(29.042909622192383, 0, 23.295093536376953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom8.addComponentOrReplace(transform88)

const gypsyMushroom9 = new Entity('gypsyMushroom9')
engine.addEntity(gypsyMushroom9)
gypsyMushroom9.setParent(_scene)
gypsyMushroom9.addComponentOrReplace(gltfShape14)
const transform89 = new Transform({
  position: new Vector3(29.133825302124023, 0, 23.134355545043945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom9.addComponentOrReplace(transform89)

const gypsyMushroom10 = new Entity('gypsyMushroom10')
engine.addEntity(gypsyMushroom10)
gypsyMushroom10.setParent(_scene)
gypsyMushroom10.addComponentOrReplace(gltfShape14)
const transform90 = new Transform({
  position: new Vector3(28.88209342956543, 0, 22.62191390991211),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom10.addComponentOrReplace(transform90)

const magentaMushroom2 = new Entity('magentaMushroom2')
engine.addEntity(magentaMushroom2)
magentaMushroom2.setParent(_scene)
magentaMushroom2.addComponentOrReplace(gltfShape13)
const transform91 = new Transform({
  position: new Vector3(29.083221435546875, 0, 22.795509338378906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom2.addComponentOrReplace(transform91)

const gypsyMushroom11 = new Entity('gypsyMushroom11')
engine.addEntity(gypsyMushroom11)
gypsyMushroom11.setParent(_scene)
gypsyMushroom11.addComponentOrReplace(gltfShape14)
const transform92 = new Transform({
  position: new Vector3(24.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom11.addComponentOrReplace(transform92)

const magentaMushroom3 = new Entity('magentaMushroom3')
engine.addEntity(magentaMushroom3)
magentaMushroom3.setParent(_scene)
magentaMushroom3.addComponentOrReplace(gltfShape13)
const transform93 = new Transform({
  position: new Vector3(24.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom3.addComponentOrReplace(transform93)

const gypsyMushroom12 = new Entity('gypsyMushroom12')
engine.addEntity(gypsyMushroom12)
gypsyMushroom12.setParent(_scene)
gypsyMushroom12.addComponentOrReplace(gltfShape14)
const transform94 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom12.addComponentOrReplace(transform94)

const gypsyMushroom13 = new Entity('gypsyMushroom13')
engine.addEntity(gypsyMushroom13)
gypsyMushroom13.setParent(_scene)
gypsyMushroom13.addComponentOrReplace(gltfShape14)
const transform95 = new Transform({
  position: new Vector3(24.34265899658203, 0, 24.138036727905273),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom13.addComponentOrReplace(transform95)

const gypsyMushroom14 = new Entity('gypsyMushroom14')
engine.addEntity(gypsyMushroom14)
gypsyMushroom14.setParent(_scene)
gypsyMushroom14.addComponentOrReplace(gltfShape14)
const transform96 = new Transform({
  position: new Vector3(24.493846893310547, 0, 23.192262649536133),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom14.addComponentOrReplace(transform96)

const gypsyMushroom15 = new Entity('gypsyMushroom15')
engine.addEntity(gypsyMushroom15)
gypsyMushroom15.setParent(_scene)
gypsyMushroom15.addComponentOrReplace(gltfShape14)
const transform97 = new Transform({
  position: new Vector3(24.387510299682617, 0, 23.415128707885742),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom15.addComponentOrReplace(transform97)

const gypsyMushroom16 = new Entity('gypsyMushroom16')
engine.addEntity(gypsyMushroom16)
gypsyMushroom16.setParent(_scene)
gypsyMushroom16.addComponentOrReplace(gltfShape14)
const transform98 = new Transform({
  position: new Vector3(24.178993225097656, 0, 24.314998626708984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom16.addComponentOrReplace(transform98)

const gypsyMushroom17 = new Entity('gypsyMushroom17')
engine.addEntity(gypsyMushroom17)
gypsyMushroom17.setParent(_scene)
gypsyMushroom17.addComponentOrReplace(gltfShape14)
const transform99 = new Transform({
  position: new Vector3(24.01104736328125, 0, 23.748151779174805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom17.addComponentOrReplace(transform99)

const gypsyMushroom18 = new Entity('gypsyMushroom18')
engine.addEntity(gypsyMushroom18)
gypsyMushroom18.setParent(_scene)
gypsyMushroom18.addComponentOrReplace(gltfShape14)
const transform100 = new Transform({
  position: new Vector3(24.343887329101562, 0, 23.756763458251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom18.addComponentOrReplace(transform100)

const gypsyMushroom19 = new Entity('gypsyMushroom19')
engine.addEntity(gypsyMushroom19)
gypsyMushroom19.setParent(_scene)
gypsyMushroom19.addComponentOrReplace(gltfShape14)
const transform101 = new Transform({
  position: new Vector3(24.18212890625, 0, 23.88996124267578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom19.addComponentOrReplace(transform101)

const gypsyMushroom20 = new Entity('gypsyMushroom20')
engine.addEntity(gypsyMushroom20)
gypsyMushroom20.setParent(_scene)
gypsyMushroom20.addComponentOrReplace(gltfShape14)
const transform102 = new Transform({
  position: new Vector3(24.07070541381836, 0, 24.46508026123047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom20.addComponentOrReplace(transform102)

const magentaMushroom4 = new Entity('magentaMushroom4')
engine.addEntity(magentaMushroom4)
magentaMushroom4.setParent(_scene)
magentaMushroom4.addComponentOrReplace(gltfShape13)
const transform103 = new Transform({
  position: new Vector3(23.812541961669922, 0, 25.64577865600586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom4.addComponentOrReplace(transform103)

const magentaMushroom5 = new Entity('magentaMushroom5')
engine.addEntity(magentaMushroom5)
magentaMushroom5.setParent(_scene)
magentaMushroom5.addComponentOrReplace(gltfShape13)
const transform104 = new Transform({
  position: new Vector3(23.794971466064453, 0, 26.7491455078125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom5.addComponentOrReplace(transform104)

const gypsyMushroom21 = new Entity('gypsyMushroom21')
engine.addEntity(gypsyMushroom21)
gypsyMushroom21.setParent(_scene)
gypsyMushroom21.addComponentOrReplace(gltfShape14)
const transform105 = new Transform({
  position: new Vector3(23.753841400146484, 0, 25.310733795166016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom21.addComponentOrReplace(transform105)

const gypsyMushroom22 = new Entity('gypsyMushroom22')
engine.addEntity(gypsyMushroom22)
gypsyMushroom22.setParent(_scene)
gypsyMushroom22.addComponentOrReplace(gltfShape14)
const transform106 = new Transform({
  position: new Vector3(23.70441436767578, 0, 27.020702362060547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom22.addComponentOrReplace(transform106)

const gypsyMushroom23 = new Entity('gypsyMushroom23')
engine.addEntity(gypsyMushroom23)
gypsyMushroom23.setParent(_scene)
gypsyMushroom23.addComponentOrReplace(gltfShape14)
const transform107 = new Transform({
  position: new Vector3(23.724117279052734, 0, 26.12838363647461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom23.addComponentOrReplace(transform107)

const gypsyMushroom24 = new Entity('gypsyMushroom24')
engine.addEntity(gypsyMushroom24)
gypsyMushroom24.setParent(_scene)
gypsyMushroom24.addComponentOrReplace(gltfShape14)
const transform108 = new Transform({
  position: new Vector3(23.627668380737305, 0, 25.79204750061035),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom24.addComponentOrReplace(transform108)

const gypsyMushroom25 = new Entity('gypsyMushroom25')
engine.addEntity(gypsyMushroom25)
gypsyMushroom25.setParent(_scene)
gypsyMushroom25.addComponentOrReplace(gltfShape14)
const transform109 = new Transform({
  position: new Vector3(23.497724533081055, 0, 26.5927791595459),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom25.addComponentOrReplace(transform109)

const gypsyMushroom26 = new Entity('gypsyMushroom26')
engine.addEntity(gypsyMushroom26)
gypsyMushroom26.setParent(_scene)
gypsyMushroom26.addComponentOrReplace(gltfShape14)
const transform110 = new Transform({
  position: new Vector3(23.900564193725586, 0, 24.846296310424805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom26.addComponentOrReplace(transform110)

const gypsyMushroom27 = new Entity('gypsyMushroom27')
engine.addEntity(gypsyMushroom27)
gypsyMushroom27.setParent(_scene)
gypsyMushroom27.addComponentOrReplace(gltfShape14)
const transform111 = new Transform({
  position: new Vector3(23.6092472076416, 0, 25.440710067749023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom27.addComponentOrReplace(transform111)

const gypsyMushroom28 = new Entity('gypsyMushroom28')
engine.addEntity(gypsyMushroom28)
gypsyMushroom28.setParent(_scene)
gypsyMushroom28.addComponentOrReplace(gltfShape14)
const transform112 = new Transform({
  position: new Vector3(23.567031860351562, 0, 25.63474464416504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom28.addComponentOrReplace(transform112)

const gypsyMushroom29 = new Entity('gypsyMushroom29')
engine.addEntity(gypsyMushroom29)
gypsyMushroom29.setParent(_scene)
gypsyMushroom29.addComponentOrReplace(gltfShape14)
const transform113 = new Transform({
  position: new Vector3(23.385305404663086, 0, 25.492450714111328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom29.addComponentOrReplace(transform113)

const gypsyMushroom30 = new Entity('gypsyMushroom30')
engine.addEntity(gypsyMushroom30)
gypsyMushroom30.setParent(_scene)
gypsyMushroom30.addComponentOrReplace(gltfShape14)
const transform114 = new Transform({
  position: new Vector3(23.62370491027832, 0, 25.97946548461914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom30.addComponentOrReplace(transform114)

const gypsyMushroom31 = new Entity('gypsyMushroom31')
engine.addEntity(gypsyMushroom31)
gypsyMushroom31.setParent(_scene)
gypsyMushroom31.addComponentOrReplace(gltfShape14)
const transform115 = new Transform({
  position: new Vector3(23.590913772583008, 0, 26.34659194946289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom31.addComponentOrReplace(transform115)

const gypsyMushroom32 = new Entity('gypsyMushroom32')
engine.addEntity(gypsyMushroom32)
gypsyMushroom32.setParent(_scene)
gypsyMushroom32.addComponentOrReplace(gltfShape14)
const transform116 = new Transform({
  position: new Vector3(23.665939331054688, 0, 26.831933975219727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom32.addComponentOrReplace(transform116)

const gypsyMushroom33 = new Entity('gypsyMushroom33')
engine.addEntity(gypsyMushroom33)
gypsyMushroom33.setParent(_scene)
gypsyMushroom33.addComponentOrReplace(gltfShape14)
const transform117 = new Transform({
  position: new Vector3(23.63330078125, 0, 27.189565658569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom33.addComponentOrReplace(transform117)

const gypsyMushroom34 = new Entity('gypsyMushroom34')
engine.addEntity(gypsyMushroom34)
gypsyMushroom34.setParent(_scene)
gypsyMushroom34.addComponentOrReplace(gltfShape14)
const transform118 = new Transform({
  position: new Vector3(25.627220153808594, 0, 22.045698165893555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom34.addComponentOrReplace(transform118)

const gypsyMushroom35 = new Entity('gypsyMushroom35')
engine.addEntity(gypsyMushroom35)
gypsyMushroom35.setParent(_scene)
gypsyMushroom35.addComponentOrReplace(gltfShape14)
const transform119 = new Transform({
  position: new Vector3(25.36901092529297, 0, 22.208192825317383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom35.addComponentOrReplace(transform119)

const gypsyMushroom36 = new Entity('gypsyMushroom36')
engine.addEntity(gypsyMushroom36)
gypsyMushroom36.setParent(_scene)
gypsyMushroom36.addComponentOrReplace(gltfShape14)
const transform120 = new Transform({
  position: new Vector3(26.013980865478516, 0, 21.77597999572754),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
gypsyMushroom36.addComponentOrReplace(transform120)

const evergreenShrub2 = new Entity('evergreenShrub2')
engine.addEntity(evergreenShrub2)
evergreenShrub2.setParent(_scene)
evergreenShrub2.addComponentOrReplace(gltfShape17)
const transform121 = new Transform({
  position: new Vector3(2.5, 0, 26.5),
  rotation: new Quaternion(7.986878641634033e-15, -1, 1.1920928244535389e-7, -1.4901161193847656e-7),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub2.addComponentOrReplace(transform121)

const evergreenShrub6 = new Entity('evergreenShrub6')
engine.addEntity(evergreenShrub6)
evergreenShrub6.setParent(_scene)
evergreenShrub6.addComponentOrReplace(gltfShape17)
const transform122 = new Transform({
  position: new Vector3(7.845815658569336, 0, 30.24541664123535),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub6.addComponentOrReplace(transform122)

const evergreenShrub7 = new Entity('evergreenShrub7')
engine.addEntity(evergreenShrub7)
evergreenShrub7.setParent(_scene)
evergreenShrub7.addComponentOrReplace(gltfShape17)
const transform123 = new Transform({
  position: new Vector3(6, 0, 29.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
evergreenShrub7.addComponentOrReplace(transform123)

const evergreenShrub9 = new Entity('evergreenShrub9')
engine.addEntity(evergreenShrub9)
evergreenShrub9.setParent(_scene)
evergreenShrub9.addComponentOrReplace(gltfShape17)
const transform124 = new Transform({
  position: new Vector3(29, 0, 27.5),
  rotation: new Quaternion(-3.2851078069173712e-15, 0.8819212913513184, -1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
evergreenShrub9.addComponentOrReplace(transform124)

const largeForestLog2 = new Entity('largeForestLog2')
engine.addEntity(largeForestLog2)
largeForestLog2.setParent(_scene)
largeForestLog2.addComponentOrReplace(gltfShape4)
const transform125 = new Transform({
  position: new Vector3(30.5, 0, 25),
  rotation: new Quaternion(7.142908142000531e-16, 0.8314695954322815, -9.911889264913043e-8, 0.5555702447891235),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
largeForestLog2.addComponentOrReplace(transform125)

const largeForestLog3 = new Entity('largeForestLog3')
engine.addEntity(largeForestLog3)
largeForestLog3.setParent(_scene)
largeForestLog3.addComponentOrReplace(gltfShape4)
const transform126 = new Transform({
  position: new Vector3(30.5, 0, 29.5),
  rotation: new Quaternion(2.1672942024145137e-16, 0.19509029388427734, -2.3256571779484148e-8, -0.9807853698730469),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
largeForestLog3.addComponentOrReplace(transform126)

const evergreenShrub10 = new Entity('evergreenShrub10')
engine.addEntity(evergreenShrub10)
evergreenShrub10.setParent(_scene)
evergreenShrub10.addComponentOrReplace(gltfShape17)
const transform127 = new Transform({
  position: new Vector3(27.5, 0, 30.5),
  rotation: new Quaternion(-1.3410112118515151e-14, 5.960464477539063e-8, 2.153592279822373e-15, -1),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
evergreenShrub10.addComponentOrReplace(transform127)

const evergreenShrub11 = new Entity('evergreenShrub11')
engine.addEntity(evergreenShrub11)
evergreenShrub11.setParent(_scene)
evergreenShrub11.addComponentOrReplace(gltfShape17)
const transform128 = new Transform({
  position: new Vector3(29, 0, 29),
  rotation: new Quaternion(-3.143652245934719e-15, 0.9807853698730469, -1.1691871293351142e-7, 0.19509032368659973),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
evergreenShrub11.addComponentOrReplace(transform128)

const evergreenShrub12 = new Entity('evergreenShrub12')
engine.addEntity(evergreenShrub12)
evergreenShrub12.setParent(_scene)
evergreenShrub12.addComponentOrReplace(gltfShape17)
const transform129 = new Transform({
  position: new Vector3(31, 0, 26.5),
  rotation: new Quaternion(-2.8944979280163402e-15, 1, -1.1920927533992653e-7, 1.4901159417490817e-8),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
evergreenShrub12.addComponentOrReplace(transform129)

const evergreenShrub13 = new Entity('evergreenShrub13')
engine.addEntity(evergreenShrub13)
evergreenShrub13.setParent(_scene)
evergreenShrub13.addComponentOrReplace(gltfShape17)
const transform130 = new Transform({
  position: new Vector3(9.5, 0, 9),
  rotation: new Quaternion(4.8581985500749814e-15, 0.9807853102684021, -1.1691870582808406e-7, 0.19509032368659973),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
evergreenShrub13.addComponentOrReplace(transform130)

const evergreenShrub14 = new Entity('evergreenShrub14')
engine.addEntity(evergreenShrub14)
evergreenShrub14.setParent(_scene)
evergreenShrub14.addComponentOrReplace(gltfShape17)
const transform131 = new Transform({
  position: new Vector3(16.5, 0, 4.5),
  rotation: new Quaternion(-1.9129922799872133e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub14.addComponentOrReplace(transform131)

const evergreenShrub15 = new Entity('evergreenShrub15')
engine.addEntity(evergreenShrub15)
evergreenShrub15.setParent(_scene)
evergreenShrub15.addComponentOrReplace(gltfShape17)
const transform132 = new Transform({
  position: new Vector3(11.5, 0, 4.5),
  rotation: new Quaternion(6.527961375260962e-15, -0.9951847791671753, 1.1863525628541538e-7, 0.09801703691482544),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
evergreenShrub15.addComponentOrReplace(transform132)

const evergreenShrub16 = new Entity('evergreenShrub16')
engine.addEntity(evergreenShrub16)
evergreenShrub16.setParent(_scene)
evergreenShrub16.addComponentOrReplace(gltfShape17)
const transform133 = new Transform({
  position: new Vector3(2, 0, 8),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
evergreenShrub16.addComponentOrReplace(transform133)

const evergreenShrub17 = new Entity('evergreenShrub17')
engine.addEntity(evergreenShrub17)
evergreenShrub17.setParent(_scene)
evergreenShrub17.addComponentOrReplace(gltfShape17)
const transform134 = new Transform({
  position: new Vector3(5, 0, 7.5),
  rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
evergreenShrub17.addComponentOrReplace(transform134)

const evergreenShrub18 = new Entity('evergreenShrub18')
engine.addEntity(evergreenShrub18)
evergreenShrub18.setParent(_scene)
evergreenShrub18.addComponentOrReplace(gltfShape17)
const transform135 = new Transform({
  position: new Vector3(3, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub18.addComponentOrReplace(transform135)

const evergreenShrub19 = new Entity('evergreenShrub19')
engine.addEntity(evergreenShrub19)
evergreenShrub19.setParent(_scene)
evergreenShrub19.addComponentOrReplace(gltfShape17)
const transform136 = new Transform({
  position: new Vector3(7, 0, 3),
  rotation: new Quaternion(-1.9087673061160884e-16, -0.2902846932411194, 3.4604624943312956e-8, 0.9569404125213623),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub19.addComponentOrReplace(transform136)

const evergreenShrub21 = new Entity('evergreenShrub21')
engine.addEntity(evergreenShrub21)
evergreenShrub21.setParent(_scene)
evergreenShrub21.addComponentOrReplace(gltfShape17)
const transform137 = new Transform({
  position: new Vector3(5, 0, 13),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.8314696550369263, 9.911889975455779e-8, 0.5555702447891235),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
evergreenShrub21.addComponentOrReplace(transform137)

const evergreenShrub22 = new Entity('evergreenShrub22')
engine.addEntity(evergreenShrub22)
evergreenShrub22.setParent(_scene)
evergreenShrub22.addComponentOrReplace(gltfShape17)
const transform138 = new Transform({
  position: new Vector3(8.5, 0, 12.5),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub22.addComponentOrReplace(transform138)

const evergreenShrub23 = new Entity('evergreenShrub23')
engine.addEntity(evergreenShrub23)
evergreenShrub23.setParent(_scene)
evergreenShrub23.addComponentOrReplace(gltfShape17)
const transform139 = new Transform({
  position: new Vector3(1.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub23.addComponentOrReplace(transform139)

const ostrichFerns19 = new Entity('ostrichFerns19')
engine.addEntity(ostrichFerns19)
ostrichFerns19.setParent(_scene)
ostrichFerns19.addComponentOrReplace(gltfShape19)
const transform140 = new Transform({
  position: new Vector3(13, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns19.addComponentOrReplace(transform140)

const ostrichFerns20 = new Entity('ostrichFerns20')
engine.addEntity(ostrichFerns20)
ostrichFerns20.setParent(_scene)
ostrichFerns20.addComponentOrReplace(gltfShape19)
const transform141 = new Transform({
  position: new Vector3(14, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ostrichFerns20.addComponentOrReplace(transform141)

const javaFern50 = new Entity('javaFern50')
engine.addEntity(javaFern50)
javaFern50.setParent(_scene)
javaFern50.addComponentOrReplace(gltfShape15)
const transform142 = new Transform({
  position: new Vector3(18, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern50.addComponentOrReplace(transform142)

const javaFern51 = new Entity('javaFern51')
engine.addEntity(javaFern51)
javaFern51.setParent(_scene)
javaFern51.addComponentOrReplace(gltfShape15)
const transform143 = new Transform({
  position: new Vector3(14.090163230895996, 0, 2.5512166023254395),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern51.addComponentOrReplace(transform143)

const javaFern53 = new Entity('javaFern53')
engine.addEntity(javaFern53)
javaFern53.setParent(_scene)
javaFern53.addComponentOrReplace(gltfShape15)
const transform144 = new Transform({
  position: new Vector3(8.582106590270996, 0, 6.193391799926758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern53.addComponentOrReplace(transform144)

const javaFern54 = new Entity('javaFern54')
engine.addEntity(javaFern54)
javaFern54.setParent(_scene)
javaFern54.addComponentOrReplace(gltfShape15)
const transform145 = new Transform({
  position: new Vector3(8, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern54.addComponentOrReplace(transform145)

const javaFern55 = new Entity('javaFern55')
engine.addEntity(javaFern55)
javaFern55.setParent(_scene)
javaFern55.addComponentOrReplace(gltfShape15)
const transform146 = new Transform({
  position: new Vector3(5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern55.addComponentOrReplace(transform146)

const javaFern56 = new Entity('javaFern56')
engine.addEntity(javaFern56)
javaFern56.setParent(_scene)
javaFern56.addComponentOrReplace(gltfShape15)
const transform147 = new Transform({
  position: new Vector3(8, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern56.addComponentOrReplace(transform147)

const javaFern59 = new Entity('javaFern59')
engine.addEntity(javaFern59)
javaFern59.setParent(_scene)
javaFern59.addComponentOrReplace(gltfShape15)
const transform148 = new Transform({
  position: new Vector3(6, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern59.addComponentOrReplace(transform148)

const javaFern60 = new Entity('javaFern60')
engine.addEntity(javaFern60)
javaFern60.setParent(_scene)
javaFern60.addComponentOrReplace(gltfShape15)
const transform149 = new Transform({
  position: new Vector3(7.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern60.addComponentOrReplace(transform149)

const lightGreenPoplars7 = new Entity('lightGreenPoplars7')
engine.addEntity(lightGreenPoplars7)
lightGreenPoplars7.setParent(_scene)
lightGreenPoplars7.addComponentOrReplace(gltfShape5)
const transform150 = new Transform({
  position: new Vector3(17, 0, 27),
  rotation: new Quaternion(4.173286438375733e-15, -0.8819212913513184, 1.0513320347627086e-7, -0.4713967442512512),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
lightGreenPoplars7.addComponentOrReplace(transform150)

const lightGreenSycamoreTree6 = new Entity('lightGreenSycamoreTree6')
engine.addEntity(lightGreenSycamoreTree6)
lightGreenSycamoreTree6.setParent(_scene)
lightGreenSycamoreTree6.addComponentOrReplace(gltfShape6)
const transform151 = new Transform({
  position: new Vector3(26.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree6.addComponentOrReplace(transform151)

const lightGreenSycamoreTree7 = new Entity('lightGreenSycamoreTree7')
engine.addEntity(lightGreenSycamoreTree7)
lightGreenSycamoreTree7.setParent(_scene)
lightGreenSycamoreTree7.addComponentOrReplace(gltfShape6)
const transform152 = new Transform({
  position: new Vector3(5, 0, 21),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
lightGreenSycamoreTree7.addComponentOrReplace(transform152)

const sunflower32 = new Entity('sunflower32')
engine.addEntity(sunflower32)
sunflower32.setParent(_scene)
sunflower32.addComponentOrReplace(gltfShape12)
const transform153 = new Transform({
  position: new Vector3(6, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower32.addComponentOrReplace(transform153)

const classicBench4 = new Entity('classicBench4')
engine.addEntity(classicBench4)
classicBench4.setParent(_scene)
classicBench4.addComponentOrReplace(gltfShape9)
const transform154 = new Transform({
  position: new Vector3(27.5, 0, 7),
  rotation: new Quaternion(-2.5951088388533874e-15, -0.38268348574638367, 4.561941935321556e-8, -0.9238795638084412),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
classicBench4.addComponentOrReplace(transform154)

const rose5 = new Entity('rose5')
engine.addEntity(rose5)
rose5.setParent(_scene)
const gltfShape20 = new GLTFShape("18bbb621-1c3e-4ee1-ba0a-a7c77dd01cbb/Flower_03/Flower_03.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
rose5.addComponentOrReplace(gltfShape20)
const transform155 = new Transform({
  position: new Vector3(28.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose5.addComponentOrReplace(transform155)

const rose6 = new Entity('rose6')
engine.addEntity(rose6)
rose6.setParent(_scene)
rose6.addComponentOrReplace(gltfShape20)
const transform156 = new Transform({
  position: new Vector3(27, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose6.addComponentOrReplace(transform156)

const rose7 = new Entity('rose7')
engine.addEntity(rose7)
rose7.setParent(_scene)
rose7.addComponentOrReplace(gltfShape20)
const transform157 = new Transform({
  position: new Vector3(25.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose7.addComponentOrReplace(transform157)

const rose8 = new Entity('rose8')
engine.addEntity(rose8)
rose8.setParent(_scene)
rose8.addComponentOrReplace(gltfShape20)
const transform158 = new Transform({
  position: new Vector3(28, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose8.addComponentOrReplace(transform158)

const rose9 = new Entity('rose9')
engine.addEntity(rose9)
rose9.setParent(_scene)
rose9.addComponentOrReplace(gltfShape20)
const transform159 = new Transform({
  position: new Vector3(24.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose9.addComponentOrReplace(transform159)

const rose10 = new Entity('rose10')
engine.addEntity(rose10)
rose10.setParent(_scene)
rose10.addComponentOrReplace(gltfShape20)
const transform160 = new Transform({
  position: new Vector3(25, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose10.addComponentOrReplace(transform160)

const rose11 = new Entity('rose11')
engine.addEntity(rose11)
rose11.setParent(_scene)
rose11.addComponentOrReplace(gltfShape20)
const transform161 = new Transform({
  position: new Vector3(26, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose11.addComponentOrReplace(transform161)

const rose12 = new Entity('rose12')
engine.addEntity(rose12)
rose12.setParent(_scene)
rose12.addComponentOrReplace(gltfShape20)
const transform162 = new Transform({
  position: new Vector3(27, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose12.addComponentOrReplace(transform162)

const flowerSprouts5 = new Entity('flowerSprouts5')
engine.addEntity(flowerSprouts5)
flowerSprouts5.setParent(_scene)
flowerSprouts5.addComponentOrReplace(gltfShape16)
const transform163 = new Transform({
  position: new Vector3(26, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts5.addComponentOrReplace(transform163)

const flowerSprouts6 = new Entity('flowerSprouts6')
engine.addEntity(flowerSprouts6)
flowerSprouts6.setParent(_scene)
flowerSprouts6.addComponentOrReplace(gltfShape16)
const transform164 = new Transform({
  position: new Vector3(28, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts6.addComponentOrReplace(transform164)

const flowerSprouts7 = new Entity('flowerSprouts7')
engine.addEntity(flowerSprouts7)
flowerSprouts7.setParent(_scene)
flowerSprouts7.addComponentOrReplace(gltfShape16)
const transform165 = new Transform({
  position: new Vector3(25.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts7.addComponentOrReplace(transform165)

const flowerSprouts8 = new Entity('flowerSprouts8')
engine.addEntity(flowerSprouts8)
flowerSprouts8.setParent(_scene)
flowerSprouts8.addComponentOrReplace(gltfShape16)
const transform166 = new Transform({
  position: new Vector3(24.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts8.addComponentOrReplace(transform166)

const flowerSprouts9 = new Entity('flowerSprouts9')
engine.addEntity(flowerSprouts9)
flowerSprouts9.setParent(_scene)
flowerSprouts9.addComponentOrReplace(gltfShape16)
const transform167 = new Transform({
  position: new Vector3(25.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts9.addComponentOrReplace(transform167)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(indicatorArrowGree, {"active":true}, createChannel(channelId, indicatorArrowGree, channelBus))