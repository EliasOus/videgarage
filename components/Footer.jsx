import Image from "next/image";
import logo from "@/public/Logo-black.png";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import wave from "@/public/wave.webp";
import wave800 from "@/public/wave800.webp";
import style from "./Footer.module.css";

// Composant pour affiche le footer de tout les pages
export default function Footer() {
  return (
    <footer>
      <div className={style.wave}>
        <Image src={wave800} alt="image" />
      </div>
      <div className={style.footer}>
        <div className={style.info}>
          <Image src={logo} alt="logo de site web" className={style.Image} />
          <p>
            site web pour organiser, promouvoir et découvrir des ventes de
            garage locales, favorisant la réutilisation et le lien
            communautaire.
          </p>
          <span>801 Aviation Pkwy, Ottawa, ON K1J 1H2</span>
        </div>
        <div className={style.liens}>
          <h1>Liens Pratiques :</h1>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="">Evenements</a>
          <a href="#">FAQ</a>
        </div>
        <div className={style.reseaux}>
          <h1>Réseaux sociaux :</h1>
          <div>
            <a href="#">
              <Image src={facebook} alt="logo facebook" />
            </a>
            <a href="#">
              <Image src={instagram} alt="logo instagram" />
            </a>
            <a href="#">
              <Image src={twitter} alt="logo twitter" />
            </a>
            <a href="#">
              <Image src={whatsapp} alt="logo whatsapp" />
            </a>
          </div>
        </div>
        <div className={style.contact}>
          <span>Nous contacter :</span>
          <span>contact@videgarage.com</span>
        </div>
      </div>
    </footer>
  );
}
