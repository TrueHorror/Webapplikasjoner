import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 20px;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;
  display: block;
  float: left;
  justify-content: space-between;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 10px;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Home Page
        </NavLink>
        <NavLink to="/polls" activeClassName="active">
          View all polls
        </NavLink>
        <NavLink to="/createpoll" activeClassName="active">
          Create Poll
        </NavLink>
        <NavLink to="/signin" activeClassName="active">
          Sign In
        </NavLink>
        <NavLink to="/signup" activeClassName="active">
          Sign Up
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
