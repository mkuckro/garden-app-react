import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBorder = styled.div`
    border: 3px solid black;
    display: flex;
    height: 6em;
    padding: 0;
    flex-basis: 100%;
    justify-content: space-between;
`;

const LogoAlign = styled.div`
    display: flex;
    width: 10em;
    align-items: center;
    justify-content: center;
`;

const NavAlign = styled.div`
    display: flex;

    @media (max-width: 850px) {
        background-color: lightblue;
    }
`;

const NavList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    @media (max-width: 850px) {
        display: none;
    }
`;

const StyledLinkList = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px;
    font-size: 20px;
`;

const SmallScreenNav = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    width: 10em;

    @media (min-width: 850px) {
        display: none;
    }
`;

const Header = () => {
    return (
        <HeaderBorder>
            <LogoAlign>
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
            </LogoAlign>
            <NavAlign>
                <NavList>
                    <StyledLinkList>
                        <Link to="/">Home</Link>
                    </StyledLinkList>
                    <StyledLinkList>
                        <Link to="/journal">Garden Journal</Link>
                    </StyledLinkList>
                    <StyledLinkList>
                        <Link to="/planner">Garden Planner</Link>
                    </StyledLinkList>
                </NavList>
                <SmallScreenNav>
                    <h2>test</h2>
                </SmallScreenNav>
            </NavAlign>
        </HeaderBorder>
    );
};

export default Header;