import React from 'react'

var AlbumCard = React.createClass({
   _handleAlbumCardClick(){
      this.props.onAlbumClick()
   },
   render() {
      return (
         <div className="card" onClick={this._handleAlbumCardClick}>
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
