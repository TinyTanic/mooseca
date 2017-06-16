import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers/index'
import App from './components/App'
import rootSagas from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const songMiddleware = store => next => action =>
  next({ ...action, meta: { player: store.getState().player } })

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(songMiddleware), applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSagas)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// import { load } from './db'
// load(() => {})
