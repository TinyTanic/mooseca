import React, { Component } from 'react'

import AlbumCard from '../partials/AlbumCard'

const album = { title: 'album', artist: 'artist' }

class Album extends Component {
  render() {
    return (
      <div className="album-view">
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
      </div>
    )
  }
}

export default Album
