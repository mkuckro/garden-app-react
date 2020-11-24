import { gql } from '@apollo/client';

const GET_NOTES = gql`
query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
        cursor
        hasNextPage
        notes {
            id
            createdAt
            content
        }
    }
}
`;

const GET_NOTE = gql`
    query Note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
        }
    }
`;

const GET_JOURNAL_ENTRIES = gql`
    query JournalEntryFeed($cursor: String) {
        journalEntryFeed(cursor: $cursor) {
            cursor
            hasNextPage
            journalEntries {
                id
                createdAt
                content
            }
        }
    }
`;

const GET_JOURNAL_ENTRY = gql`
    query JournalEntry($id: ID!) {
        journalEntry(id: $id) {
            id
            createdAt
            content
        }
    }
`;

export {
    GET_NOTES,
    GET_NOTE,
    GET_JOURNAL_ENTRIES,
    GET_JOURNAL_ENTRY
};