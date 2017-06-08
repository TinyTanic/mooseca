import React from 'react'

const SidebarCard = ({
  image = 'data/generic-album.png',
  title = 'Unknown',
  album = 'Unknown',
}) => (
  <div className="sidebarcard">
    <div className="img-container">
      <img src={image} />
    </div>
    <div className="meta">
      <span className="title">{title}</span>
      <span className="album">{album}</span>
    </div>
    <div className="remove" onClick={this._handleClickRemove}>
      <i className="fa fa-times" />
    </div>
  </div>
)

export default SidebarCard
