import React, { Component } from 'react';
import Button from './Button'


class Game extends Component {
    // set variable with state
    state={score:0};

    constructor(props){
        super(props);
    }

    //on click event handler with addition variable from button.js
    handleClick = () =>{
        let updateScore = this.state.score + this.props.addition;
        this.setState({score:updateScore})
    };

    render() {
        return (
            <div className="App">
                <h1>{this.props.player}</h1>
                <h1>Score:{this.state.score}</h1>
                <button onClick={this.handleClick}>{this.props.addition}pt</button>
            </div>
        );
    }
}

export default Game;