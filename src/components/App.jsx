import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import MainPageApp from './MainPage'

import {store} from '../app'

export const App = React.createClass({
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
