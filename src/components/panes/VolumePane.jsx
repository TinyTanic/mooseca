import React from 'react'

import Slider from '../elements/Slider'

var VolumePane = React.createClass({

   render() {
      return <div className="volumepane topbar-component left">
         <div className="spacer">
            <div className="container">
               <i className="vdown fa fa-volume-down"></i>
               <Slider/>
               <i className="vup fa fa-volume-up"></i>
            </div>
         </div>
      </div>
   }
})

export default VolumePane
