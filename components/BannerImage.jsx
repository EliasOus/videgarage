import Image from "next/image";
import banner from "@/public/evenements-banner.webp";
import style from "./BannerImage.module.css";

// Composant fonctionnel BannerImage qui affiche une bannière avec un titre
export default function BannerImage({ titre }) {
  return (
    <div className={style.banner}>
      <Image src={banner} alt="banner pour la page des évènements" />
      <h1>{titre}</h1>
    </div>
  );
}
