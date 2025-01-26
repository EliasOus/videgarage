import styles from "./Evenement.module.css"

import Image from "next/image";
import Vignette from "./Vignette";
import BouttonFlech from "./BouttonFlech";
import CarteEvenement from "./CarteEvenement";


export default function Evenement({ image1, image2, image3, image4, titreImage1, titreImage2, titreImage3, titreImage4, themeEvenement, contactEvenement, adresseEvenement,descriptionEvenement, datEvenement}) {
    const images = [image1, image2, image3, image4];
    const titre = [titreImage1, titreImage2, titreImage3, titreImage4]
    return (
        <>
            <section className={styles.evenement}>

                <div className={styles.caroussel}>
                    <div className={styles.list}>
                        {images.map((img, index) => (
                            <div key={index} className={styles.item}>
                                <Image src={img} alt={`Image ${index + 1}`} className={styles.cssImage} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.vignettes}>
                        {images.map((img, index) => (
                            <div key={index} className={styles.itemVignettes}>
                                <Vignette source={img} altDescription={`Vignette ${index + 1}`} titre={`${titre[index]}`} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.fleches}>
                        <BouttonFlech
                            idBoutton="avant"
                            signe="<" />
                        <BouttonFlech
                            idBoutton="apres" signe=">" />
                    </div>

                </div>
                <CarteEvenement
                    theme={themeEvenement}
                    contact={contactEvenement}
                    adresse={adresseEvenement}
                    description = {descriptionEvenement}
                    dateEvenement={datEvenement} />
            </section>
        </>
    )
}

