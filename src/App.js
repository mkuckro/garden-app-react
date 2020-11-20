import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '/components/GlobalStyles';
import Pages from '/pages';

const App = () => {
    return (
        <div id="root">
            <GlobalStyle />
            <Pages />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));