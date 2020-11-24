import React, { useEffect } from 'react';

const NewEntry = () => {
    useEffect(() => {
        document.title = 'New Entry';
    });
    
    return <h1>this is going to be my new entry page</h1>;
};

export default NewEntry;