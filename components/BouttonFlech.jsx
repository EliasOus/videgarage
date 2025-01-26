import styles from "./BouttonFlech.module.css"

export default function BouttonFlech({ idBoutton, signe }) {
    return (
        <div className={styles.bouttonFlech}>
            <input id={idBoutton} type="button" value={signe} className={styles.bouton}></input>
        </div>
    );
}