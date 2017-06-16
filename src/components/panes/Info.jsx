import React from 'react'

import Slider from './Slider'

const defaultSong = {
  title: '',
  artist: '',
  album: '',
}

const InfoPane = ({ onClickQueue, song }) => {
  let currSong = defaultSong
  if (song) currSong = song
  return (
    <div className="infopane topbar-component left">
      <p>
        {currSong.title}
      </p>
      <p>
        {`${currSong.artist} - ${currSong.album}`}
      </p>
      <div className="progress">
        <span>
          {'0:00'}
        </span>
        <Slider />
        <span>
          {'9:99'}
        </span>
      </div>
      <div className="queue" onClick={onClickQueue}>
        <i className="fa fa-list-alt" />
      </div>
    </div>
  )
}

export default InfoPane
