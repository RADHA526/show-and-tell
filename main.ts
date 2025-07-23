input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . #
        . # # # .
        # . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        # . # . #
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        # . # . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        # # # # #
        . . # . .
        # # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        # . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # #
        . . # . .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("AHH")
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        . # . # .
        `)
})
basic.showString("WELCOME")
