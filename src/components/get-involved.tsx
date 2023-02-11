import styles from "@/styles/get-involved.module.css";

export default function GetInvolved() {
  return (
    <div className={styles.getinvolved}>
        <div className={styles.showcasecontainer}>
        <div className={styles.showcaseimage}/>
        <a href="https://plasmastarfish.itch.io/six-shooter">
            <p>&quot;Six Shooter&quot; by plasmastarfish</p>
        </a>
        </div>
        <div>
            <div className={styles.card}>
                <div className={styles.label}>Get Involved</div>
                Join the global team behind the most popular Python
                game framework. Ranging from documentation revisions
                to introducing new features to the pygame API.
            </div>
        </div>
    </div>
  );
}
