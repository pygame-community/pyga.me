import styles from '@/styles/get-involved.module.css';
import Button from '@/components/button';

export default function GetInvolved() {
  return (
    <div className={styles.getinvolved}>
      <div className={styles.card}>
        <div className={styles.label}>Get Involved</div>
        Join the global team behind the most popular Python game library. Ranging from documentation revisions to
        introducing new features to the pygame API.
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <Button text="GitHub" fontSize="1.2rem" link="https://github.com/pygame-community" />
          <Button text="Discord" fontSize="1.2rem" link="https://discord.gg/pygame" />
        </div>
      </div>
    </div>
  );
}
