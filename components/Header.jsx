"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/public/Logo-white.png";
import btnMenu from "@/public/menuButton.png";
import Boutton from "@/components/Boutton";
import Link from "next/link";
import { useState } from "react";

// Composant pour affiche le Header de tout les pages
export default function Header() {
  const [estVisible, setVisible] = useState(false);

  const navBarActive = () => {
    setVisible(!estVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo React" className={styles.Image} />
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
            <Link href="#">À propos</Link>
          </li>
          <li>
            <Link href="/evenements">Evenements</Link>
          </li>
          <li>
            <Link href="/contactez-nous">Contactez Nous</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
        </ul>
        <div className={styles.bouttons}>
          <Boutton texte="S'inscrire" />
          <Boutton texte="Se connecter" active={true} />
        </div>
      </nav>
    </header>
  );
}
