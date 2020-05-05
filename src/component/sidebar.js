import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../images/hemant.jpg';

class Sidebar extends Component {
    
    render() {
        return (
            <div className="sidebar-parent">
                <a href="/" className="sidebar-user-url">
                    <div className="sidebar-user-photo">
                        <img src={logo} />
                    </div>
                    <div className="sidebar-user-content">
                        <h1 className="sidebar-user-name">Hemant Kumar Singh</h1>
                        <h2 className="sidebar-user-title">Full-stack Software Engineer</h2>
                    </div>
                </a>

                <nav className="sidebar-navigation">
                    <ul>
                        <li><Link to="/portfolio">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="sidebar-social">
                    <div className="sidebar-title">
                        Get in touch
                    </div>
                    <div className="sidebar-content">
                        <a href="#" className="sidebar-button">
                            <i className="sidebar-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;