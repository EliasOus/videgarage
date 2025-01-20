import styles from "./Header.module.css";

import Image from "next/image";
import logo from "@/public/Logo-black-2.png";

import Boutton from "@/components/Boutton";


export default function Header() {
    return <header className={styles.header}>
        <div>
            <Image src={logo} alt="Logo React" className={styles.Image} />
        </div>

        <nav >
            <ul className={styles.liste}>
                <li>
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <a href="#">À propos</a>
                </li>
                <li>
                    <a href="#">Evenements</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </nav>
        <div className={styles.bouttons}>
            <Boutton texte="S'inscrire" className={styles.boutton}/>     
        </div>
        <div className={styles.bouttons}>
            <Boutton texte="Se connecter"/>
        </div>
    </header>
}
