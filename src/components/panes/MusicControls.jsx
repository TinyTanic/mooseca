import React from 'react'

import { PLAY, PAUSE } from '../../constants/playStates'

const _handlePlayPause = (state, onPause, onPlay) => {
  if (state === PLAY) {
    onPause()
  } else {
    onPlay()
  }
}

const playButton = state => {
  switch (state) {
    case PLAY:
      return PAUSE
    default:
      return PLAY
  }
}

const MusicControls = ({ state, onPlay, onPause, onNext, onPrev }) =>
  <div className="playpausepane">
    <div className="button-container">
      <div className="button-cell" onClick={onPrev}>
        {/* <button className="rounded-button nav-button" onClick={this._handlePrevButton}></button> */}
        <i className="fa fa-backward button" />
      </div>
      <div
        className="button-cell"
        onClick={() => _handlePlayPause(state, onPause, onPlay)}
      >
        <i className={`fa fa-${playButton(state).toLowerCase()} big-button`} />
      </div>
      <div className="button-cell" onClick={onNext}>
        {/* <button className="rounded-button nav-button" onClick={this._handleNextButton}></button> */}
        <i className="fa fa-forward button" />
      </div>
    </div>

  </div>

export default MusicControls
