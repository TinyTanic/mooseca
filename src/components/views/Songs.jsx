import React, { Component } from 'react'

class SongsView extends Component {
  componentDidMount() {
    console.log(this.props)
    // this.props.getSongs()
  }
  _handlePlay(album) {
    // this.props.onAlbumClick(album)
    console.log('play album')
  }
  _handleAddPlaylist(album) {
    console.log('add album to playlist')
  }
  _handlePushToQueue(album) {
    console.log('pushed album to queue')
  }
  _handleReplaceQueue(album) {
    console.log(this.props.replaceQueueWithAlbum(album))
    console.log('replaced album to queue')
  }
  _handleClickSong(song) {
    // console.log(event, song);
    // this.props.onPlaySong(song)
  }
  render() {
    let songsEntries = []
    let fillers = null
    if (this.props.library && this.props.library) {
      songsEntries = this.props.library.map((song, index) => {
        console.log(song)
        return (
          <tr onClick={() => this._handleClickSong(song)} key={index}>
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

    if (songsEntries.length > 0) {
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
                {songsEntries}
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return <p>nessuna canzone</p>
    }
  }
}

export default SongsView
