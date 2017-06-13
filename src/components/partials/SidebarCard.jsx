import React from 'react'

const SidebarCard = ({ song, onRemove }) =>
  <div className="sidebarcard">
    <div className="img-container">
      <img src={song.image} />
    </div>
    <div className="meta">
      <span className="title">{song.title}</span>
      <span className="album">{song.album}</span>
    </div>
    <div className="remove" onClick={onRemove}>
      <i className="fa fa-times" />
    </div>
  </div>

export default SidebarCard
