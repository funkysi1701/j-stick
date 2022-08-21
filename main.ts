let Joystick_X = 0
let Joystick_Y = 0
let Screen_X = 0
let Screen_Y = 0
basic.forever(function () {
    Joystick_X = pins.analogReadPin(AnalogPin.P1)
    Joystick_Y = pins.analogReadPin(AnalogPin.P0)
    Screen_X = Joystick_X / 250
    Screen_Y = Joystick_Y / 250
    basic.clearScreen()
})
