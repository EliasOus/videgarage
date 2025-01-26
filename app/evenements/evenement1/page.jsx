

import casseroles from "@/public/casseroles.jpeg"
import parasole from "@/public/parasole.jpeg"
import ustansiles from "@/public/ustansiles.jpeg"
import tableaManger from "@/public/tableaManger.jpg"

import styles from "./page.module.css"
import Evenement from "@/components/Evenement";
import BannerImage from "@/components/BannerImage"

export default function Evenement1() {

    return (
        <>
            <BannerImage titre={"Demenagement Urgent"} />
            <div className={styles.maDiv}>
                <Evenement
                    image1={casseroles}
                    image2={parasole}
                    image3={ustansiles}
                    image4={tableaManger}
                    titreImage1={"Ensemble de casseroles"}
                    titreImage2={"Une parasole"}
                    titreImage3={"Ensemble d'ustanciles"}
                    titreImage4={"Table a manger"}
                    themeEvenement={"Demenagement"}
                    contactEvenement={"Contact : Mr Eliyas."}
                    descriptionEvenement={"Bonjour Je met en vente tout cela . Venez decouvrir tous les articles pour faire un bon deal."}
                    adresseEvenement={"Adresse : 23, Caroussel Crescent, Gloucester, Ottawa"}
                    datEvenement={"Date : 8-Fevrier-2025"} />
            </div>
            {/* <section className={styles.evenement1}>

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
                            signe="<"/>
                        <BouttonFlech
                            idBoutton="apres" signe=">"/>
                    </div>

                </div>
                <CarteEvenement 
                theme={"demenagement"} 
                contact={"Contact : Mr Eliyas."}
                adresse={"Adresse : 23, Caroussel Crescent, Gloucester, Ottawa"}
                dateEvenement={"Date : 8-Fevrier-2025"}/>
            </section> */}
        </>
    )
}