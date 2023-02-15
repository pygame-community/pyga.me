import styles from '@/styles/nav-bar.module.css';
import menu_open_icon from '../assets/hamburger-icons/menu_open.png';
import menu_closed_icon from '../assets/hamburger-icons/menu_close.png';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={styles.titleContent}>
        <div className={styles.nav}>
          <div className={styles.title}>pygame</div>
          <ul>
            <li>
              <a href="docs">Documentation</a>
            </li>
            <li>
              <a href="tutorials">Tutorials</a>
            </li>
            <li>
              <a href="https://github.com/pygame-community/pygame-ce">Contribute</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.hamburgerContent}>
        <nav className={styles.navbar}>
          <img src={isOpen ? menu_closed_icon.src : menu_open_icon.src} onClick={handleButtonClick} />
          <ul className={`${styles.navbarMenu} ${isOpen ? styles.visible : ''}`}>
            <li>
              <a href="docs">Documentation</a>
            </li>
            <li>
              <a href="tutorials">Tutorials</a>
            </li>
            <li>
              <a href="https://github.com/pygame-community/pygame-ce">Contribute</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
