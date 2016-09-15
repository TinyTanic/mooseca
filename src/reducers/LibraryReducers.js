const initialState = {
   loaded: false
}

export function libraryReducer(state = initialState, action) {
   switch (action.type) {
      case 'LIBRARY_LOAD':
         if (!action.err) {
            return Object.assign({}, state, {
               loaded: true
            })
         } else {
            return state
         }
      case 'LIBRARY_SCAN':
         if (!action.err) {
            return Object.assign({}, state, {
               artists: action.artists,
               albums: action.albums,
            })
         } else {
            return state
         }
      case 'LIBRARY_GET':
         console.log('--');
         console.log(action);
         if (!action.err) {
            let ret = Object.assign({}, state, {
               selectedAlbum: action.selectedAlbum
            })
            console.log(ret);
            return ret
         } else {
            return state
         }
      default:
         return state
   }

}
