import React from 'react'
import SidebarCard from './SidebarCard'

var SideBar = React.createClass({
   _handleCloseClick() {
      this.props.onClose()
   },
   _handleRemoveCard(song) {
      this.props.onRemoveFromQueue(song)
   },
   render() {
      let songs = (
         <span>{"La coda di riproduzione è vuota"}</span>
      )

      let testSong = {
         // title: 'Una canzone o forse mai più',
         // album: 'quanto è bello un album col titolo lungo?'
      }
      testSong = {
         title: 'Canzone',
         album: 'albume'
      }

      return (
         <div className="sidebar">
            <div className="container">
               <div className="titlebar">
                  <span className="title">{'Coda di riproduzione'}</span>
                  <div className="close" onClick={this._handleCloseClick}>
                     <i className="fa fa-times"></i>
                  </div>
               </div>
               <div className="songs">
                  <SidebarCard song={testSong} onRemove={this._handleRemoveCard}/>
                  <SidebarCard song={testSong} onRemove={this._handleRemoveCard}/>
                  <SidebarCard song={testSong} onRemove={this._handleRemoveCard}/>
                  <SidebarCard song={testSong} onRemove={this._handleRemoveCard}/>
                  <SidebarCard song={testSong} onRemove={this._handleRemoveCard}/>
               </div>

            </div>
         </div>
      )
   }
})

export default SideBar
