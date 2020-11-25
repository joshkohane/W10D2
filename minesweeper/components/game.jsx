import React from "react";
import {Board} from "../minesweeper.js";
import BoardComponent from './board'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Board(9, 10)
        }
        this.updateGame = this.updateGame.bind(this);
        this.checkGameStatus = this.checkGameStatus.bind(this);
        this.endOfGame = this.endOfGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged) {
        if(flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({
            board: this.state.board
        })
    }

    checkGameStatus() {
        if(this.state.board.won()) {
            return this.endOfGame('You won!')
        }
        if (this.state.board.lost()) {
            return this.endOfGame('You lost!')
        }
    }

    endOfGame(content){
        this.state.board.grid.map((row) => {
            return row.map((tile) => {
                if(tile.bombed) tile.explore();
                return tile;
            })
        })
        return(
            <div className="modal">
                <div className="modal-screen"></div>
                <div className="modal-overlay">
                    <p>{content}</p>
                    <button onClick={this.restartGame}>Play Again!</button>
                </div>
            </div>
        )
    }

    restartGame() {
        this.setState({board: new Board(9, 10)})
    }
        
    render(){
        return (
            <div className="board-display">
                <div>
                    <h1>Minesweeper</h1>
                    <p>Click to explore a tile.</p>
                    <p>Alt + click to flag a tile.</p>
                </div>
                <BoardComponent board={this.state.board} updateGame={this.updateGame} />
                {console.log(this.state.board)}
                
                {this.checkGameStatus()}
            </div>
        )
    }
}

export default Game;