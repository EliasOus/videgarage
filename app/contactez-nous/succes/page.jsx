import SuccesEmail from "@/components/SuccesEmail";
import style from "./page.module.css"
import img from "@/public/img-contactez-nous-2.webp"
import Image from "next/image";

export const metadata = {
  title: "Confirmation | VideGarage",
  description:
    "Page de confirmation : Merci de nous avoir contactés. Nous traiterons votre demande et reviendrons vers vous sous peu.",
};
export default function Succes() {
  return (
    <div className={style.contenaire}>
      <Image src={img} alt="image pour le background" className={style.image} />
      <SuccesEmail />
    </div>
  );
}
