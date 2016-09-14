import React from 'react'

var SideBar = React.createClass({

   render() {
      let classes = 'sidebar'
      if(this.props.isCompressed){
         classes += ' uncompressed'
      }
      console.log(classes);
      return (<div className={classes}>

      </div>)
   }
})

export default SideBar
