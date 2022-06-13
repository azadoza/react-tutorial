import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Square extends React.Component {
  /* all react component class w a constructor start w super(props) */
    render() {
        return(
        /* squares are controlled components.
        they informs board when clicked.
        Board sends value to square */
        <button className="square"
                onClick={() =>
                  this.props.onClick()
                    }>
                      {this.props.value}
            </button>
        );
    }
}
/* Storing the game's state in the parent, Board
Board passes a prop telling each square what to display */

class Board extends React.Component {
  // declare shared state of children in parent
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
    };
  }
  handleClick(i) {
    /* .slice creates a copy of squares array for immutability */
    const squares = this.state.squares.slice();
    squares[i] = 'x'
    this.setState({squares: squares});
  }
    renderSquare(i) {
        return(
           <Square value={this.state.squares[i]}
           onClick={() => this.handleClick(i)}
           />
        ); // reading squares array from the Board constructor
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">
                    {status}</div>
                <div className="board-row">
                    {
                    this.renderSquare(0)
                }
                    {
                    this.renderSquare(1)
                }
                    {
                    this.renderSquare(2)
                } </div>
                <div className="board-row">
                    {
                    this.renderSquare(3)
                }
                    {
                    this.renderSquare(4)
                }
                    {
                    this.renderSquare(5)
                } </div>
                <div className="board-row">
                    {
                    this.renderSquare(6)
                }
                    {
                    this.renderSquare(7)
                }
                    {
                    this.renderSquare(8)
                } </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
    <Game/>);
