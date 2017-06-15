import React, { Component } from 'react'

class Songs extends Component {
  render() {
    let songsEntries = []
    if (this.props.library && this.props.library) {
      songsEntries = this.props.library.map((song, index) => {
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

export default Songs
