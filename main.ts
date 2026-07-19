input.onPinPressed(TouchPin.P0, function () {
    if (動作 == 0) {
        set_sec = 0
        set_sec_x10 = 0
        set_min = 3
        点灯_分()
        点灯_秒()
    }
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
    i = 0
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
    if (動作 == 0) {
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
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (動作 == 0) {
        set_sec = 0
        set_sec_x10 = 0
        set_min = 7
        点灯_分()
        点灯_秒()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (動作 == 0) {
        set_min = 0
        set_sec = 0
        set_sec_x10 = 0
        点灯_分()
        点灯_秒()
    }
})
input.onButtonPressed(Button.B, function () {
    if (動作 == 0) {
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
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (動作 == 0) {
        set_sec = 0
        set_sec_x10 = 0
        set_min = 5
        点灯_分()
        点灯_秒()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (0 < set_timer) {
        if (動作 == 1) {
            動作 = 0
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        } else {
            動作 = 1
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        }
    }
})
let set_timer = 0
let i = 0
let 動作 = 0
let set_sec_x10 = 0
let set_sec = 0
let set_min = 0
set_min = 0
set_sec = 0
set_sec_x10 = 0
basic.forever(function () {
    set_timer = set_min * 60 + (set_sec_x10 * 10 + set_sec)
    if (0 < set_timer && 動作 == 1) {
        basic.pause(1000)
        while (0 < set_timer && 動作 == 1) {
            set_timer += -1
            set_min = Math.trunc(set_timer / 60)
            set_sec_x10 = Math.trunc(set_timer % 60 / 10)
            set_sec = set_timer % 60 % 10
            点灯_分()
            点灯_秒()
            basic.pause(1000)
        }
        if (set_timer <= 0) {
            for (let index = 0; index < 8; index++) {
                music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
                basic.pause(200)
            }
        }
    }
})
