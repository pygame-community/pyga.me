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
        <div className={styles.cards}>
            <div className={styles.cardheader}>Get Involved</div>
            <div className={styles.card}>
                <div className={styles.label}>Game Jams</div>
                The pygame community Discord server hosts yearly game
                jams to give people opportunities to build games in a
                short timeframe and make friends.
            </div>
            <div className={styles.card}>
                <div className={styles.label}>Peer to Peer Help</div>
                Many social media platforms ranging from Discord to
                the subreddit offers help to all pygame users.
            </div>
            <div className={styles.card}>
                <div className={styles.label}>Pygame Development</div>
                Pygame welcomes all contributors to help out on development
                ranging from documentation to core development.
            </div>
        </div>
    </div>
  );
}
