import styles from "./OuterContainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={styles.OuterContainer}>{children}</div>;
}
