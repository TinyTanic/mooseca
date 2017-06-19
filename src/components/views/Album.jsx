import React, { Component } from 'react'

import AlbumCard from '../partials/AlbumCard'
import { loadAlbum, loadAlbumsSongs } from '../../actions/album'

class Album extends Component {
  componentDidMount() {
    this.props.dispatch(loadAlbum())
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
