import React from 'react'
import AlbumCard from '../elements/AlbumCard'

var View = React.createClass({

   _handleAlbumCardClick() {
      this.props.onAlbumClick()
   },
   render() {
      let albumsCards = null
      if (this.props.library && this.props.library.albums) {
         albumsCards = this.props.library.albums.map((album, index) => {
            return <AlbumCard key={index} meta={album} onAlbumClick={this._handleAlbumCardClick}/>
         })
      }
      console.log(this.props);
      return (
         <div className="view">
            <div className="scroll">
               {albumsCards}
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
               <div className="stretcher">
                  <div className="fuller"></div>
               </div>
            </div>
         </div>
      )
   }
})

export default View
