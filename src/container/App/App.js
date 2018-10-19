import React, { Component } from 'react';
import HomeContainer from '../Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ComponentsContainer from '../Components';
import TopBar from '../../components/TopBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <TopBar />
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/components" component={ComponentsContainer} />
                </div>
            </Router>
        );
    }
}

export default App;
