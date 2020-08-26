import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.png';
import Search from '../Search/search.js';

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>
                <img
                    src={logo}
                    alt="logo"
                    className="Header-logo"
                />
            </Link>
            <Search />
        </div>
    )
};

export default Header;