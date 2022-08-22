let Joystick_X = 0
let Joystick_Y = 0
let Screen_Y = 0
let Screen_X = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    Joystick_X = pins.analogReadPin(AnalogPin.P1)
    Joystick_Y = pins.analogReadPin(AnalogPin.P0)
    Screen_Y = Joystick_Y / 250
    if (Joystick_X < 200) {
        Screen_X = 4
    } else if (Joystick_X < 400) {
        Screen_X = 3
    } else if (Joystick_X < 600) {
        Screen_X = 2
    } else if (Joystick_X < 800) {
        Screen_X = 1
    } else {
        Screen_X = 0
    }
    serial.writeString("X=" + Joystick_X + ", " + "Y=" + Joystick_Y)
    serial.writeLine("")
    serial.writeLine("")
    led.toggle(Screen_X, Screen_Y)
    basic.pause(1000)
})
