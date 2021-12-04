import React from 'react';
import { Link, link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    
    return(
    
        <div className={styles.navbar}>
        <nav>
          <div id="logo">
            <h2>Logo</h2>
          </div>
          
          <form className={styles.searchbar} action="">
            <span className="material-icons">search</span>
            <input type="text" placeholder="Search" />
          </form>
          <div className={styles.navlink}>
              <li><Link className={styles.link} to = '/'>Home</Link></li>
              <li><Link className={styles.link} to= '/About'>About</Link></li>
          </div>
        </nav>
      </div>
    
    )
}

export default Nav;
