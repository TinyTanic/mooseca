import React from 'react'

var PlayPausePane = React.createClass({
  _handlePlayButton() {

    this.props.onButtonClick('play')
  },
  _handlePauseButton() {
    this.props.onButtonClick('pause')
  },
  _handlePrevButton() {
    this.props.onButtonClick('prev')
  },
  _handleNextButton() {
    this.props.onButtonClick('next')
  },
  render() {
    let playPause = null;
    if (this.props.playbackState !== 'play') {
      playPause = (
        <div className="button-cell" onClick={this._handlePlayButton}>
          <i className="fa fa-play big-button"></i>
        </div>
      )
    } else {
      playPause = (
        <div className="button-cell" onClick={this._handlePauseButton}>
          <i className="fa fa-pause big-button"></i>
        </div>
      )
    }
    return (
      <div className="playpausepane">
        <div className="button-container">
          <div className="button-cell" onClick={this._handlePrevButton}>
            {/* <button className="rounded-button nav-button" onClick={this._handlePrevButton}></button> */}
            <i className="fa fa-backward button"></i>

          </div>
          {playPause}
          <div className="button-cell" onClick={this._handleNextButton}>
            {/* <button className="rounded-button nav-button" onClick={this._handleNextButton}></button> */}
            <i className="fa fa-forward button"></i>
          </div>
        </div>

      </div>
    )
  }

})

export default PlayPausePane
