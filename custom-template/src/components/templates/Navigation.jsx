// src/components/Navigation.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';


const Navigation = () => {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </>
    );
};

export default Navigation;
