import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css'; // Importing CSS for styles

const Navbar = () => {
    const { logout, isAuthenticated } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {!isAuthenticated ? (
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/create-order">Create Order</Link>
                        </li>
                        <li>
                            <Link to="/track-order">Track Order</Link>
                        </li>
                        <li>
                            <button onClick={logout} className="logout-button">Log Out</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
