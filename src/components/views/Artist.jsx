import React, { Component } from 'react'
import ArtistCard from '../partials/ArtistCard'
import { loadArtists, loadArtistsAlbums } from '../../actions/artists'

class Artist extends Component {
  componentDidMount() {
    this.props.dispatch(loadArtists())
  }

  _handleGetAlbums = artist => {
    this.props.dispatch(loadArtistsAlbums(artist))
  }

  render() {
    const artists = this.props.artists || []
    return (
      <div className="album-view">
        {artists.map(artist => {
          return (
            <ArtistCard
              key={artist.name}
              artist={artist}
              onClickArtist={this._handleGetAlbums}
            />
          )
        })}
      </div>
    )
  }
}

export default Artist
