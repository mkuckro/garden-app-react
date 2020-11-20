import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    text-align: center;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

export default (props) => <StyledLink {...props} />;