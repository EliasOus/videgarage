import styles from "./Boutton.module.css";

// Composant fonctionnel Boutton qui rend un bouton stylisé avec un texte et une classe conditionnelle
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
