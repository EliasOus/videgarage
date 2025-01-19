import Image from "next/image";

import logo from "@/public/Logo-black-2.png";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import wave from "@/public/wave.png";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.wave}>
        <Image src={wave} alt="image" />
      </div>
      <div className={style.footer}>
        <div className={style.info}>
          <Image src={logo} alt="logo de site web" className={style.Image} />
          <p>
            Un site web pour organiser, promouvoir et découvrir des ventes de
            garage locales, favorisant la réutilisation et le lien
            communautaire.
          </p>
          <h4>801 Aviation Pkwy, Ottawa, ON K1J 1H2</h4>
        </div>
        <div className={style.liens}>
          <h3>Liens Pratiques :</h3>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Evenements</a>
          <a href="#">FAQ</a>
        </div>
        <div className={style.reseaux}>
          <h3>Réseaux sociaux :</h3>
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
          <h3>Nous contacter :</h3>
          <h3>contact@videgarage.com</h3>
        </div>
      </div>
    </>
  );
}
