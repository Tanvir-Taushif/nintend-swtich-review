import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MenuIcon } from '@heroicons/react/solid';
const Header = () => {
    const clickHandler=()=>{
        if(document.getElementById('navManu').style.display==='none'){
            document.getElementById('navManu').style.display='block';
        }
        else{
            document.getElementById('navManu').style.display='none';
        }
    }
    return (
        <div>
            <nav id='NavBar' className='my-4 d-flex justify-content-center '>
                <div className='btn-class'>
                    <button onClick={clickHandler} className='btn ms-3 my-1 ' id='button'><MenuIcon height={25} width={25}></MenuIcon></button>
                </div>
                <div id='navManu'>
                    <div className='nav-hide'><Link className='links' to="/home">HOME</Link></div>
                    <div className='nav-hide'><Link className='links' to="/reviews">REVIEWS</Link></div>
                    <div className='nav-hide'><Link className='links' to="/dashboard">DASHBOARD</Link></div>
                    <div className='nav-hide'><Link className='links' to="/blogs">BLOGS</Link></div>
                    <div className='nav-hide'><Link className='links' to="/about">ABOUT</Link></div>
                </div>
            </nav>
        </div>
    );
};

export default Header;