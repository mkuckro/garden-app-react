import React from 'react';
import { Route } from 'react-router-dom';

import NavLayout from '/components/layouts/NavLayout';

const NavLayoutRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <NavLayout>
                <Component {...props} />
            </NavLayout>
        )} />
    );
};

export default NavLayoutRoutes;