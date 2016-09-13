const initialState = {
}

export function settingsReducer(state = initialState, action) {
   switch (action.type) {
      case 'SETTING_GET':
         console.log(
            action
         );
         console.log(Object.assign({}, state, action.settings));
         return Object.assign({}, state, action.settings)
      default:
         return state
   }

}
