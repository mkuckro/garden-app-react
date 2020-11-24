import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_JOURNAL_ENTRIES } from '../../../gql/query';
import Feed from '/components/Feed';
import Button from '../../../components/Button';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    display: flex;
    align-self: center;
`;


const Journal = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_JOURNAL_ENTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const journalEntries = data.journalEntryFeed.journalEntries;

    return (
        <Wrapper>
            <Title>Previous Garden Journal Entries</Title>
            <Feed results={journalEntries} />
            {data.journalEntryFeed.hasNextPage &&
            <Button
                onClick={() => 
                    fetchMore({
                        variables: {
                            cursor: data.journalEntryFeed.cursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            return {
                                journalEntryFeed: {
                                    cursor: fetchMoreResult.journalEntryFeed.cursor,
                                    hasNextPage: fetchMoreResult.journalEntryFeed.hasNextPage,
                                    journalEntries: [
                                        ...previousResult.journalEntryFeed.journalEntries,
                                        ...fetchMoreResult.journalEntryFeed.journalEntries
                                    ],
                                    _typename: 'journalEntryFeed'
                                }
                            };
                        }
                    })
                }
            >
                Load More
            </Button>}
        </Wrapper>
    );
};

export default Journal;