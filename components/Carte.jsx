import style from "./Carte.module.css";
import formImage from "@/public/forme-carte.png";
import Image from "next/image";
import Link from "next/link";

// Composant pour affiche une carte événement avec une image, un titre, une description, et un lien.
export default function Carte({ image, titre, description, link }) {
  return (
    <div className={style.carte}>
      <div className={style.containerImage}>
        <Image
          src={image}
          alt="carte des evenements"
          width={600}
          height={600}
        />
        <div className={style.formeImage}>
          {/* <Image src={formImage} alt="forme pour carte" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <h1>{titre}</h1>
      <p>{description}</p>
      <Link href={link}>Voir l'èvénenemnt</Link>
    </div>
  );
}
