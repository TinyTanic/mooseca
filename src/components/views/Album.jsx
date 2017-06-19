import React, { Component } from 'react'

import AlbumCard from '../partials/AlbumCard'
import { loadAlbums, loadAlbumsSongs } from '../../actions/albums'

class Album extends Component {
  componentDidMount() {
    this.props.dispatch(loadAlbums())
  }

  _handleClickPlay = album => {
    this.props.dispatch(loadAlbumsSongs(album))
  }

  render() {
    const albums = this.props.library || []
    return (
      <div className="album-view">
        {albums.map(album => {
          return (
            <AlbumCard
              album={album}
              key={`${album.title}-${album.artist}`}
              onClickPlay={this._handleClickPlay}
            />
          )
        })}
      </div>
    )
  }
}

export default Album
