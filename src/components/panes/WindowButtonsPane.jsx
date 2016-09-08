import React from 'react'

var WindowButtonsPane = React.createClass({
   render() {
      return (
         <div className="window-buttons">
            <div className="buttons-container">
               <button className="minimize"></button>
               <button className="enlarge"></button>
               <button className="close"></button>
            </div>
         </div>
      )
   }
})

export default WindowButtonsPane
