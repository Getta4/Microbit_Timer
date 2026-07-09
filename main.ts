let i = 0
let set_min = 0
function 点灯_分 () {
    i = 0
    for (let index = 0; index < set_min; index++) {
        if (4 < i) {
            led.plot(i - 5, 1)
        } else {
            led.plot(i, 0)
        }
        i += 1
    }
}
input.onButtonPressed(Button.A, function () {
    set_min += 1
    点灯_分()
})
basic.forever(function () {
	
})
