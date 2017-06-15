import React from 'react'

import Slider from './Slider'

const InfoPane = ({ onClickQueue }) =>
  <div className="infopane topbar-component left">
    <p>
      {'una bella canzone'}
    </p>
    <p>
      {'artista - album'}
    </p>
    {/* <ProgressBar /> */}
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

export default InfoPane
