import React, { Component } from 'react'

import MusicControls from '../panes/MusicControls'
import Info from '../panes/Info'
import VolumeControl from '../panes/VolumeControl'
import Search from '../panes/Search'
import WindowButtons from '../panes/WindowButtons'

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
          <MusicControls
            onButtonClick={this._handlePlayPauseButtonsClick}
            playbackState={this.props.playbackState}
          />
          <VolumeControl />
        </div>
        <Info onClickQueue={this._handleClickQueue} />
        <Search />
        <WindowButtons />
      </div>
    )
  }
}

export default TopBar
