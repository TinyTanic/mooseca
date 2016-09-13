import React from 'react'

var PlayPausePane = React.createClass({
   _handlePlayButton() {
      this.props.onButtonClick('play')
   },
   _handlePrevButton() {
      this.props.onButtonClick('prev')
   },
   _handleNextButton() {
      this.props.onButtonClick('next')
   },
   render() {
      return (
         <div className="playpausepane">
            <div className="button-container">
               <div className="button-cell">
                  <button className="rounded-button nav-button" onClick={this._handlePrevButton}></button>
               </div>
               <div className="button-cell">
                  <button className="rounded-button play-button" onClick={this._handlePlayButton}></button>
               </div>
               <div className="button-cell">
                  <button className="rounded-button nav-button" onClick={this._handleNextButton}></button>
               </div>
            </div>

         </div>
      )
   }

})

export default PlayPausePane
