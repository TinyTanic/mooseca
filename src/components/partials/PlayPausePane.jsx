import React from 'react'

const PlayPausePane = ({ state }) => (
  <div className="playpausepane">
    <div className="button-container">
      <div className="button-cell">
        {/* <button className="rounded-button nav-button" onClick={this._handlePrevButton}></button> */}
        <i className="fa fa-backward button" />

      </div>
      <div className="button-cell">
        <i className={`fa fa-${state} big-button`} />
      </div>
      <div className="button-cell">
        {/* <button className="rounded-button nav-button" onClick={this._handleNextButton}></button> */}
        <i className="fa fa-forward button" />
      </div>
    </div>

  </div>
)

export default PlayPausePane
