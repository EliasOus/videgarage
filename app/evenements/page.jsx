// page evenement
import style from "./page.module.css";

import Carte from "@/components/Carte";
import BannerImage from "@/components/BannerImage";
import evenement from "@/data/evenements.json";

export const metadata = {
  title: "Événements | VideGarage",
  description:
    "Découvrez tous les événements de vente au garage à venir et profitez des meilleures offres près de chez vous.",
};

// page pour afficher tout les evenements
export default function Evenements() {
  return (
    <>
      <BannerImage titre={"Evenements"} />
      <div className={style.cartes}>
        {evenement.map((event) => (
          <Carte
            key={event.slug}
            image={event.imgBg}
            titre={event.titre.replace(/-/g, " ")}
            description={event.descriptionEvenement}
            link={`/evenements/${event.slug}`}
          ></Carte>
        ))}
      </div>
    </>
  );
}
