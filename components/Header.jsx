import styles from "./Header.module.css";
import stylesBtn from "./Boutton.module.css";

import Image from "next/image";
import logo from "@/public/Logo-white.png";

import Boutton from "@/components/Boutton";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo React" className={styles.Image} />
      </div>
      <nav>
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
        <Boutton texte="S'inscrire" />
        <Boutton texte="Se connecter" active={true} />
      </div>
    </header>
  );
}
