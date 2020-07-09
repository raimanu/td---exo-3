let nb = 0
input.onButtonPressed(Button.A, function () {
    if (nb < 10) {
        nb += 1
        basic.showString("" + (nb))
    }
})
basic.forever(function () {
	
})
