import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Navigation from '../Navigation';

const Primary = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const Main = styled.div`
    border: 1px solid purple;
    display: flex;
    width: 100%;
    height: 100%;
`;

const NavLayout = ({ children }) => {
    return (
        <Primary>
            <Header />
            <Wrapper>
                <Navigation />
                <Main>{children}</Main>
            </Wrapper>
        </Primary>
    );
};

export default NavLayout;