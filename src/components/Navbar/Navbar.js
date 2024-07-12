import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <NavLink to="/" className='navbar-logo'>
                        React
                    </NavLink>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                className={item.cName}
                                to={item.url}
                                onClick={this.handleClick} // Close menu on link click
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
