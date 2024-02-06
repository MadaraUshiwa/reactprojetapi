import { NavLink } from 'react-router-dom';
import './NavBar.css'


import React from 'react';

function NavBar(props) {
    return (
        <div>
            <div className="navbar-principale">
                <div className="navbar-container">
                    <div className='navbar-titre'>
                        <h1>MyAnime</h1>
                    </div>
                    <div className='navbar-menu'>
                        <NavLink to="/" className="navbar-lien">Top Anime</NavLink>
                        <NavLink to="/top-manga" className="navbar-lien">Top Manga</NavLink>
                        <NavLink to="/top-chara" className="navbar-lien">Top Characters</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;