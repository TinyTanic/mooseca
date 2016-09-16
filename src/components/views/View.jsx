import React from 'react'
import {connect} from 'react-redux';

import AlbumsView from './AlbumsView'
import ArtistsView from './ArtistsView'

let View = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      console.log(this.props.view);
      let view = null
      switch (this.props.view) {
         case 'album':
            view = (<AlbumsView library={this.props.library}/>)
            break
         case 'artist':
            view = (<ArtistsView library={this.props.library}/>)
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
   return {};
}

View = connect(mapStateToProps, mapDispatchToProps)(View)

export default View
