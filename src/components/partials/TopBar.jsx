import React, { Component } from 'react'

import PlayPausePane from './PlayPausePane'
import InfoPane from './InfoPane'
import VolumePane from './VolumePane'
import SearchPane from './SearchPane'
import WindowButtonsPane from './WindowButtonsPane'

import { hideSideBar, showSideBar } from '../../actions/general'

class TopBar extends Component {
  _handleClickQueue = () => {
    if (this.props.sidebar) this.props.dispatch(hideSideBar())
    else this.props.dispatch(showSideBar())
  }
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
