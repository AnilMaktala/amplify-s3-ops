// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                    <Link to="/projects">Projects</Link>
                    <ul>
                        <li><Link to="/projects/create">Create Project</Link></li>
                        <li><Link to="/projects/list">Project List</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
