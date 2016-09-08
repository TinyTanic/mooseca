import React from 'react'
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import * as MusicActions from '../../actions/MusicActions'

import TopBar from './TopBar'

let pages = {}

var MainPage = React.createClass({
    getInitialState() {
        return {}
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
    render() {
        return (
            <div>
                <TopBar onPlayPause={this._handlePlayPause}/>
            </div>
        )
    }
})

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        playMusic: () => MusicActions.playMusic(dispatch),
        stopMusic: () => MusicActions.stopMusic(dispatch),
        pauseMusic: () => MusicActions.pauseMusic(dispatch)
    };
}

var MainPageApp = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageApp
