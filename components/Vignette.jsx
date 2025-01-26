import Image from "next/image";
import styles from "./Vignette.module.css"

export default function Vignette({ source, altDescription, titre }) {
    return (
        <div className={styles.vignette}>
            <Image src={source} alt={altDescription} className={styles.image}/>
            {/* <div className={styles.titreVignette}>{titre}</div> */}
        </div>
    );
}