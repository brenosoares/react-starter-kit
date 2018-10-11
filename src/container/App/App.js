import React, { Component } from 'react';
import HomeContainer from '../Home';

class App extends Component {
    render() {
        return (
            <div>
                <HomeContainer/>
                <h1>Header H1</h1>
                <h2>Header H2</h2>
                <h3>Header H3</h3>
                <h4>Header H4</h4>
                <h5>Header H5</h5>
                <h6>Header H6</h6>
            </div>
        );
    }
}

export default App;
