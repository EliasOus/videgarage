import styles from "./Evenement.module.css";
import Image from "next/image";
import Vignette from "./Vignette";
import CarteEvenement from "./CarteEvenement";

// Composant pour affiche les détails d'un événement avec une galerie d'images et des informations complémentaires.
export default function Evenement({
  image0,
  image1,
  image2,
  image3,
  themeEvenement,
  contactEvenement,
  adresseEvenement,
  descriptionEvenement,
  datEvenement,
}) {
  const images = [image0, image1, image2, image3];
  return (
    <>
      <section className={styles.evenement}>
        <div className={styles.caroussel}>
          <div className={styles.item}>
            <Image
              src={image0}
              alt={`Image1`}
              className={styles.cssImage}
              priority
            />
          </div>
          <div className={styles.vignettes}>
            {images.map((img, index) => (
              <div key={index} className={styles.itemVignettes}>
                <Vignette
                  source={img}
                  altDescription={`Vignette ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <CarteEvenement
          theme={themeEvenement}
          contact={contactEvenement}
          adresse={adresseEvenement}
          description={descriptionEvenement}
          dateEvenement={datEvenement}
        />
      </section>
    </>
  );
}
