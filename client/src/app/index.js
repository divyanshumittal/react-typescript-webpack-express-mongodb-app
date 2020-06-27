import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Home compiler="Typescript" framework="React"/>} />
            </Switch>
        </Router>
    )
}

export default App;
