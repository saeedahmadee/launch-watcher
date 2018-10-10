import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Launch Watcher</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/launch" activeClassName="is-active">Launch</NavLink>
        <NavLink to="/list" activeClassName="is-active">List</NavLink>
    </header>
);

export default Header;