import { playSong } from './play'

function* rootSagas() {
  yield [playSong]
}

export default rootSagas
