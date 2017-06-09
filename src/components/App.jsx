import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopBar from './partials/TopBar'
import SideBar from './partials/SideBar'
import NavBar from './partials/NavBar'

import router from '../router/index'

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(changePage(pages.SEARCH))
    // this.props.dispatch(printerConnect())
    // this.props.dispatch(checkWifi())
  }

  render() {
    const view = router(this.props).view
    const viewProps = {
      ...router(this.props).props,
      dispatch: this.props.dispatch,
    }
    return (
      <div className="App">
        <TopBar dispatch={this.props.dispatch} />
        <div className="bottom">
          <NavBar
            onChangeView={this._handleChangeView}
            view={this.props.view}
          />
          <div className="view">
            {React.createElement(view, viewProps)}
          </div>
          <SideBar dispatch={this.props.dispatch} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
