import React from 'react'
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import * as db from '../../db'
import * as MusicActions from '../../actions/MusicActions'
import * as LibraryActions from '../../actions/LibraryActions'
import * as SettingsActions from '../../actions/SettingsActions'

import TopBar from './TopBar'
import NavBar from './NavBar'
import SideBar from './SideBar'
import View from './View'

const path = require('path')

let pages = {}

var MainPage = React.createClass({
   getInitialState() {
      return {sidebar: false}
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
   _handleAlbumClick() {
      console.log(this.state.sidebar);
      this.setState({sidebar: true})
   },
   render() {
      console.log(this.state);
      return (
         <div className="mainpage">
            <TopBar onPlayPause={this._handlePlayPause}/>
            <div className="bottom">
               <NavBar/>
               <View library={this.props.library} onAlbumClick={this._handleAlbumClick}/>
               <SideBar isCompressed={this.state.sidebar}/>
            </div>
         </div>
      )
   }
})

function mapStateToProps(state) {
   return {library: state.library, settings: state.settings}
}

function mapDispatchToProps(dispatch) {
   return {
      playMusic: () => MusicActions.playMusic(dispatch),
      stopMusic: () => MusicActions.stopMusic(dispatch),
      pauseMusic: () => MusicActions.pauseMusic(dispatch),
      getSetting: (key, defaultValue,) => SettingsActions.getSetting(key, defaultValue, dispatch),
      scanLibrary: (libraryPath) => LibraryActions.scanLibrary(libraryPath, dispatch)
   };
}

var MainPageApp = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageApp
