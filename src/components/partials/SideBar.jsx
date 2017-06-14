import React, { Component } from 'react'
import SidebarCard from './SidebarCard'
import { search, load } from '../../actions/library'

class SideBar extends Component {
  _handleCloseClick = () => {
    console.error('TODO')
  }

  _handleRemoveCard = () => {
    console.error('TODO')
  }

  componentDidMount() {
    this.props.dispatch(search())
    //this.props.dispatch(load())
  }
  render() {
    const songs = this.props.songs || []
    let bodyComponent = ''
    if (songs.length === 0) {
      bodyComponent = <span>{'La coda di riproduzione è vuota'}</span>
    } else {
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
      bodyComponent = (
        <div className="songs">
          {sidebarCardList}
        </div>
      )
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
          {bodyComponent}
        </div>
      </div>
    )
  }
}

export default SideBar
