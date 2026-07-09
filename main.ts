input.onPinPressed(TouchPin.P0, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
