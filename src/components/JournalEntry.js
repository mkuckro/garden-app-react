import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Button from './Button';

const JournalEntry = ({ result }) => {
    // create object to associate month indices with month names
    let monthConversion = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    let creationDate = new Date(result.createdAt);
                
    let year = creationDate.getFullYear();
    let month = monthConversion[creationDate.getMonth()];
    let date = creationDate.getDate();
    let hours = creationDate.getHours();
    let minutes = creationDate.getMinutes();
    let seconds = creationDate.getSeconds();
    let fullDateTime = `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`;

    return (
        <React.Fragment>
            <div>{fullDateTime}</div>
            <div>{result.content}</div>
            <Link to={`/journalentry/${result.id}`}>
                <Button>Read More</Button>
            </Link>
        </React.Fragment>
    )
};

export default JournalEntry;