import React from 'react'

import { SONGS, ALBUM, PLAYLIST, ARTISTS } from '../../constants/views'

let isSelected = (view, name) => (view === name ? 'selected' : '')

const NavBar = ({ currentView, onChangeView }) =>
  <div className="navbar">
    <div className="container">
      <div className="list">
        <h2>{'Libreria'}</h2>
        <ul>
          <li
            className={isSelected(currentView, SONGS)}
            onClick={() => onChangeView(SONGS)}
          >
            <i className="fa fa-music" />
            {'Musica'}
          </li>
          <li
            className={isSelected(currentView, PLAYLIST)}
            onClick={() => onChangeView(PLAYLIST)}
          >
            <i className="fa fa-th-list" />
            {'Playlist'}
          </li>
          <li
            className={isSelected(currentView, ALBUM)}
            onClick={() => onChangeView(ALBUM)}
          >
            <i className="fa fa-dot-circle-o" />
            {'Album'}
          </li>
          <li
            className={isSelected(currentView, ARTISTS)}
            onClick={() => onChangeView(ARTISTS)}
          >
            <i className="fa fa-user" />
            {'Artisti'}
          </li>
        </ul>
      </div>

    </div>
    <div className="bottom" />
  </div>

export default NavBar
