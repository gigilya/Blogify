import React from 'react';
import './scss/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <h1 className='title'>Blogify</h1>
                <nav className='navigation'>
                    <ul className='menu'>
                        {/*<li className='menu-item'><a className='text' href="#">Home</a></li>*/}
                        {/*<li className='menu-item'><a className='text' href="#">About</a></li>*/}
                        {/*<li className='menu-item'><a className='text' href="#">About</a></li>*/}
                        <li>
                            <button className='menu-btn text'>Sing in</button>
                        </li>
                        <li>
                            <button className='menu-btn text'>Sing on</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;