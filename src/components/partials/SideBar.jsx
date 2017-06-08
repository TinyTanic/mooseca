import React, { Component } from 'react'
import SidebarCard from './SidebarCard'

class SideBar extends Component {
  render() {
    const { songs = [] } = this.props
    if (songs.length === 0) {
      return <span>{'La coda di riproduzione è vuota'}</span>
    }
    let testSong = {
      // title: 'Una canzone o forse mai più',
      // album: 'quanto è bello un album col titolo lungo?'
    }
    testSong = {
      title: 'Canzone',
      album: 'albume',
    }

    return (
      <div className="sidebar">
        <div className="container">
          <div className="titlebar">
            <span className="title">{'Coda di riproduzione'}</span>
            <div className="close" onClick={this._handleCloseClick}>
              <i className="fa fa-times" />
            </div>
          </div>
          <div className="songs">
            <SidebarCard song={testSong} onRemove={this._handleRemoveCard} />
            <SidebarCard song={testSong} onRemove={this._handleRemoveCard} />
            <SidebarCard song={testSong} onRemove={this._handleRemoveCard} />
            <SidebarCard song={testSong} onRemove={this._handleRemoveCard} />
            <SidebarCard song={testSong} onRemove={this._handleRemoveCard} />
          </div>

        </div>
      </div>
    )
  }
}

export default SideBar
