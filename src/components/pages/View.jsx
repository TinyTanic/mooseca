import React from 'react'
import AlbumCard from '../elements/AlbumCard'

var View = React.createClass({

   _handlePlay(album) {
      // this.props.onAlbumClick(album)
      console.log('play album');
   },
   _handleAddPlaylist(album){
   console.log('add album to playlist');
   },
   _handleAddQueue(album){
      console.log('add album to queue');
   },
   render() {
      let albumsCards = null
      if (this.props.library && this.props.library.albums) {
         albumsCards = this.props.library.albums.map((album, index) => {
            return <AlbumCard
               key={index}
               meta={album}
               onPlayClick={this._handlePlay}
               onAddPlaylist={this._handleAddPlaylist}
               onAddQueue={this._handleAddQueue}/>
         })
      }

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
