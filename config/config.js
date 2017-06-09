/**
 Percorso del Plugin di Crome Redux Dev Tools, consigliato durante la fase di testing
*/

const conf = {
  REDUX_DEV_TOOLS: `${require(
    'os'
  ).homedir()}/.config/chromium/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0`,
}

module.exports = conf
