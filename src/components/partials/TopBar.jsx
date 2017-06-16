import React, { Component } from 'react'

import MusicControls from '../panes/MusicControls'
import Info from '../panes/Info'
import VolumeControl from '../panes/VolumeControl'
import Search from '../panes/Search'
import WindowButtons from '../panes/WindowButtons'

import { hideSideBar, showSideBar } from '../../actions/general'
import { play, pause } from '../../actions/play'

import { NEXT, PREV, STOP, PLAY, PAUSE } from '../../constants/playStates'

class TopBar extends Component {
  _handleClickQueue = () => {
    if (this.props.sidebar) this.props.dispatch(hideSideBar())
    else this.props.dispatch(showSideBar())
  }
  _handleControlSong = state => {
    console.log(state)
    switch (state) {
      case PLAY:
        this.props.dispatch(play())
        break
      case PREV:
        break
      case NEXT:
        break
      case PAUSE:
        this.props.dispatch(pause())
        break
      default:
        break
    }
  }
  render() {
    return (
      <div className="topbar">
        <div className="group">
          <MusicControls
            onStop={() => this._handleControlSong(STOP)}
            onPlay={() => this._handleControlSong(PLAY)}
            onPause={() => this._handleControlSong(PAUSE)}
            onNext={() => this._handleControlSong(NEXT)}
            onPrev={() => this._handleControlSong(PREV)}
            state={this.props.state}
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
