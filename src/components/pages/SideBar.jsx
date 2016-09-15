import React from 'react'

var SideBar = React.createClass({

   render() {
      let songs = (
         <span>{"l'album non contiene canzoni"}</span>
      )
      console.log(this.props.album);
      if (this.props.album.songs.length > 0)
         songs = this.props.songs.map(song => {
            return (
               <li>{song}</li>
            )
         })
      return (
         <div className="sidebar">
            <div className="container">
               <div className="songs">
                  <ul>
                     {songs}
                  </ul>
               </div>
            </div>
         </div>
      )
   }
})

export default SideBar
