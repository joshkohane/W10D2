import React from 'react'
import Tile from './tile'

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.makeColumn = this.makeColumn.bind(this);
        this.makeRow = this.makeRow.bind(this);
    }

    makeColumn(row){
        return(
            row.map((tile, idx) => {
                return <Tile tile={tile} updateGame={this.props.updateGame} key={idx}/>
            })
        )
    }

    makeRow(board){
        return(
            board.map((row, idx) => {
                return <div className="row" key={idx}>{this.makeColumn(row)}</div>
            })
        )
    }

    render() {
        return(
            <div>
                {this.makeRow(this.props.board.grid)}
            </div>
        )
    }
}