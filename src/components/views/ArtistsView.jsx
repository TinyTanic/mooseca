import React from 'react'
import ArtistCard from '../elements/ArtistCard'

var AlbumsView = React.createClass({
  componentDidMount() {
    console.log(this.props);
    this.props.getArtists()
  },
  render() {
    let artistsCards = []
    let fillers = null;
    if (this.props.library && this.props.library.artists) {
      artistsCards = this.props.library.artists.map((artist, index) => {
        return <ArtistCard key={index} meta={artist} onPlayClick={this._handlePlay} onAddPlaylist={this._handleAddPlaylist} onAddQueue={this._handleAddQueue}/>
      })
    }

    if (artistsCards.length === 0) {
      artistsCards = (
        <div className="empty-view">
          {'Non è presente alcun artista'}
        </div>
      )
    } else {
      fillers = (
        <div>
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
      )
    }
    return (
      <div className="artistview">
        {artistsCards}
        {fillers}
      </div>
    )
  }
})

export default AlbumsView
