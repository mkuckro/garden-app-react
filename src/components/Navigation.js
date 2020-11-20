import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
    border: 3px solid black;
    display: flex;
    width: 15em;
    justify-content: center;
`;

const NavList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    margin-top: 50px;
    font-size: 20px;
`;

const Navigation = () => {
    const page = window.location.pathname;

    return (
        <NavBar>
            {page === '/journal' && 
            <NavList>
                <ListItem>
                    <Link to="/new">New Entry</Link>
                </ListItem>
            </NavList>
            }

            {page === '/planner' && 
                <NavList>
                    <ListItem>
                        <Link to="/notes">Notes</Link>
                    </ListItem>
                </NavList>
            }
        </NavBar>
    );
};

export default Navigation;