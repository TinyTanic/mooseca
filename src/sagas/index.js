import { playSong } from './play'
import { searchMusic, loadMusic } from './library'

function* rootSagas() {
  yield [playSong(), searchMusic(), loadMusic()]
}

export default rootSagas
