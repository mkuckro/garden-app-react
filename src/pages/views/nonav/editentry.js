import React, { useEffect } from 'react';

const EditEntry = props => {
    useEffect(() => {
        document.title = 'Update Entry';
    });

    return <h1>this is going to be my edit entry page</h1>;
};

export default EditEntry;