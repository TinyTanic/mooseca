import React from 'react'

const ArtistCard = ({ artist, onClickArtist }) =>
  <div className="card">
    <div className="container">
      {artist.name}
      <button onClick={() => onClickArtist(artist)}>Albums</button>
    </div>
  </div>

export default ArtistCard
