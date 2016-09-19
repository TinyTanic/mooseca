const initialState = {
  mode: 'list',
  queue: [],
}

export function queueReducer(state = initialState, action) {
   switch (action.type) {
      case 'QUEUE_PUSH':
         console.log(action);
         return Object.assign({}, state, {
            queue: state.queue.concat(action.queue)
         })
      case 'QUEUE_REPLACE':
         console.log(action);
         return Object.assign({}, state, {
            queue: action.queue
         })
      case 'QUEUE_CHANGE_MODE':
         console.log(action);
         return Object.assign({}, state, {
            mode: action.mode
         })
      default:
         return state
   }

}
