import carte1 from "@/public/carte1.jpg";
import casseroles from "@/public/casseroles.jpeg";
import parasole from "@/public/parasole.jpeg";
import tableaManger from "@/public/tableaManger.jpg";

import styles from "./page.module.css";
import Evenement from "@/components/Evenement";
import BannerImage from "@/components/BannerImage";

export default function Evenement1() {
  return (
    <>
      <BannerImage titre={"Vente de déménagement"} />
      <div className={styles.sectionEvenement}>
        <Evenement
          image0={carte1}
          image1={casseroles}
          image2={parasole}
          image3={tableaManger}
          themeEvenement={"Vente de déménagement"}
          contactEvenement={"Contact : Mr Eliyas."}
          descriptionEvenement={
            "Tout doit partir ! Électroménagers, meubles, articles de sport, outils et matériel de jardinage. Des prix imbattables !"
          }
          adresseEvenement={
            "Adresse : 23, Caroussel Crescent, Gloucester, Ottawa"
          }
          datEvenement={"Date : 8-Fevrier-2025"}
        />
      </div>
    </>
  );
}
