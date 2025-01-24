import style from "./Carte.module.css";
import styleBouton from "./Boutton.module.css";

import formImage from "@/public/forme-carte.png";

import Image from "next/image";
import Boutton from "@/components/Boutton";

export default function Carte({ image, titre, description }) {
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
      <Boutton
        texte={"Voir l'èvénenemnt"}
        className={`${style.carteBoutton} ${styleBouton.Boutton}`}
        active={true}
      />
    </div>
  );
}
