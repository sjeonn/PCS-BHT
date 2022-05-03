import React from 'react';
import './Navbar.css'
import logo from './icons8-home-200.png';

function Navbar() {
    return (
        <header class = "header">
            <img src={logo} className = "photo" />
            <div class = "title">
                <h1><a href = "/">Berkeley Political Computer Science's Housing Tool</a></h1>
            </div>
            <nav class = "links">
                <ul>
                    <li><a href = "listings"> Listings </a></li>
                    <li><a href = "resources"> Resources </a></li>
                    <li><a href = "aboutus"> About Us </a></li>               
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;