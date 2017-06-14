import React, { Component } from 'react'
const window = require('electron').remote.getCurrentWindow()

class WindowButtonsPane extends Component {
  _handleClickExit() {
    window.close()
  }
  _handleClickMinimize() {
    window.minimize()
  }
  _handleClickMaximize() {
    if (!window.isMaximized()) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }
  render() {
    return (
      <div className="window-buttons">
        <div className="buttons-container">
          <button className="minimize" onClick={this._handleClickMinimize} />
          <button className="enlarge" onClick={this._handleClickMaximize} />
          <button className="close" onClick={this._handleClickExit} />
        </div>
      </div>
    )
  }
}

export default WindowButtonsPane
