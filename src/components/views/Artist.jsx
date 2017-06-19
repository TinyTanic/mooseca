import React, { Component } from 'react'
import ArtistCard from '../partials/ArtistCard'
import { loadArtists } from '../../actions/artists'

class Artist extends Component {
  componentDidMount() {
    this.props.dispatch(loadArtists())
  }

  _handleGetAlbums = artist => {
    console.log(artist)
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
