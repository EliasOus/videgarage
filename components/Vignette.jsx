'use client'
import Image from "next/image";
import styles from "./Vignette.module.css";

// Composant pour représente une image miniature utilisée dans le carrousel.
export default function Vignette({ source, altDescription, titre }) {
  return (
    <div className={styles.vignette}>
      <Image src={source} alt={altDescription} className={styles.image} />
    </div>
  );
}
