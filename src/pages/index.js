// ** Page Used for Routing ** //
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ** Import Routes ** //
import Home from './views/nonav/home';
import Journal from './views/nav/journal';
import NewEntry from './views/nonav/newentry';
import EditEntry from './views/nonav/editentry';
import Planner from './views/nav/planner';
import Notes from './views/nav/notes';
import NewNote from './views/nonav/newnote';
import EditNote from './views/nonav/editnote';

// ** Import Layout Route HOC ** //
import NavLayoutRoutes from './views/nav/navroutes';
import NoNavLayoutRoutes from './views/nonav/nonavroutes';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <NavLayoutRoutes path="/journal" component={Journal} />
                <NoNavLayoutRoutes path="/newentry" component={NewEntry} />
                <NoNavLayoutRoutes path="/editentry" component={EditEntry} />
                <NavLayoutRoutes path="/planner" component={Planner} />
                <NavLayoutRoutes path="/notes" component={Notes} />
                <NoNavLayoutRoutes path="/newnote" component={NewNote} />
                <NoNavLayoutRoutes path="/editnote" component={EditNote} />
                <NoNavLayoutRoutes exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Pages;