import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import GlobalStyle from '/components/GlobalStyles';
import Pages from '/pages';

// ** Apollo Client Setup ** //
const client = new ApolloClient({
    uri: process.env.API_URI,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const App = () => {
    return (
        <ApolloProvider client={client} id="root">
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));