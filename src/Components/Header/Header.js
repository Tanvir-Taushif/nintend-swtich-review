import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MenuIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';
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
                    <div className='nav-hide'><CustomLink className='links' to="/home">HOME</CustomLink></div>
                    <div className='nav-hide'><CustomLink className='links' to="/reviews">REVIEWS</CustomLink></div>
                    <div className='nav-hide'><CustomLink className='links' to="/dashboard">DASHBOARD</CustomLink></div>
                    <div className='nav-hide'><CustomLink className='links' to="/blogs">BLOGS</CustomLink></div>
                    <div className='nav-hide'><CustomLink className='links' to="/about">ABOUT</CustomLink></div>
                </div>
            </nav>
        </div>
    );
};

export default Header;