// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  render() {
    return (<button onClick={this.myClick} />)
  }

  myClick = (event) => {
    let coords = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coords)
  }

}


export default CoordinatesButton
