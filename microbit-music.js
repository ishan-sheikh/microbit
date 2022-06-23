input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    loopCount = 1
    while (loopCount <= 2) {
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Eighth))
        music.playTone(1046, music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Eighth))
        music.playTone(880, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Eighth))
        music.playTone(1046, music.beat(BeatFraction.Eighth))
        music.playTone(1174, music.beat(BeatFraction.Eighth))
        music.playTone(1318, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(1174, music.beat(BeatFraction.Eighth))
        music.playTone(1318, music.beat(BeatFraction.Eighth))
        music.playTone(1396, music.beat(BeatFraction.Eighth))
        music.playTone(1568, music.beat(BeatFraction.Eighth))
        music.playTone(1760, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(1760, music.beat(BeatFraction.Eighth))
        music.playTone(1976, music.beat(BeatFraction.Eighth))
        music.playTone(2092, music.beat(BeatFraction.Eighth))
        music.playTone(2348, music.beat(BeatFraction.Eighth))
        music.playTone(2636, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(1318, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(1318, music.beat(BeatFraction.Quarter))
        music.playTone(1396, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(1174, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(1174, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(1568, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(1174, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(1318, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(1046, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        if (loopCount == 1) {
            music.playTone(659, music.beat(BeatFraction.Sixteenth))
            music.playTone(1318, music.beat(BeatFraction.Sixteenth))
            music.rest(music.beat(BeatFraction.Whole))
        } else if (loopCount == 2) {
            music.playTone(2092, music.beat(BeatFraction.Whole))
        }
        loopCount += 1
    }
})
let loopCount = 0
let temperature = 0
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1226, 1984, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
