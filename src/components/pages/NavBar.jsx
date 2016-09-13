import React from 'react'

var NavBar = React.createClass({

   render() {
      return (
         <div className="navbar">
            <div className="container">
               <div className="list">
                  <h2>{'Libreria'}</h2>
                  <ul>
                     <li>
                        {'Musica'}
                     </li>
                     <li>
                        {'Playlist'}
                     </li>
                     <li>
                        {'Album'}
                     </li>
                  </ul>
               </div>

            </div>
            <div className="bottom"></div>
         </div>
      )
   }
})

export default NavBar
