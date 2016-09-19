import {
   reducers
} from './reducers/reducers'

import {
   createStore
} from 'redux'

var App = require('./components/App').App

import * as db from './db'

const _store = createStore(reducers)

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
