import Evenement from "@/components/Evenement";
import BannerImage from "@/components/BannerImage";

import carte2 from "@/public/carte2.webp";
import books from "@/public/books.jpg";
import meubles from "@/public/meubles.jpg";
import appareillePhoto from "@/public/appareillePhoto.jpg";

export const metadata = {
  title: "Événement | VideGarage",
  description:
    "Consultez les détails de notre événement de vente au garage, y compris les articles disponibles, la date, l'heure et l'emplacement.",
};

// page pour deuxième evenement
export default function Evenement2() {
  return (
    <>
      <BannerImage titre={"Vintage & Antiquités"} />
      <div>
        <Evenement
          image0={carte2}
          image1={meubles}
          image2={appareillePhoto}
          image3={books}
          themeEvenement={"Vintage & Antiquités"}
          contactEvenement={"Contact : Mr Anisse."}
          descriptionEvenement={
            "Vente de garage dédiée aux amateurs de vintage. Collection de disques vinyles, objets rétro, meubles anciens et accessoires uniques."
          }
          adresseEvenement={"Adresse : 1720, Blvd Napoleon, Nepean, Ottawa"}
          datEvenement={"Date : 20-Fevrier-2025"}
        />
      </div>
    </>
  );
}
