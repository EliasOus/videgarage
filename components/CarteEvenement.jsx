import styles from "./CarteEvenement.module.css";

export default function CarteEvenement({
  theme,
  contact,
  adresse,
  description,
  dateEvenement,
}) {
  return (
    <div className={styles.detailEvenement}>
      <div className={styles.theme}> {theme}</div>
      <div className={styles.contact}>{contact}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.adresse}>{adresse}</div>
      <div className={styles.dateEvenement}>{dateEvenement}</div>
      <div className={styles.plusPhotos}>
        <a href="#">Plus de photos &rarr;</a>
      </div>
    </div>
  );
}
