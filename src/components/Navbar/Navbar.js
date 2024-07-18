import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { MenuItems } from './MenuItems';
import DarkMode from "../DarkMode/DarkMode";
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
                {/* this used to acces litteral value in the array */}
                    {MenuItems.map((item, index) => (
                        <li key={index} className={item.subMenu ? 'nav-links has-submenu' : 'nav-links'}>
                            <NavLink
                                className={item.cName}
                                to={item.url}
                                onClick={this.handleClick}
                            >
                                {item.title}
                            </NavLink>
                            {item.subMenu && (
                                <ul className="sub-menu">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <NavLink
                                                className={subItem.cName}
                                                to={subItem.url}
                                                onClick={this.handleClick}
                                            >
                                                {subItem.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <DarkMode />
            </nav>
        );
    }
}

export default Navbar;
