import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopBar from './partials/TopBar'
import SideBar from './partials/SideBar'
import NavBar from './partials/NavBar'

import router from '../router/index'

import { search } from '../actions/library'
import { changeView } from '../actions/general'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(search())
  }

  _handleChangeView = view => {
    this.props.dispatch(changeView(view))
  }

  render() {
    const view = router(this.props).view
    const viewProps = {
      ...router(this.props).props,
      dispatch: this.props.dispatch,
    }

    const sidebar = this.props.sidebar
      ? <SideBar songs={this.props.library} dispatch={this.props.dispatch} />
      : null
    return (
      <div className="App">
        <TopBar
          dispatch={this.props.dispatch}
          sidebar={this.props.sidebar}
          state={this.props.play}
          song={this.props.song}
        />
        <div className="bottom">
          <NavBar
            onChangeView={this._handleChangeView}
            currentView={this.props.view}
          />
          <div className="view">
            <div className="scroll">
              {React.createElement(view, viewProps)}
            </div>
          </div>
          {sidebar}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
