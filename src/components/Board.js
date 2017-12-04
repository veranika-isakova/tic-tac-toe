import React, { PureComponent } from 'react'
import Square from './Square';
import { connect } from 'react-redux'
import click from '../actions/click'

class Board extends PureComponent {
  renderSquare(i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.save(i)} //value and onClick - props
    />;
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { // props - what component should show
    squares: state.squares
  }
}

const mapDispatchToProps = { save: click }
export default connect(mapStateToProps, mapDispatchToProps)(Board)// connect component to redux
