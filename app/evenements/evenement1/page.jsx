"use client"
import { useState, useEffect } from "react";

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
    // Boutton Next et Previous 
    const images = [casseroles, parasole, ustansiles, tableaManger];
    const titre = ["Casseroles", "Parasole", "Ustansiles", "Table a manger"]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState("");

    const nextSlide = () => {
        setAnimation(styles.apres);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setAnimation("");
        }, 500);
    };

    const prevSlide = () => {
        setAnimation(styles.avant);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setAnimation("");
        }, 500);
    };

    return (
        <>
            <section className={styles.evenement1}>

                <div className={`${styles.caroussel} ${animation}`}>
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
                            signe="<"
                            onClick={()=>prevSlide()} />
                        <BouttonFlech
                            idBoutton="apres" signe=">"
                            onClick={nextSlide} />
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