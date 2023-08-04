import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <header className={styles.Sidebar_container}>
      <h2>Products Groups</h2>
      <nav className={styles.Sidebar}>
        <ul className={styles.Sidebar_cont_list}>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/products" onClick={() => setActiveNav('products')} className={activeNav === 'products' ? 'active' : ''}>Products</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/services" onClick={() => setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}>Services</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>About Us</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact Us</Link>
          </li>
        </ul>

      </nav>
      <Outlet />
    </header>
  );
};

export default Sidebar;
