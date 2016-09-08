import React from 'react'

var PlayPausePane = React.createClass({
   _handlePlayButton() {
      this.props.onButtonClick('play')
   },
   _handlePrevButton() {
      this.props.onButtonClick('prev')
   },
   _handlePrevButton() {
      this.props.onButtonClick('next')
   },
   render() {
      return (
         <div className="playpausepane topbar-component left">
            <div className="button-container">
               <div className="button-cell">
                  <button className="rounded-button nav-button" onClick={this._handlePlayButton}></button>
               </div>
               <div className="button-cell">
                  <button className="rounded-button play-button" onClick={this._handleStopButton}></button>
               </div>
               <div className="button-cell">
                  <button className="rounded-button nav-button" onClick={this._handlePauseButton}></button>
               </div>
            </div>

         </div>
      )
   }

})

export default PlayPausePane
