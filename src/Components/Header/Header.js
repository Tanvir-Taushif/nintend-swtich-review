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
        <div className='container text-center my-3'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h1 className='fw-bold'>Nintendo <span className='header'>Switch</span></h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-fle" id="navbarNavDropdown">
                     <div className="navbar-nav">
                        <div className="nav-item">
                         <div className='nav-link'><CustomLink className='links' to="/home">HOME</CustomLink></div>
                        </div>
                        <div className="nav-item">
                         <div className='nav-link'><CustomLink className='links' to="/reviews">REVIEWS</CustomLink></div>
                        </div>
                        <div className="nav-item">
                         <div className='nav-link'><CustomLink className='links' to="/dashboard">DASHBOARD</CustomLink></div>
                        </div>
                        <div className="nav-item">
                        <div className='nav-link'><CustomLink className='links' to="/blogs">BLOGS</CustomLink></div>
                        </div>
                        <div className="nav-item">
                        <div className='nav-link'><CustomLink className='links' to="/about">ABOUT</CustomLink></div>
                        </div>
                     </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;