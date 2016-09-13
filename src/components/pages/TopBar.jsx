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
               <div className="element">
                  {/* {'ciao'} */}
                  <PlayPausePane onButtonClick={this._handlePlayPauseButtonsClick}/>
                  <VolumePane/>
               </div>
               <div className="element">
                  {/* {'ciao'} */}
                  <InfoPane/>
               </div>
               <div className="element center">
                  {/* {'ciao'} */}
                  <SearchPane/>
               </div>
            <WindowButtonsPane/>

         </div>
      )
   }
})

export default TopBar
