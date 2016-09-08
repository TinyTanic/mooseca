const initialState = {
}

export function musicReducer(state = initialState, action) {
   switch (action.type) {
      case 'PLAY_MUSIC':
      return {
         state: action.state,
         error: action.error
      }
      default:
         return state
   }

}
