import React from 'react'

import PlayPausePane from '../panes/PlayPausePane'
import InfoPane from '../panes/InfoPane'
import VolumePane from '../panes/VolumePane'
import SearchPane from '../panes/SearchPane'
import WindowButtonsPane from '../panes/WindowButtonsPane'

var TopBar = React.createClass({
   _handlePlayPauseButtonsClick(clicked) {
      this.props.onPlayPause(clicked)
   },
   render() {
      return (
         <div className="topbar">
            <div className="group">
               <div className="element red">
                  {'ciao'}
                  {/* <PlayPausePane onButtonClick={this._handlePlayPauseButtonsClick}/>
                  <VolumePane/> */}
               </div>
               <div className="element blue">
                  {'ciao'}
                  {/* <InfoPane/> */}
               </div>
               <div className="element yellow">
                  {'ciao'}
                  {/* <SearchPane/> */}
               </div>
            </div>
            <WindowButtonsPane/>
            <div className="t">
               <div className="c">
                  <div>
                     {'ciao'}
                  </div>
               </div>
               <div className="c">
                  <div>
                     {'ciao'}
                  </div>
               </div>
               <div className="c">
                  <div>
                     {'ciao'}
                  </div>
               </div>
            </div>
         </div>
      )
   }
})

export default TopBar
