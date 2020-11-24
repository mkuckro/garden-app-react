import React from 'react';
import styled from 'styled-components';
 
import JournalEntry from './JournalEntry';
import Note from './Note';

const FeedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 85%;
`;

const ResultWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 25px;
`;

const page = window.location.pathname;

const Feed = ({ results }) => {
    return (
        <FeedWrapper>
            {results.map(data => (
                <ResultWrapper key={data.id}>
                    {page === '/journal' && 
                    <JournalEntry result={data} />}

                    {page === '/notes' && 
                    <Note result={data} />}
                </ResultWrapper>
            ))}
        </FeedWrapper>
    )
};

export default Feed;