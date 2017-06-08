import React from 'react'

import Slider from './Slider'

const VolumePane = () => (
  <div className="volumepane topbar-component left">
    <div className="spacer">
      <div className="container">
        <i className="vdown fa fa-volume-down" />
        <Slider />
        <i className="vup fa fa-volume-up" />
      </div>
    </div>
  </div>
)

export default VolumePane
