import { playSong, pauseSong } from './play'
import { searchMusic, loadMusic, loadMusicOrderByAuthor } from './library'

function* rootSagas() {
  yield [playSong(), pauseSong(), searchMusic(), loadMusic(), loadMusicOrderByAuthor()]
}

export default rootSagas
