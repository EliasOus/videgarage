// Importation des images
import Image from "next/image";
import banner from "@/public/banner.png";
import arcBanner from "@/public/arc-banner.png";
import carte1 from "@/public/carte1.png";
import carte2 from "@/public/carte2.png";
import carte3 from "@/public/carte3.png";

// Import des styles CSS
import style from "./page.module.css";
import styleBouton from "@/components/Boutton.module.css";

// Importation des composants
import Boutton from "@/components/Boutton";
import Carte from "@/components/Carte";
import Link from "next/link";

export const metadata = {
  title: "Accueil | VideGarage",
  description:
    "Découvrez les meilleurs événements de vente au garage près de chez vous et trouvez des articles uniques à petit prix !",
};

// Ce composant définit la structure de la page d'accueil
export default function Accueil() {
  return (
    <>
      <div className={style.banner}>
        <Image
          src={banner}
          alt="banner pour notre site web"
          className={style.bannerImg}
        />
        <div className={style.hero}>
          <h1>
            Donnez une seconde vie à vos objets, une vente de garage à la fois!
          </h1>
          <p>
            Trouvez des trésors cachés près de chez vous ou organisez votre
            propre événement facilement.
          </p>
          <Link href="/evenements">
            <Boutton
              texte={"Voir les Èvénements "}
              className={styleBouton.Boutton}
              active={true}
            />
          </Link>
        </div>
        <div className={style.arcBanner}>
          <Image src={arcBanner} alt="arc pour le banner" />
        </div>
      </div>

      <div className={style.sectionEvenements}>
        <h1 className={style.titre}>Événements à venir</h1>
        <div className={style.trait}></div>
        <div className={style.sectionCarte}>
          <Carte
            image={carte1}
            titre={"Vente de déménagement"}
            description={
              "Tout doit partir ! Électroménagers, meubles, articles de sport, outils et matériel de jardinage. Des prix imbattables !"
            }
            link={"/evenements/evenement1"}
          ></Carte>
          <Carte
            image={carte2}
            titre={"Vintage & Antiquités"}
            description={
              "Vente de garage dédiée aux amateurs de vintage. Collection de disques vinyles, objets rétro, meubles anciens et accessoires uniques."
            }
            link={"/evenements/evenement2"}
          ></Carte>
          <Carte
            image={carte3}
            titre={"Vente de garage familiale"}
            description={
              "Une grande vente organisée par une famille locale. Articles en vedette : vêtements pour enfants, électroménagers usagés, meubles en bon état."
            }
            link={"/"}
          ></Carte>
        </div>
      </div>
    </>
  );
}
