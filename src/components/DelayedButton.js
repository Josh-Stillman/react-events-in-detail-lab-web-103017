// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  myDelay = (event) => {
    event.persist()
    setTimeout(() =>{ this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (<button onClick={this.myDelay}/>)
  }
}


export default DelayedButton
