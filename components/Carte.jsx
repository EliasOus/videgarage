import style from "./Carte.module.css";
import formImage from "@/public/forme-carte.png";
import Image from "next/image";
import Link from "next/link";

// Composant pour affiche une carte événement avec une image, un titre, une description, et un lien.
export default function Carte({ image, titre, description, link }) {
  return (
    <div className={style.carte}>
      <div className={style.containerImage}>
        <Image src={image} alt="carte des evenements" />
        <div className={style.formeImage}>
          <Image src={formImage} alt="forme pour carte" />
        </div>
      </div>
      <h1>{titre}</h1>
      <p>{description}</p>
      <Link href={link}>Voir l'èvénenemnt</Link>
    </div>
  );
}
