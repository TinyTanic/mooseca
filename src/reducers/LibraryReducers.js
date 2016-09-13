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
      default:
         return state
   }

}
