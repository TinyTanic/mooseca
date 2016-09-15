import React from 'react'

import Slider from '../elements/Slider'

var InfoPane = React.createClass({
   render() {
      return <div className="infopane topbar-component left">
         <p>
            {'una bella canzone'}
         </p>
         <p>
            {'un bravo artista - un bellissimo album'}
         </p>
         {/* <ProgressBar /> */}
         <div className="progress">
            <span>
               {'0:00'}
            </span>
            <Slider/>
            <span>
               {'9:99'}
            </span>
         </div>
      </div>
   }

})

export default InfoPane
