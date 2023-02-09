import styles from "@/styles/powered-card.module.css";

export default function PoweredCard(props: any) {
  return (
    <div className={styles.card}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.author}>{props.author}</div>
    </div>
  );
}
