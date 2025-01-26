

import Image from "next/image";
import casseroles from "@/public/casseroles.jpeg"
import parasole from "@/public/parasole.jpeg"
import ustansiles from "@/public/ustansiles.jpeg"
import tableaManger from "@/public/tableaManger.jpg"

import styles from "./page.module.css"
import Vignette from "@/components/Vignette";
import BouttonFlech from "@/components/BouttonFlech";
import CarteEvenement from "@/components/CarteEvenement";


export default function Evenement1() {

    const images = [casseroles, parasole, ustansiles, tableaManger];
    const titre = ["Casseroles", "Parasole", "Ustansiles", "Table a manger"]

    return (
        <>
            <section className={styles.evenement1}>

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
            </section>
        </>
    )
}