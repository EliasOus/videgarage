// page evenement
import style from "./page.module.css";

import banner from "@/public/evenements-banner.png";

import carte1 from "@/public/carte1.png";
import carte2 from "@/public/carte2.png";
import carte3 from "@/public/carte3.png";
import carte4 from "@/public/carte4.png";
import carte5 from "@/public/carte5.png";
import carte6 from "@/public/carte6.png";
import carte7 from "@/public/carte7.png";
import carte8 from "@/public/carte8.png";

import Image from "next/image";
import Carte from "@/components/Carte";

export default function Evenements() {
  return (
    <>
      <div className={style.banner}>
        <Image src={banner} alt="banner pour la page des évènements" />
        <h1>Evènements</h1>
      </div>
      <div className={style.cartes}>
        <Carte
          image={carte1}
          titre={"Vente de déménagement"}
          description={
            "Tout doit partir ! Électroménagers, meubles, articles de sport, outils et matériel de jardinage. Des prix imbattables !"
          }
        ></Carte>
        <Carte
          image={carte2}
          titre={"Vintage & Antiquités"}
          description={
            "Vente de garage dédiée aux amateurs de vintage. Collection de disques vinyles, objets rétro, meubles anciens et accessoires uniques."
          }
        ></Carte>
        <Carte
          image={carte3}
          titre={"Vente de garage familiale"}
          description={
            "Une grande vente organisée par une famille locale. Articles en vedette : vêtements pour enfants, électroménagers usagés, meubles en bon état, jouets, livres et décorations de maison."
          }
        ></Carte>
        <Carte
          image={carte4}
          titre={"Vente de déménagement"}
          description={
            "Tout doit partir ! Électroménagers, meubles, articles de sport, outils et matériel de jardinage. Des prix imbattables !"
          }
        ></Carte>
        <Carte
          image={carte5}
          titre={"Vintage & Antiquités"}
          description={
            "Vente de garage dédiée aux amateurs de vintage. Collection de disques vinyles, objets rétro, meubles anciens et accessoires uniques."
          }
        ></Carte>
        <Carte
          image={carte6}
          titre={"Vente de garage familiale"}
          description={
            "Une grande vente organisée par une famille locale. Articles en vedette : vêtements pour enfants, électroménagers usagés, meubles en bon état, jouets, livres et décorations de maison."
          }
        ></Carte>
        <Carte
          image={carte7}
          titre={"Vintage & Antiquités"}
          description={
            "Vente de garage dédiée aux amateurs de vintage. Collection de disques vinyles, objets rétro, meubles anciens et accessoires uniques."
          }
        ></Carte>
        <Carte
          image={carte8}
          titre={"Vente de garage familiale"}
          description={
            "Une grande vente organisée par une famille locale. Articles en vedette : vêtements pour enfants, électroménagers usagés, meubles en bon état, jouets, livres et décorations de maison."
          }
        ></Carte>
      </div>
    </>
  );
}
