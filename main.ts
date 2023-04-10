basic.forever(function () {
    if (input.compassHeading() >= 0 && input.compassHeading() < 45) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        if (input.compassHeading() >= 45 && input.compassHeading() < 90) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
            basic.pause(1)
            basic.showLeds(`
                # # # # .
                # . . . .
                # # # . .
                # . . . .
                # # # # .
                `)
        } else {
            if (input.compassHeading() >= 90 && input.compassHeading() < 135) {
                basic.showLeds(`
                    # # # # .
                    # . . . .
                    # # # . .
                    # . . . .
                    # # # # .
                    `)
            } else {
                if (input.compassHeading() >= 135 && input.compassHeading() < 180) {
                    basic.showLeds(`
                        . # # # #
                        # . . . .
                        # # # # .
                        . . . . #
                        # # # # .
                        `)
                    basic.pause(1)
                    basic.showLeds(`
                        # # # # .
                        # . . . .
                        # # # . .
                        # . . . .
                        # # # # .
                        `)
                } else {
                    if (input.compassHeading() >= 180 && input.compassHeading() < 225) {
                        basic.showLeds(`
                            . # # # #
                            # . . . .
                            # # # # .
                            . . . . #
                            # # # # .
                            `)
                    } else {
                        if (input.compassHeading() >= 225 && input.compassHeading() < 270) {
                            basic.showLeds(`
                                . # # # #
                                # . . . .
                                # # # # .
                                . . . . #
                                # # # # .
                                `)
                            basic.pause(1)
                            basic.showLeds(`
                                # . . . #
                                # . . . #
                                # . # . #
                                . # # # .
                                . # . # .
                                `)
                        } else {
                            if (input.compassHeading() >= 270 && input.compassHeading() < 315) {
                                basic.showLeds(`
                                    # . . . #
                                    # . . . #
                                    # . # . #
                                    . # # # .
                                    . # . # .
                                    `)
                            } else {
                                if (input.compassHeading() >= 315 && input.compassHeading() < 360) {
                                    basic.showLeds(`
                                        # . . . #
                                        # # . . #
                                        # . # . #
                                        # . . # #
                                        # . . . #
                                        `)
                                    basic.pause(1)
                                    basic.showLeds(`
                                        # . . . #
                                        # . . . #
                                        # . # . #
                                        . # # # .
                                        . # . # .
                                        `)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
