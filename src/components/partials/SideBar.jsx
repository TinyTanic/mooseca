import React, { Component } from 'react'
import SidebarCard from './SidebarCard'
import { search, load } from '../../actions/library'
import { LOAD_MUSIC } from '../../constants/playStates'

class SideBar extends Component {
  _handleCloseClick() {
    console.error('TODO')
  }

  _handleRemoveCard() {
    console.error('TODO')
  }

  componentDidMount() {
    this.props.dispatch(search())
  }
  render() {
    const songs = this.props.songs
    if (songs.length === 0) {
      return <span>{'La coda di riproduzione è vuota'}</span>
    }
    let index = 0
    const sidebarCardList = songs.map(song => {
      return (
        <SidebarCard
          key={index++}
          song={song}
          onRemove={this._handleRemoveCard}
        />
      )
    })
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
            {sidebarCardList}
          </div>

        </div>
      </div>
    )
  }
}

export default SideBar
