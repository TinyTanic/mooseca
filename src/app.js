import "babel-polyfill"

import {
   reducers
} from './reducers/reducers'

import {
   createStore, applyMiddleware
} from 'redux'

import sagaMiddleware from './saga'

import ReduxThunk from 'redux-thunk'

import { rootSaga } from './sagas/sagas'

const _store = createStore(
   reducers,
   applyMiddleware(sagaMiddleware),
   applyMiddleware(ReduxThunk),
)

sagaMiddleware.run(rootSaga)


var App = require('./components/App').App

import * as db from './db'

_store.subscribe(() => {
   console.log('## STORE #####################');
   console.log(_store.getState());
   console.log('##############################\n');
})

console.log(db);

db.load((err) => {
   if (err) {
      throw err
   } else {
      const ReactDOM = require('react-dom')
      const React = require('react')

      ReactDOM.render(React.createElement(App, {}), window.document.getElementById('app'));
   }
})

export const store  = _store
