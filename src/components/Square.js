import React, { PureComponent } from 'react'

class Square extends PureComponent {
  render() {
    return(
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    )
  }
}

export default Square
