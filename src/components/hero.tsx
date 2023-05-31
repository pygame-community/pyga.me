import styles from '@/styles/hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textcontainer}>
        <p>
          <u>
            <em>The</em>
          </u>{' '}
          Python
        </p>
        <p className={styles.frameworkgradient}>game library</p>
        <p>to build powerful games</p>
        <div className={styles.pipinstallcontainer}>
          <p className={styles.pipinstall}>$ pip install pygame-ce</p>
        </div>
      </div>
      <div className={styles.showcasecontainer}>
        <div className={styles.showcaseimage} />
        <a href="https://dafluffypotato.itch.io/hue-flowing">
          <p>&quot;Hue Flowing&quot; by DaFluffyPotato</p>
        </a>
      </div>
    </div>
  );
}
