import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_NOTES } from '../../../gql/query';
import Feed from '/components/Feed';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    display: flex;
    align-self: center;
`;

// ** GraphQL Query ** //


const Notes = () => {
    // Query Hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const notes = data.noteFeed.notes;

    return (
        <Wrapper>
            <Title>Previous Notes</Title>
            <Feed results={notes} />
        </Wrapper>
    );
};

export default Notes;