import { playSong } from './play'
import { searchMusic, loadMusic, loadMusicOrderByAuthor } from './library'

function* rootSagas() {
  yield [playSong(), searchMusic(), loadMusic(), loadMusicOrderByAuthor()]
}

export default rootSagas
