import { playSong } from './play'
import { searchMusic } from './library'

function* rootSagas() {
  yield [playSong(), searchMusic()]
}

export default rootSagas
