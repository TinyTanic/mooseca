import React from 'react'
import ReactDOM from 'react-dom'

import MainPageApp from './pages/MainPage'
import {Provider} from 'react-redux'

import {store} from '../app'

export const App = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      return (
         <Provider store={store}>
            <MainPageApp />
         </Provider>
      )
   }
})
