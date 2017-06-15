import React from 'react'

const AlbumCard = ({ album, onClickPlay, onClickQueue, onClickLove }) =>
  <div className="card">
    <div className="container">
      <div className="image-container">
        <img src={album.image ? album.image : '../data/generic-album.png'} />
        <div className="play" onClick={() => onClickPlay(album)}>
          <i className="fa fa-play-circle-o fa-3x" />
        </div>
        <div className="buttons">
          <div className="playlist" onClick={() => onClickQueue(album)}>
            <i className="fa fa-th-list" />
          </div>
          <div className="queue" onClick={() => onClickLove(album)}>
            <i className="fa fa-heart" />
          </div>
        </div>
      </div>
      <div className="meta">
        <h4 className="album">
          {album.title ? album.title : 'Unknown'}
        </h4>
        <h5 className="artist">
          {album.artist ? album.artist : 'Unknown'}
        </h5>
      </div>
    </div>
  </div>

export default AlbumCard
