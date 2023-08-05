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
            <Link to="/changeone" onClick={() => setActiveNav('changeone')} className={activeNav === 'changeone' ? 'active' : ''}>Changeable 1</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/changetwo" onClick={() => setActiveNav('changetwo')} className={activeNav === 'changetwo' ? 'active' : ''}>Changeable 2</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/changethree" onClick={() => setActiveNav('changethree')} className={activeNav === 'changethree' ? 'active' : ''}>Changeable 3</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/changefour" onClick={() => setActiveNav('changefoure')} className={activeNav === 'changefoure' ? 'active' : ''}>Changeable 4</Link>
          </li>
          <li className={styles.Sidebar_cont_link}>
            <Link to="/changefive" onClick={() => setActiveNav('changefive')} className={activeNav === 'changefive' ? 'active' : ''}>Changeable 5</Link>
          </li>
        </ul>

      </nav>
      <Outlet />
    </header>
  );
};

export default Sidebar;
