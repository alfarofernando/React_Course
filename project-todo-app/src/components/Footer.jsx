import styles from "./Footer.module.css";

export default function Footer({ completedTasks, uncompletedTasks }) {
  return (
    <div className={styles.footer}>
      <span className={styles.span}>Completed Tasks: {completedTasks}</span>
      <span className={styles.span}>Uncompleted Tasks: {uncompletedTasks}</span>
    </div>
  );
}
