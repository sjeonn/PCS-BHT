import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <header class = "header"> 
            <div class = "title">
                <h1>The Berkeley Housing Tool</h1>
            </div>
            <nav class = "links">
                <ul>
                    <li><a href = "#"> Listings </a></li>
                    <li><a href = "#"> Resources </a></li>
                    <li><a href = "#"> About Us </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;