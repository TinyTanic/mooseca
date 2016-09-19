import React from 'react'
import {connect} from 'react-redux';

import AlbumsView from './AlbumsView'
import ArtistsView from './ArtistsView'

import * as QueueActions from '../../actions/QueueActions'

let View = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      console.log(this.props.view);
      let view = null
      switch (this.props.view) {
         case 'album':
            view = (<AlbumsView {...this.props}/>)
               break
               case 'artist':
                  view = (<ArtistsView {...this.props}/>)
            break
         default:
            view = (
               <div>{'ciao'}</div>
            )
      }

      return (
         <div className="view">
            <div className="scroll">
               {view}
            </div>
         </div>
      )
   }
})

function mapStateToProps(state) {
   return {library: state.library}
}

function mapDispatchToProps(dispatch) {
   return {
      replaceQueueWithAlbum: (album) => {console.log('aaaaaaaaaa'); QueueActions.replaceWithAlbum(album, dispatch)},
   };
}

View = connect(mapStateToProps, mapDispatchToProps)(View)

export default View
