import styles from "./Boutton.module.css"

export default function Boutton({ texte , active }) {
    return <input type="button" value={texte} className={`${styles.boutton} ${active ? styles.active : ""}`}>
        </input>
}