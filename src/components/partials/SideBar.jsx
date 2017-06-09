import React, { Component } from 'react'
import SidebarCard from './SidebarCard'
import { search } from '../../actions/library'

class SideBar extends Component {
  dispatch = this.props.dispatch

  _handleCloseClick() {
    console.error('TODO')
  }

  _handleRemoveCard() {
    console.error('TODO')
  }

  componentDidMount() {
    this.dispatch(search())
  }

  render() {
    let { songs = [] } = this.props
    if (songs.length === 0) {
      return <span>{'La coda di riproduzione è vuota'}</span>
    }
    songs = [
      {
        title: 'Canzone estate',
        album: 'albume',
      },
      {
        title: 'Canzone',
        album: 'albume',
      },
    ]
    /*TODO: x Agu
    Index usato per risolvere questo tipo di errore: verificare se come soluzione è conveniente
    Warning: flattenChildren(...): Encountered two children with the same key. Child keys must be unique; when two children share a key, only the first child will be used.
    */
    let index = 0
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
            {songs.map(song => {
              return (
                <SidebarCard
                  key={index++}
                  song={song}
                  onRemove={this._handleRemoveCard}
                />
              )
            })}

          </div>

        </div>
      </div>
    )
  }
}

export default SideBar
