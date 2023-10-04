import '../css/navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className = 'navbar'>
            <div className = 'appearance'>
                <img src= '/images/mylogo.png' alt="myportfolio" className = 'my-logo' />
                <p className= 'title'>Decaitor</p>
            </div>
            <div className = 'route-links'>
                <div className = 'home'>
                    <Link to="/" className = 'home'>Home</Link>
                </div>
                
                <div className = 'project'>
                    <Link to="/projects" className = 'project'>Projects</Link>
                </div>

                <div className = 'social'>
                    <Link to="/social" className = 'social'>Social</Link>
                </div>
                <div className = 'contact-me'>
                    <a href="#contact" className='contact-me'>Contact</a>
                </div>
            </div>
            
        </nav>
    )
}