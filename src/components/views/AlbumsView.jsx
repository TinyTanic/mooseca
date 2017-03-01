import React from 'react'
import AlbumCard from '../elements/AlbumCard'

var AlbumsView = React.createClass({
  componentDidMount() {
    console.log(this.props);
    this.props.getAlbums()
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
    let albumsCards = []
    let fillers = null;
    if (this.props.library && this.props.library.albums) {
      albumsCards = this.props.library.albums.map((album, index) => {
        return <AlbumCard key={index} meta={album} onPlayClick={this._handlePlay} onAddPlaylist={this._handleAddPlaylist} onPushToQueue={this._handlePushToQueue} onReplaceQueue={this._handleReplaceQueue}/>
      })

    }

    if(albumsCards.length === 0) {
      albumsCards = (
        <div className="empty-view">
          {'Non è presente alcun album'}
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
      <div className="albumview">
        {albumsCards}
        {fillers}
      </div>
    )
  }
})

export default AlbumsView
