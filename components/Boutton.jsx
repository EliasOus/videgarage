import styles from "./Boutton.module.css"

export default function Boutton({ texte }) {
    return <input type="button" value={texte} className={styles.boutton}>
        </input>
}