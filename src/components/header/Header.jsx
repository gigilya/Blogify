import React from 'react';
import './scss/header.scss'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <h1 className='title'>Blogify</h1>
        </div>
    );
};

export default Header;