import styles from "./Boutton.module.css";

export default function Boutton({ texte, className, active }) {
  return (
    <input
      type="button"
      value={texte}
      className={`${styles.boutton} ${className} ${
        active ? styles.active : ""
      }`}
    ></input>
  );
}
