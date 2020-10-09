let cliente = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        cliente += 1
    } else if (input.buttonIsPressed(Button.A)) {
        cliente += -1
    } else if (input.buttonIsPressed(Button.AB)) {
        cliente = 0
        basic.showNumber(cliente)
    }
    basic.showNumber(cliente)
})
