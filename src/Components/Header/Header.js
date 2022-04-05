import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MenuIcon } from '@heroicons/react/solid';
const Header = () => {
    return (
        <div>
            <nav id='NavBar' className='my-4'>
                <div className='navManu'>
                    <div className='nav-hide'><Link className='links' to="/home">HOME</Link></div>
                    <div className='nav-hide'><Link className='links' to="/reviews">REVIEWS</Link></div>
                    <div className='nav-hide'><Link className='links' to="/dashboard">DASHBOARD</Link></div>
                    <div className='nav-hide'><Link className='links' to="/blogs">BLOGS</Link></div>
                    <div className='nav-hide'><Link className='links' to="/about">ABOUT</Link></div>
                </div>
                <div>
                </div>
            </nav>
        </div>
    );
};

export default Header;