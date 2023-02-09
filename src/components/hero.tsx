import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textcontainer}>
            <p><u><em>The</em></u> Python</p>
            <p className={styles.frameworkgradient}>game framework</p>
            <p>since 2001</p>
        <code className={styles.pipinstall}>pip install pygame-ce</code>
      </div>
      <div className={styles.showcasecontainer}/>
    </div>
  );
}
