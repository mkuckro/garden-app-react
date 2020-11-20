import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Title = styled.h1`
    display: flex;
`;

const Planner = () => {
    return (
        <Main>
            <Title>This is my garden planner page</Title>
        </Main>
    );
};

export default Planner;