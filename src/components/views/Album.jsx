import React, { Component } from 'react'

import AlbumCard from '../partials/AlbumCard'
import { loadAlbum } from '../../actions/album'

class Album extends Component {
  componentDidMount() {
    this.props.dispatch(loadAlbum())
  }

  render() {
    const albums = this.props.library || []
    return (
      <div className="album-view">
        {albums.map(album => {
          return (
            <AlbumCard album={album} key={`${album.title}-${album.artist}`} />
          )
        })}
      </div>
    )
  }
}

export default Album
