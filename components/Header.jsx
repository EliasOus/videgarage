import styles from "./Header.module.css";
import stylesBtn from "./Boutton.module.css";

import Image from "next/image";
import logo from "@/public/Logo-white.png";

import Boutton from "@/components/Boutton";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo React" className={styles.Image} />
      </div>
      <nav>
        <ul className={styles.liste}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="#">À propos</Link>
          </li>
          <li>
            <Link href="/evenements">Evenements</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
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
