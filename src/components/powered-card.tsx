import styles from '@/styles/powered-card.module.css';
import Image from 'next/image';

export default function PoweredCard(props: any) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${props.image})` }}>
      <a href={props.link}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.author}>{props.author}</div>
      </a>
    </div>
  );
}
