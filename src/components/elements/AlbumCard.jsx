import React from 'react'

var AlbumCard = React.createClass({
   _handleClickPlay() {
      this.props.onPlayClick(this.props.meta)
   },
   _handleClickPlaylist() {
      this.props.onAddPlaylist(this.props.meta)
   },
   _handleClickQueue() {
      this.props.onAddQueue(this.props.meta)
   },
   render() {

      let albumName = this.props.meta.title
         ? this.props.meta.title
         : 'Unknown';
      let artistName = this.props.meta.artist
         ? this.props.meta.artist
         : 'Unknown';

      let image = this.props.meta.image
         ? this.props.meta.image
         : 'data/generic.png'



      return (
         <div className="card">
            <div className="container">
               <div className="image-container">
                  <img src={image}></img>
                  <div className="play" onClick={this._handleClickPlay}>
                     <i className="fa fa-play-circle-o fa-3x"></i>
                  </div>
                  <div className="buttons">
                     <div className="playlist" onClick={this._handleClickPlaylist}>
                        <i className="fa fa-th-list"></i>
                     </div>
                     <div className="queue" onClick={this._handleClickQueue}>
                        <i className="fa fa-heart"></i>
                     </div>
                  </div>
               </div>
               <div className="meta">
                  <h4 className="album">{albumName}</h4>
                  <h5 className="artist">{artistName}</h5>
               </div>
            </div>
         </div>
      )
   }
})

export default AlbumCard
