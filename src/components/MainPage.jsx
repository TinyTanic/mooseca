import React from 'react'
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import * as db from '../db'
import * as MusicActions from '../actions/MusicActions'
import * as LibraryActions from '../actions/LibraryActions'
import * as SettingsActions from '../actions/SettingsActions'

import TopBar from './elements/TopBar'
import NavBar from './elements/NavBar'
import SideBar from './elements/SideBar'
import View from './views/View'

const path = require('path')

let pages = {}

var MainPage = React.createClass({
   getInitialState() {
      return {sidebar: false, currentView: 'music'}
   },
   componentDidMount() {
      this.props.getSetting('libraryPath', path.join(process.env[(process.platform == 'win32')
            ? 'USERPROFILE'
            : 'HOME'], 'Musica'))
   },
   componentWillUpdate(nextProps) {
      console.log(this.props);
      console.log(nextProps);
      if (!this.props.settings.libraryPath && nextProps.settings.libraryPath) {
         // console.log(this.props.settings);
         console.log('scan');
         this.props.scanLibrary(nextProps.settings.libraryPath)
      }

      if (!this.props.library.ready && nextProps.library.ready) {
         this.props.getAlbums()
         this.props.getArtists()
      }
   },
   _handlePlayPause(control) {
      switch (control.button) {
         case 'play':
            this.props.playMusic();
            break;
         case 'stop':
            this.props.stopMusic();
            break;
         case 'pause':
            this.props.pauseMusic();
            break;
      }
   },
   _handleAlbumClick(album) {},
   _handleChangeView(view) {
      this.setState({currentView: view})
   },
   _handleClickQueue() {
      this.setState({
         sidebar: !this.state.sidebar
      })
      // console.log(this.state.sidebar);
   },
   _handleCloseSidebar() {
      this.setState({sidebar: false})
   },
   _handleRemoveFromQueue(song) {
      console.log('rimuovo dalla coda: ');
      console.log(song);
   },
   render() {
      let sidebar = null
      if (this.state.sidebar) {
         sidebar = (<SideBar queue={this.props.queue} onClose={this._handleCloseSidebar} onRemoveFromQueue={this._handleRemoveFromQueue}/>)
      }
      console.log('current view: ' + this.state.currentView);
      return (
         <div className="mainpage">
            <TopBar onPlayPause={this._handlePlayPause} onClickQueue={this._handleClickQueue}/>
            <div className="bottom">
               <NavBar onChangeView={this._handleChangeView} view={this.state.currentView}/>
               <View view={this.state.currentView}/> {/* <AlbumView library={this.props.library} onAlbumClick={this._handleAlbumClick}/>  */}
               {/* <SideBar isCompressed={this.state.sidebar} album={this.state.selectedAlbum}/>  */}
               {sidebar}
            </div>
         </div>
      )
   }
})

function mapStateToProps(state) {
   return {library: state.library, settings: state.settings, selectedAlbum: state.library.selectedAlbum, queue: state.queue}
}

function mapDispatchToProps(dispatch) {
   return {
      playMusic: () => MusicActions.playMusic(dispatch),
      stopMusic: () => MusicActions.stopMusic(dispatch),
      pauseMusic: () => MusicActions.pauseMusic(dispatch),
      getSetting: (key, defaultValue,) => SettingsActions.getSetting(key, defaultValue, dispatch),
      scanLibrary: (libraryPath) => LibraryActions.scanLibrary(libraryPath, dispatch),
      getSongsByAlbum: album => LibraryActions.getSongsByAlbum(album, dispatch),
      getAlbums: () => LibraryActions.getAlbums(dispatch),
      getArtists: () => LibraryActions.getArtists(dispatch)
   };
}

var MainPageApp = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageApp
