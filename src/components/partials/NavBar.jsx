import React from 'react'

let isSelected = (view, name) => (view === name ? 'selected' : '')

const NavBar = ({ currentView }) => (
  <div className="navbar">
    <div className="container">
      <div className="list">
        <h2>{'Libreria'}</h2>
        <ul>
          <li className={isSelected(currentView, 'music')}>
            <i className="fa fa-music" />
            {'Musica'}
          </li>
          <li className={isSelected(currentView, 'playlist')}>
            <i className="fa fa-th-list" />
            {'Playlist'}
          </li>
          <li className={isSelected(currentView, 'album')}>
            <i className="fa fa-dot-circle-o" />
            {'Album'}
          </li>
          <li className={isSelected(currentView, 'artist')}>
            <i className="fa fa-user" />
            {'Artisti'}
          </li>
        </ul>
      </div>

    </div>
    <div className="bottom" />
  </div>
)

export default NavBar
