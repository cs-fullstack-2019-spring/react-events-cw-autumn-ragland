import React, {Component} from 'react';
//import component
import Game from "./Game";

class Button extends Component {
    //set addition variable with state
    state={addition:1};

    constructor(props){
        super(props);
    }

    //on click event handlers
    addOne = () =>{
        this.setState({addition:1})
    };
    addFive = () =>{
        this.setState({addition:5})
    };
    addTen = () =>{
        this.setState({addition:10})
    };

    render() {
        return (
            <div>
                {/*buttons with on click event listeners*/}
                <button onClick={this.addOne}>1pt</button>
                <button onClick={this.addFive}>5pt</button>
                <button onClick={this.addTen}>10pt</button>

                {/*render player components with player number and addition variable*/}
                <div className="playerGrid">
                    <div className={'playerOne'}>
                        <Game player={'Player One'} addition={this.state.addition}/>
                    </div>
                    <div className={'playerTwo'}>
                        <Game player={'Player Two'} addition={this.state.addition}/>
                    </div>
                    <div className={'playerThree'}>
                        <Game player={'Player Three'} addition={this.state.addition}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Button;