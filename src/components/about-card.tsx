import styles from "@/styles/about-card.module.css";

export default function AboutCard(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.desc}>{props.desc}</div>
    </div>
  );
}
