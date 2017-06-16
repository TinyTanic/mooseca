import { playSong, pauseSong } from './play'
import { searchMusic, loadMusic } from './library'

function* rootSagas() {
  yield [playSong(), pauseSong(), searchMusic(), loadMusic()]
}

export default rootSagas
