import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/portfolio">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;