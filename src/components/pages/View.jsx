import React from 'react'
import AlbumCard from '../elements/AlbumCard'

var View = React.createClass({

   _handleAlbumCardClick() {
      this.props.onAlbumClick()
   },
   render() {
      return (
         <div className="view">
            <div className="scroll">
               <AlbumCard onAlbumClick={this._handleAlbumCardClick}/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
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
