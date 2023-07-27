import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_cont_items}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_cont_list}>
            <li className={styles.navbar_cont_link}>
              <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li className={styles.navbar_cont_link}>
              <Link to="/products" onClick={() => setActiveNav('products')} className={activeNav === 'products' ? 'active' : ''}>Products</Link>
            </li>
            <li className={styles.navbar_cont_link}>
              <Link to="/services" onClick={() => setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}>Services</Link>
            </li>
            <li className={styles.navbar_cont_link}>
              <Link to="/about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>About Us</Link>
            </li>
            <li className={styles.navbar_cont_link}>
              <Link to="/contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact Us</Link>
            </li>
          </ul>
          <div className="sidebar_socials flex">
            <FaTwitter className={styles.socials_icon} />
            <FaFacebookF className={styles.socials_icon} />
            <FaVine className={styles.socials_icon} />
            <FaPinterestP className={styles.socials_icon} />
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
