import styles from "./Motto.module.css";
export default function Motto() {
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>
        The solar system: the new home.
      </span>
      <span className={styles["motto__emojis"]}>🌎🚀🧑‍🚀🪐</span>
    </div>
  );
}
