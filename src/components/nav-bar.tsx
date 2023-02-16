import styles from '@/styles/nav-bar.module.css';

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
          <div className={styles.title}>
            <a href="">pygame</a>
          </div>
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
          <span className="material-symbols-outlined" onClick={handleButtonClick}>
            menu
          </span>
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
