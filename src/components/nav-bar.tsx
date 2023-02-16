import React, { useState } from 'react';
import styles from '@/styles/nav-bar.module.css';

export default function Navbar() {
  const [isOpen, setOpen] = useState(true);

  function handleMenuClick() {
    setOpen(!isOpen);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <a href="">pygame</a>
      </div>
      <div className={styles.mobilemenuicon} onClick={handleMenuClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className={isOpen ? styles.routes : styles.mobileroutes}>
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
  );
}
