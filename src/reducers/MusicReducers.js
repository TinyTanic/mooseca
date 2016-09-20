const initialState = {
   playbackState: 'stop'
}

export function musicReducer(state = initialState, action) {
   switch (action.type) {
      case 'MUSIC':
         return {
            playbackState: action.playbackState,
            error: action.error
         }
      default:
         return state
   }

}
