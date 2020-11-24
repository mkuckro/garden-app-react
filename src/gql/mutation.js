import { gql } from '@apollo/client';

const NEW_NOTE = gql`
    mutation NewNote($content: String!) {
        newNote(content: $content) {
            id
            createdAt
            content
        }
    }
`;

const EDIT_NOTE = gql`
    mutation EditNote($id: ID!, $content: String!) {
        updateNote(id: $id, content: $content) {
            id
            createdAt
            content
        }
    }
`;

const DELETE_NOTE = gql`
    mutation DeleteNote($id: ID!) {
        deleteNote(id: $id)
    }
`;

const NEW_JOURNAL_ENTRY = gql`
    mutation NewJournalEntry($content: String!) {
        newEntry(content: $content) {
            id
            createdAt
            content
        }
    }
`;

const EDIT_JOURNAL_ENTRY = gql`
    mutation EditJournalEntry($id: ID!, $content: String!) {
        updateEntry(id: $id, content: $content) {
            id
            createdAt
            content
        }
    }
`;

const DELETE_JOURNAL_ENTRY = gql`
    mutation DeleteJournalEntry($id: ID!) {
        deleteEntry(id: $id)
    }
`;

export {
    NEW_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    NEW_JOURNAL_ENTRY,
    EDIT_JOURNAL_ENTRY,
    DELETE_JOURNAL_ENTRY
};

