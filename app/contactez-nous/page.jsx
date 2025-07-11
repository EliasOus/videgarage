import FormContactez from "@/components/FormContactez";
import Image from "next/image";
import img from "@/public/img-contactez-nous-2.webp";
import style from "./page.module.css";

export const metadata = {
  title: "Contactez-Nous | VideGarage",
  description:
    "Vous avez des questions ? Contactez-nous pour plus d'informations sur les événements de vente au garage. Nous sommes là pour vous aider !",
};

/**
 * Cette page permet à l'utilisateur de soumettre un message de contact via un formulaire.
 * Lorsque l'utilisateur soumet le formulaire, son message est envoyé pour traitement.
 *
 * @returns
 */
export default function ContactezNous() {
  return (
    <div className={style.contenaire}>
      <Image src={img} alt="image pour le background" className={style.image} />
      <div className={style.form}>
        <FormContactez />
      </div>
    </div>
  );
}
