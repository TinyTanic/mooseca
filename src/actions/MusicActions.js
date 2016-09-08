

export function playMusic(dispatch) {
    dispatch({
        type: 'MUSIC',
        state: 'play',
        error: null
    })
}

export function stopMusic(dispatch) {
    player.stop()
    dispatch({
        type: 'MUSIC',
        state: 'stop',
        error: null
    })
}

export function pauseMusic(dispatch) {
    player.pause()
    dispatch({
        type: 'MUSIC',
        state: 'pause',
        error: null
    })
}
