import style from "./page.module.css";

import FormContactez from "@/components/FormContactez";

export const metadata = {
  title: "Contactez-Nous | VideGarage",
  description: "Vous avez des questions ? Contactez-nous pour plus d'informations sur les événements de vente au garage. Nous sommes là pour vous aider !",
};

export default function ContactezNous() {
  return <FormContactez />;
}
