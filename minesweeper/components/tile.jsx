import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addInnerContent = this.addInnerContent.bind(this);
    }

    addClassNames() {
        const classes = ['tile'];
        if (this.props.tile.flagged) {
            classes.push('flagged');
        }
        if (this.props.tile.explored) {
            classes.push('explored');
            
        }
        if (this.props.tile.bombed) {
            classes.push('bombed')
        }
        return classes.join(' ')
    }

    handleClick(e) {
        let flagged = e.altKey
        this.props.updateGame(this.props.tile, flagged)
    }

    addInnerContent() {
        let numBombs = 0
        if (this.props.tile.explored && !this.props.tile.bombed) {
            numBombs = this.props.tile.adjacentBombCount()
        }
        return (
            (numBombs === 0) ? '' : <span>{numBombs}</span>
        )
    }

    render() {
        // const klass = 
        // const selected = this.props.selectedTile
        return (
            <div className={this.addClassNames()} onClick={this.handleClick}>{this.addInnerContent()}</div>
        )
    }
}