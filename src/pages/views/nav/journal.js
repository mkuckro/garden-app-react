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

const Journal = () => {
    return (
        <Main>
            <Title>This is my garden journal page</Title>
        </Main>
    );
};

export default Journal;