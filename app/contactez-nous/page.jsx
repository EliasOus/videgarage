import FormContactez from "@/components/FormContactez";
import Image from "next/image";
import img from "@/public/img-contactez-nous.webp";
import style from "./page.module.css";

export const metadata = {
  title: "Contactez-Nous | VideGarage",
  description:
    "Vous avez des questions ? Contactez-nous pour plus d'informations sur les événements de vente au garage. Nous sommes là pour vous aider !",
};

export default function ContactezNous() {
  return (
    <div className={style.contenaire}>
      <Image
        src={img}
        alt="image pour le background"
        className={style.image}
        priority
      />
      <div className={style.form}>
        <FormContactez />
      </div>
    </div>
  );
}
