import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        height: 100vh;
    }

    a:link,
    a:focus,
    a:hover,
    a:visited,
    a:active {
        text-decoration: none;
        color: black;
    }
`;