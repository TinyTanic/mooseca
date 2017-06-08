import React, { Component } from 'react'

import PlayPausePane from './PlayPausePane'
import InfoPane from './InfoPane'
import VolumePane from './VolumePane'
import SearchPane from './SearchPane'
import WindowButtonsPane from './WindowButtonsPane'

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="group">
          <PlayPausePane
            onButtonClick={this._handlePlayPauseButtonsClick}
            playbackState={this.props.playbackState}
          />
          <VolumePane />
        </div>
        <InfoPane onClickQueue={this._handleClickQueue} />
        <SearchPane />
        <WindowButtonsPane />
      </div>
    )
  }
}

export default TopBar
