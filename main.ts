input.onPinPressed(TouchPin.P0, function () {
    set_sec = 0
    set_sec_x10 = 0
    set_min = 3
    点灯_分()
    点灯_秒()
})
function 点灯_秒 () {
    i = 0
    for (let index = 0; index < 10; index++) {
        if (4 < i) {
            led.unplot(i - 5, 4)
        } else {
            led.unplot(i, 3)
        }
        i += 1
    }
    i = 0
    for (let index = 0; index < 5; index++) {
        led.unplot(i, 2)
        i += 1
    }
    i = 0
    for (let index = 0; index < set_sec; index++) {
        if (4 < i) {
            led.plot(i - 5, 4)
        } else {
            led.plot(i, 3)
        }
        i += 1
    }
    i = 0
    for (let index = 0; index < set_sec_x10; index++) {
        led.plot(i, 2)
        i += 1
    }
}
function 点灯_分 () {
    for (let index = 0; index < 10; index++) {
        if (4 < i) {
            led.unplot(i - 5, 1)
        } else {
            led.unplot(i, 0)
        }
        i += 1
    }
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
    if (10 < set_min) {
        set_min = 0
        i = 0
        for (let index = 0; index < 10; index++) {
            if (4 < i) {
                led.unplot(i - 5, 1)
            } else {
                led.unplot(i, 0)
            }
            i += 1
        }
    } else {
        点灯_分()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    set_sec = 0
    set_sec_x10 = 0
    set_min = 7
    点灯_分()
    点灯_秒()
})
input.onButtonPressed(Button.AB, function () {
    set_min = 0
    set_sec = 0
    set_sec_x10 = 0
    点灯_分()
    点灯_秒()
})
input.onButtonPressed(Button.B, function () {
    set_sec += 1
    if (9 < set_sec) {
        set_sec = 0
        i = 0
        for (let index = 0; index < 10; index++) {
            if (4 < i) {
                led.unplot(i - 5, 4)
            } else {
                led.unplot(i, 3)
            }
            i += 1
        }
        set_sec_x10 += 1
        if (5 < set_sec_x10) {
            set_sec_x10 = 0
            i = 0
            for (let index = 0; index < 5; index++) {
                led.unplot(i, 2)
                i += 1
            }
        }
        点灯_秒()
    } else {
        点灯_秒()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    set_sec = 0
    set_sec_x10 = 0
    set_min = 5
    点灯_分()
    点灯_秒()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    set_timer = set_min * 60 + (set_sec_x10 * 10 + set_sec)
    while (0 < set_timer) {
        basic.pause(1000)
        set_timer += -1
        set_min = Math.trunc(set_timer / 60)
        set_sec_x10 = Math.trunc(set_timer % 60 / 10)
        set_sec = set_timer % 60 % 10
        点灯_分()
        点灯_秒()
    }
})
let set_timer = 0
let i = 0
let set_sec_x10 = 0
let set_sec = 0
let set_min = 0
set_min = 0
set_sec = 0
set_sec_x10 = 0
