import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import Logo from '../image/Logo - working.png';
import Logo2 from '../image/goldlogo.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <div className={styles.header_container}>
      <div className={styles.header_items}>
        <div className="header_uperhead flex">
          <img src={Logo} alt="Logo" className={styles.logo} />
          <div className={styles.header_items_item}>
            <h2 className={styles.header_items_item_h2}>
              JustCold Refrigreation Technology Co.,Ltd.
            </h2>
            <div className="justcold_award flex">
              <div className="justcold_name flex">
                <img src={Logo2} alt="Logo" className={styles.logo_two} />
                <h6>
                  Gold Member Since 2022
                </h6>
              </div>
              <div className="justcold_name flex">
                <img src={Logo2} alt="Logo" className={styles.logo_two} />
                <h6>
                  Gold Member Since 2022
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header_search}>
          <input type="text" placeholder="search products" className={styles.search_input} />
          <RiSearchLine className={styles.search_btn} />
        </div>
      </div>
      <header className={styles.navbar_container}>

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

        </nav>
        <div className="sidebar_socials flex">
          <FaTwitter className={styles.socials_icon} />
          <FaFacebookF className={styles.socials_icon} />
          <FaVine className={styles.socials_icon} />
          <FaPinterestP className={styles.socials_icon} />
        </div>
        <Outlet />
      </header>
    </div>
  );
};

export default Navbar;
