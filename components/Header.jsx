"use client";

import aproposStyle from "@/app/a-propos/page.module.css"
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/public/Logo-white.webp";
import btnMenu from "@/public/menuButton.png";
import Boutton from "@/components/Boutton";
import Link from "next/link";
import { useState } from "react";
import ThemeChanger from "@/components/themeChanger"

// Composant pour affiche le Header de tout les pages
export default function Header() {
  const [estVisible, setVisible] = useState(false);

  const navBarActive = () => {
    setVisible(!estVisible);
  };

  return (
    <header className={`${styles.header} ${aproposStyle.header}`}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo React" className={styles.Image} priority/>
      </div>
      <div onClick={navBarActive}>
        <Image
          src={btnMenu}
          alt="logo pour le menu pour petit ecran"
          className={styles.btnMenu}
        />
      </div>
      <nav className={`${styles.nav} ${estVisible && styles.navActive}`}>
        <ul className={styles.liste}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/a-propos">À propos</Link>
          </li>
          <li>
            <Link href="/evenements">Evenements</Link>
          </li>
          <li>
            <Link href="/contactez-nous">Contactez Nous</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={styles.bouttons}>
          <ThemeChanger />
          <Boutton texte="S'inscrire" />
          <Boutton texte="Se connecter" active={true} />
        </div>
      </nav>
    </header>
  );
}
