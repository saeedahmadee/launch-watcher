import React from 'react';
import { NavLink } from 'react-router-dom';
import SvgStartup from './icons/startup';
import SvgList from './icons/list';
import SvgCalendar from './icons/calendar';
import SvgInfo from './icons/info';

const Header = () => (
    <header className='header'>
        <NavLink to="/" className="header__item" activeClassName="is-active" exact={true}>
            <div className="header__icon">
                <SvgStartup width="32px" height="40px"/>
            </div>
            Home
        </NavLink>
        <NavLink to="/list" className="header__item" activeClassName="is-active">
            <div className="header__icon">
                <SvgList width="30px" height="40px"/>
            </div>
            List
        </NavLink>
        <NavLink to="/calendar" className="header__item" activeClassName="is-active">
            <div className="header__icon">
                <SvgCalendar width="30px" height="40px"/>
            </div>
            Calendar
        </NavLink>
        <NavLink to="/about" className="header__item" activeClassName="is-active">
            <div className="header__icon">
                <SvgInfo width="28px" height="40px"/>
            </div>
            About
        </NavLink>
    </header>
);

export default Header;