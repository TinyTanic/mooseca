import React from 'react'

var SidebarCard = React.createClass({
   _handleClickRemove(){
      this.props.onRemove(this.props.song)
   },
   render() {
      let songImage = this.props.song.image ? this.props.song.image : 'data/generic-album.png'
      let songTitle = this.props.song.title ? this.props.song.title : 'Unknown'
      let songAlbum = this.props.song.album ? this.props.song.album : 'Unknown'

      return (
         <div className="sidebarcard">
            <div className="img-container">
               <img src={songImage}></img>
            </div>
            <div className="meta">
               <span className="title">{songTitle}</span>
               <span className="album">{songAlbum}</span>
            </div>
            <div className="remove" onClick={this._handleClickRemove}>
               <i className="fa fa-times"></i>
            </div>
         </div>
      )
   }
})

export default SidebarCard
