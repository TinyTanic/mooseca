import React from 'react'
import ArtistCard from '../elements/ArtistCard'

var AlbumsView = React.createClass({

   render() {
      let artistsCards = null
      if (this.props.library && this.props.library.artists) {
         artistsCards = this.props.library.artists.map((artist, index) => {
            return <ArtistCard key={index} meta={artist} onPlayClick={this._handlePlay} onAddPlaylist={this._handleAddPlaylist} onAddQueue={this._handleAddQueue}/>
         })
      }
      return (
         <div className="artistview">
            {artistsCards}
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
      )
   }
})

export default AlbumsView
