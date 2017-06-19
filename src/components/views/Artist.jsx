import React, { Component } from 'react'

//import AlbumCard from '../partials/AlbumCard'
import { loadArtists } from '../../actions/artists'

class Artist extends Component {
  componentDidMount() {
    this.props.dispatch(loadArtists())
  }

  render() {
    const artists = this.props.artists || []
    return (
      <div className="album-view">
        <ul>
          {artists.map(artist => {
            return <li key={artist.name}>{artist.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Artist
