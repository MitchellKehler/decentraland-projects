import { SetPlayerPet } from 'pets'

// create canvas
export const petStoreCanvas = new UICanvas()
petStoreCanvas.visible = false

const petStoreContainer = new UIContainerRect(petStoreCanvas)
petStoreContainer.width = "80%"
petStoreContainer.height = "100%"
//petStoreContainer.hAlign = "middle"
//petStoreContainer.vAlign = "top"
petStoreContainer.color = Color4.Black()
petStoreContainer.opacity = 0.75

const petStoreTitleText = new UIText(petStoreContainer)
petStoreTitleText.value = "Welcome to the Pet Store!"
petStoreTitleText.font = new Font(Fonts.SanFrancisco)
petStoreTitleText.hAlign = "left"
petStoreTitleText.vAlign = "top"
petStoreTitleText.fontSize = 30
petStoreTitleText.positionX = 50
petStoreTitleText.positionY = -10
petStoreTitleText.color = Color4.White()
petStoreTitleText.opacity = 1

// add pet buttons
function addButton(source: string) {
    const button = new UIImage(petStoreContainer, new Texture(source))
    button.name = "clickable-image"
    button.hAlign = "left"
    button.vAlign = "top"
    button.width = 250
    button.height = 250
    button.sourceWidth = 250
    button.sourceHeight = 250
    button.isPointerBlocker = true
    return button
}

const batButton = addButton("images/Bat.png")
batButton.positionX = 50
batButton.positionY = -80
batButton.onClick = new OnClick(() => {
    SetPlayerPet("bat")
    petStoreCanvas.visible = false
})

const spiderButton = addButton("images/Spider.png")
spiderButton.positionX = 315
spiderButton.positionY = -80
spiderButton.onClick = new OnClick(() => {
    SetPlayerPet("spider")
    petStoreCanvas.visible = false
})

const critter3Button = addButton("images/Egglet.png")
critter3Button.positionX = 580
critter3Button.positionY = -80
critter3Button.onClick = new OnClick(() => {
    SetPlayerPet("egglet")
    petStoreCanvas.visible = false
})

const critter4Button = addButton("images/Chick.png")
critter4Button.positionX = 845
critter4Button.positionY = -80
critter4Button.onClick = new OnClick(() => {
    SetPlayerPet("chick")
    petStoreCanvas.visible = false
})

const critter5Button = addButton("images/Seed.png")
critter5Button.positionX = 50
critter5Button.positionY = -345
critter5Button.onClick = new OnClick(() => {
    SetPlayerPet("seed")
    petStoreCanvas.visible = false
})

const critter6Button = addButton("images/Mushroom.png")
critter6Button.positionX = 315
critter6Button.positionY = -345
critter6Button.onClick = new OnClick(() => {
    SetPlayerPet("mushroom")
    petStoreCanvas.visible = false
})

const critter7Button = addButton("images/Ghost.png")
critter7Button.positionX = 580
critter7Button.positionY = -345
critter7Button.onClick = new OnClick(() => {
    SetPlayerPet("ghost")
    petStoreCanvas.visible = false
})

const critter8Button = addButton("images/Bee.png")
critter8Button.positionX = 845
critter8Button.positionY = -345
critter8Button.onClick = new OnClick(() => {
    SetPlayerPet("bee")
    petStoreCanvas.visible = false
})

let imgCloseBtn = new Texture("images/close.png")
const closeBtn = new UIImage(petStoreContainer, imgCloseBtn)
closeBtn.name = 'close_btn'
closeBtn.hAlign = "right"
closeBtn.vAlign = "top"
closeBtn.width = 50
closeBtn.height = 50
closeBtn.sourceWidth = 112
closeBtn.sourceHeight = 112
closeBtn.positionX = -10
closeBtn.positionY = -10
closeBtn.isPointerBlocker = true
closeBtn.opacity = 1
closeBtn.onClick = new OnClick(() => {
    log("Close Button Clicked")
    petStoreCanvas.visible = false
})
