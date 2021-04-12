import React from 'react';
import Home from './Home';
import BlogAll from './BlogAll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={BlogAll} />
            </Switch>
        </Router>
    );
}

export default App;