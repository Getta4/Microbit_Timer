def on_pin_pressed_p0():
    global set_sec, set_sec_x10, set_min
    if 動作 == 0:
        set_sec = 0
        set_sec_x10 = 0
        set_min = 3
        点灯_分()
        点灯_秒()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def 点灯_秒():
    global i
    i = 0
    for index in range(10):
        if 4 < i:
            led.unplot(i - 5, 4)
        else:
            led.unplot(i, 3)
        i += 1
    i = 0
    for index2 in range(5):
        led.unplot(i, 2)
        i += 1
    i = 0
    for index3 in range(set_sec):
        if 4 < i:
            led.plot(i - 5, 4)
        else:
            led.plot(i, 3)
        i += 1
    i = 0
    for index4 in range(set_sec_x10):
        led.plot(i, 2)
        i += 1
def 点灯_分():
    global i
    for index5 in range(10):
        if 4 < i:
            led.unplot(i - 5, 1)
        else:
            led.unplot(i, 0)
        i += 1
    i = 0
    for index6 in range(set_min):
        if 4 < i:
            led.plot(i - 5, 1)
        else:
            led.plot(i, 0)
        i += 1

def on_button_pressed_a():
    global set_min, i
    if 動作 == 0:
        set_min += 1
        if 10 < set_min:
            set_min = 0
            i = 0
            for index7 in range(10):
                if 4 < i:
                    led.unplot(i - 5, 1)
                else:
                    led.unplot(i, 0)
                i += 1
        else:
            点灯_分()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global set_sec, set_sec_x10, set_min
    if 動作 == 0:
        set_sec = 0
        set_sec_x10 = 0
        set_min = 7
        点灯_分()
        点灯_秒()
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_ab():
    global set_min, set_sec, set_sec_x10
    if 動作 == 0:
        set_min = 0
        set_sec = 0
        set_sec_x10 = 0
        点灯_分()
        点灯_秒()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global set_sec, i, set_sec_x10
    if 動作 == 0:
        set_sec += 1
        if 9 < set_sec:
            set_sec = 0
            i = 0
            for index8 in range(10):
                if 4 < i:
                    led.unplot(i - 5, 4)
                else:
                    led.unplot(i, 3)
                i += 1
            set_sec_x10 += 1
            if 5 < set_sec_x10:
                set_sec_x10 = 0
                i = 0
                for index9 in range(5):
                    led.unplot(i, 2)
                    i += 1
            点灯_秒()
        else:
            点灯_秒()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global set_sec, set_sec_x10, set_min
    if 動作 == 0:
        set_sec = 0
        set_sec_x10 = 0
        set_min = 5
        点灯_分()
        点灯_秒()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_logo_pressed():
    global 動作
    if 0 < set_timer:
        if 動作 == 1:
            動作 = 0
            music.play(music.tone_playable(988, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
        else:
            動作 = 1
            music.play(music.tone_playable(988, music.beat(BeatFraction.DOUBLE)),
                music.PlaybackMode.UNTIL_DONE)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

set_timer = 0
i = 0
動作 = 0
set_sec_x10 = 0
set_sec = 0
set_min = 0
set_min = 0
set_sec = 0
set_sec_x10 = 0

def on_forever():
    global set_timer, set_min, set_sec_x10, set_sec
    set_timer = set_min * 60 + (set_sec_x10 * 10 + set_sec)
    if 0 < set_timer and 動作 == 1:
        basic.pause(1000)
        while 0 < set_timer and 動作 == 1:
            set_timer += -1
            set_min = int(set_timer / 60)
            set_sec_x10 = int(set_timer % 60 / 10)
            set_sec = set_timer % 60 % 10
            点灯_分()
            点灯_秒()
            basic.pause(1000)
        if set_timer <= 0:
            for index10 in range(8):
                music.play(music.tone_playable(988, music.beat(BeatFraction.DOUBLE)),
                    music.PlaybackMode.UNTIL_DONE)
                basic.pause(200)
basic.forever(on_forever)
