import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <header class = "header"> 
            <div class = "title">
                <h1><a href = "/">Berkeley Housing Tool</a></h1>
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