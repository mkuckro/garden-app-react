import React from 'react';

import { GET_JOURNAL_ENTRY } from '../../../gql/query';

const Entry = props => {
    let id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_ENTRY, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        
    )
};

export default Entry;