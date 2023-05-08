radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Angry)
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Surprised)
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("5")
})
radio.setGroup(127)
