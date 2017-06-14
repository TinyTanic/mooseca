import React, { Component } from 'react'
import SidebarCard from './SidebarCard'
// import { search } from '../../actions/library'
import { hideSideBar } from '../../actions/general'

class SideBar extends Component {
  _handleCloseClick = () => {
    this.props.dispatch(hideSideBar())
  }

  _handleRemoveCard = () => {
    console.error('TODO')
  }

  componentDidMount() {
    // this.props.dispatch(search())
  }
  render() {
    const songs = this.props.songs
    let sidebarContent = null
    if (songs.length === 0) {
      sidebarContent = <span>{'La coda di riproduzione è vuota'}</span>
    } else {
      let index = 0
      sidebarContent = songs.map(song => {
        return (
          <SidebarCard
            key={index++}
            song={song}
            onRemove={this._handleRemoveCard}
          />
        )
      })
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
            {sidebarContent}
          </div>

        </div>
      </div>
    )
  }
}

export default SideBar
