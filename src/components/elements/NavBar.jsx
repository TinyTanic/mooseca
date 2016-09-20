import React from 'react'

var NavBar = React.createClass({
  _handleClickMusic() {
    this.props.onChangeView('music')
  },
  _handleClickPlaylist() {
    this.props.onChangeView('playlist')
  },
  _handleClickAlbum() {
    this.props.onChangeView('album')
  },
  _handleClickArtist() {
    this.props.onChangeView('artist')
  },
  _handleClickQueue() {
    this.props.onChangeView('queue')
  },
  render() {

    let isSelected = view => {
      return view === this.props.view
        ? 'selected'
        : ''
    }

    return (
      <div className="navbar">
        <div className="container">
          <div className="list">
            <h2>{'Libreria'}</h2>
            <ul>
              <li onClick={this._handleClickMusic} className={isSelected('music')}>
                <i className="fa fa-music"></i>
                {'Musica'}
              </li>
              <li onClick={this._handleClickPlaylist} className={isSelected('playlist')}>
                <i className="fa fa-th-list"></i>
                {'Playlist'}
              </li>
              <li onClick={this._handleClickAlbum} className={isSelected('album')}>
                <i className="fa fa-dot-circle-o"></i>
                {'Album'}
              </li>
              <li onClick={this._handleClickArtist} className={isSelected('artist')}>
                <i className="fa fa-user"></i>
                {'Artisti'}
              </li>
            </ul>
          </div>

        </div>
        <div className="bottom"></div>
      </div>
    )
  }
})

export default NavBar
