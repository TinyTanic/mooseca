import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import MainPageApp from './components/MainPage'

import {
   reducers
} from './reducers/reducers'

import {
   createStore, applyMiddleware
} from 'redux'

import sagaMiddleware from './saga'

import ReduxThunk from 'redux-thunk'

import { rootSaga } from './sagas/sagas'

const store = createStore(
   reducers,
   applyMiddleware(sagaMiddleware),
   applyMiddleware(ReduxThunk),
)

sagaMiddleware.run(rootSaga)


import * as db from './db'

store.subscribe(() => {
   console.log('## STORE #####################');
   console.log(store.getState());
   console.log('##############################\n');
})

const App = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      return (
         <Provider store={store}>
            <MainPageApp/>
         </Provider>
      )
   }
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
