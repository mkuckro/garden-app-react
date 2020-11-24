import React, { useEffect } from 'react';

const NewNote = () => {
    useEffect(() => {
        document.title = 'New Note';
    });
    
    return <h1>this is going to be my new Note page</h1>;
};

export default NewNote;