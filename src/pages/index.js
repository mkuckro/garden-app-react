// ** Page Used for Routing ** //
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// ** Import Routes ** //
import Home from './home';
import NewEntry from './new';
import EditEntry from './edit';

const Pages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewEntry} />
            <Route path="/edit" component={EditEntry} />
        </Router>
    );
};

export default Pages;