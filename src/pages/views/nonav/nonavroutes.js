import React from 'react';
import { Route } from 'react-router-dom';

import NoNavLayout from '/components/layouts/NoNavLayout';

const NoNavLayoutRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <NoNavLayout>
                <Component {...props} />
            </NoNavLayout>
        )} />
    );
};

export default NoNavLayoutRoutes;