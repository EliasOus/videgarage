import styles from "./CarteEvenement.module.css"

export default function CarteEvenement({theme, contact, adresse, dateEvenement}) {
    return (
        <div className={styles.detailEvenement}>
            <div className={styles.theme}> {theme}</div>
            <div className={styles.contact}>{contact}</div>
            <div className={styles.adresse}>{adresse}</div>
            <div className={styles.dateEvenement}>{dateEvenement}</div>
        </div>
    )
}
