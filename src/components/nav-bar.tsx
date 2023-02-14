import styles from '@/styles/nav-bar.module.css';

export default function Navbar() {
    return (
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
    );
}
