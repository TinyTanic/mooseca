import React from 'react'

var SearchPane = React.createClass({
   render() {
      return (
         <div className="searchpane topbar-component left">
            <div className="search-container">
               <input type="text"></input>
            </div>
         </div>
      )
   }
})

export default SearchPane