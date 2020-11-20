// ** Page Used for Routing ** //
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ** Import Routes ** //
import Home from './views/nonav/home';
import Journal from './views/nav/journal';
import NewEntry from './views/nonav/new';
import EditEntry from './views/nonav/edit';
import Planner from './views/nav/planner';
import Notes from './views/nav/notes';

// ** Import Layout Route HOC ** //
import NavLayoutRoutes from './views/nav/navroutes';
import NoNavLayoutRoutes from './views/nonav/nonavroutes';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <NavLayoutRoutes path="/journal" component={Journal} />
                <NavLayoutRoutes path="/planner" component={Planner} />
                <NavLayoutRoutes path="/notes" component={Notes} />
                <NoNavLayoutRoutes path="/new" component={NewEntry} />
                <NoNavLayoutRoutes path="/edit" component={EditEntry} />
                <NoNavLayoutRoutes exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Pages;