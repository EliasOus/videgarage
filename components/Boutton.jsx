import styles from "./Boutton.module.css";

// Composant fonctionnel Boutton qui rend un bouton stylisé avec un texte et une classe conditionnelle
export default function Boutton({ texte, className, active, type }) {
  return (
    <button
      type={type}
      className={`${styles.boutton} ${className} ${
        active ? styles.active : ""
      }`}
    >
      {texte}
    </button>
  );
}
