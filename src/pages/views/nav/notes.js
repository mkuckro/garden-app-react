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

const Notes = () => {
    return (
        <Main>
            <Title>This is my notes page</Title>
        </Main>
    );
};

export default Notes;