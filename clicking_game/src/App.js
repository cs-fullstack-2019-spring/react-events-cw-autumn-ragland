import React, {Component} from 'react';
import './App.css';
//import component
import Button from './Button'

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <h1>Clicking Game</h1>
                {/*render component*/}
                <Button/>
            </div>
        );
    }
}

export default App;
