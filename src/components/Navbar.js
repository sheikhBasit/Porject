// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Cinema Booking</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/theaters">Theaters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookings">Bookings</Link>
            </li>
          </ul>
          {/* Add login/logout button based on user authentication status */}
          {/* You may need to implement authentication logic */}
          <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
