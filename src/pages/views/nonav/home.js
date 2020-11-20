import React, { useEffect } from 'react';
import styled from 'styled-components';

const Widget = styled.div`
    border: 2px solid black;
    display: flex;
    margin: 40px;
    height: 15em;
    width: 15em;
    justify-content: center;
`;

const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
    });

    return (
        <React.Fragment>
            <Widget>Recent Journal Entries</Widget>
            <Widget>Calendar</Widget>
            <Widget>Notes</Widget>
            <Widget>To Do List</Widget>
            <Widget>Reference</Widget>
        </React.Fragment>
    );
};

export default Home;