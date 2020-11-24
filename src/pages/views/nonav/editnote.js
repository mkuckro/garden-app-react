import React, { useEffect } from 'react';

const EditNote = () => {
    useEffect(() => {
        document.title = 'Edit note';
    });
    
    return <h1>this is going to be my edit note page</h1>;
};

export default EditNote;