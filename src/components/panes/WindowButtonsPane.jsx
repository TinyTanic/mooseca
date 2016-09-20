import React from 'react'
const window = require('electron').remote.getCurrentWindow()

var WindowButtonsPane = React.createClass({
   _handleClickExit() {
      window.close()
   },
   _handleClickMinimize() {
      window.minimize()
   },
   _handleClickMaximize() {
      if (!window.isMaximized()) {
         window.maximize();
      } else {
         window.unmaximize();
      }
   },
   render() {
      return (
         <div className="window-buttons">
            <div className="buttons-container">
               <button className="minimize" onClick={this._handleClickMinimize}></button>
               <button className="enlarge" onClick={this._handleClickMaximize}></button>
               <button className="close" onClick={this._handleClickExit}></button>
            </div>
         </div>
      )
   }
})

export default WindowButtonsPane
