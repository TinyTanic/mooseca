import React from 'react'

import Slider from '../elements/Slider'

var VolumePane = React.createClass({

   render() {
      return <div className="volumepane topbar-component left">
         <div className="volume-container">
            <i></i>
            <Slider />
            <i></i>
         </div>
      </div>
   }
})

export default VolumePane
