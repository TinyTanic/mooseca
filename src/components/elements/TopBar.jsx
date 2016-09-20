import React from 'react'

import PlayPausePane from '../panes/PlayPausePane'
import InfoPane from '../panes/InfoPane'
import VolumePane from '../panes/VolumePane'
import SearchPane from '../panes/SearchPane'
import WindowButtonsPane from '../panes/WindowButtonsPane'

var TopBar = React.createClass({
   _handlePlayPauseButtonsClick(clicked) {
      // console.log(`clicked ${clicked}`);
      this.props.onPlayPause(clicked)
   },
   _handleClickQueue(){
      this.props.onClickQueue()
   },
   render() {
      return (
         <div className="topbar">
         <div className="group">
            <PlayPausePane onButtonClick={this._handlePlayPauseButtonsClick} playbackState={this.props.playbackState}/>
            <VolumePane/>
         </div>
            <InfoPane onClickQueue={this._handleClickQueue}/>
            <SearchPane/>
            <audio>
               <source src="data/music.mp3" type="audio/mpeg"></source>
            </audio>
            <WindowButtonsPane/>
         </div>
      )
   }
})

export default TopBar
