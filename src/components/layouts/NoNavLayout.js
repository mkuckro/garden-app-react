import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../header';

const Primary = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
`;

const ContentBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const NoNavLayout = ({ children }) => {
    return (
        <Primary>
            <Header />
            <ContentBox>{children}</ContentBox>
        </Primary>
    )
};

export default NoNavLayout;