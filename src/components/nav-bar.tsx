import styles from '@/styles/nav-bar.module.css';

import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavExternal, setShowNavExternal] = useState(false);

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
        <MDBNavbar>
          <MDBContainer fluid>
            <div className={styles.title}>pygame</div>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavExternal(!showNavExternal)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showNavExternal}>
          <div className="bg-light shadow-3 p-4">
            <a href="docs">
              <MDBBtn block className="border-bottom m-0" color="link">
                Documentation
              </MDBBtn>
            </a>
            <a href="tutorials">
              <MDBBtn block className="border-bottom m-0" color="link">
                Tutorials
              </MDBBtn>
            </a>
            <a href="https://github.com/pygame-community/pygame-ce">
              <MDBBtn block className="border-bottom m-0" color="link">
                Contribute
              </MDBBtn>
            </a>
          </div>
        </MDBCollapse>
      </div>
    </>
  );
}
