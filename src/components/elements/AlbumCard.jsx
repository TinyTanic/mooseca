import React from 'react'

var AlbumCard = React.createClass({

   render() {
      return (
         <div className="card">
            <div className="container">
               <div className="image-container">
                  <img src=""></img>
               </div>
               <div className="meta">
                  <h4 className="album">{'Album'}</h4>
                  <h5 className="artist">{'Artista'}</h5>
               </div>
            </div>
         </div>
      )
   }
})

export default AlbumCard
