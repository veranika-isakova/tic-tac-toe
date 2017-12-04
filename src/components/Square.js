import React, { PureComponent } from 'react'

class Square extends PureComponent {

  //constructor(props) { //inititalize the state, only when the component is created
  //super(props); //when defining the constructor of a subclass in javascript, super - constructor of PureComponent
  //this.state = {
    //value: null,
  //};
//}
  render() {
    return(
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

export default Square
