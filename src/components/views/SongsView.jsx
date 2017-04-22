import React from 'react'

var SongsView = React.createClass({
  componentDidMount() {
    console.log(this.props);
    this.props.getSongs()
  },
  _handlePlay(album) {
    // this.props.onAlbumClick(album)
    console.log('play album');
  },
  _handleAddPlaylist(album) {
    console.log('add album to playlist');
  },
  _handlePushToQueue(album) {
    console.log('pushed album to queue');
  },
  _handleReplaceQueue(album) {
    console.log(this.props.replaceQueueWithAlbum(album))
    console.log('replaced album to queue');
  },
   render() {
     let songsEntries = []
     let fillers = null;
     if (this.props.library && this.props.library.songs) {
       songsEntries = this.props.library.songs.map((song, index) => {
         return(
           <tr>
             <td>{index}</td>
             <td>{song.title}</td>
             <td>{song.album}</td>
             <td>{song.artist}</td>
             <td>{'un genere'}</td>
             <td>{'3:43'}</td>
           </tr>
         )
       })

     }

     if(songsEntries.length > 0) {
      return (
         <div className="queueview">
           <div className="container">
             <table>
               <thead>
                 <tr>
                   <th>{'#'}</th>
                   <th>{'Titolo'}</th>
                   <th>{'Album'}</th>
                   <th>{'Artista'}</th>
                   <th>{'Genere'}</th>
                   <th>{'Durata'}</th>
                 </tr>
               </thead>
               <tbody>
                 { songsEntries }
               </tbody>
             </table>
           </div>
         </div>
      )
    } else {
      return (
        <p>nessuna canzone</p>
      )
    }
   }
})

export default SongsView
