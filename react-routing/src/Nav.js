import React from 'react';
import './App.css';
import {Link, link} from 'react-router-dom'
function Nav() {

    const navstyle ={
        color: 'white'
    };

  return (
      <nav>
          <h3>logo</h3>
          <ul className="nav-links">
              <Link style={navstyle} to='/about'>
              <li>About</li>
              </Link>
              <Link style={navstyle} to='/shop'>
              <li>Shop</li>
              </Link>
              
              
          </ul>
      </nav>
  );
}

export default Nav;
