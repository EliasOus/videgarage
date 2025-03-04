"use server";
import { envoiEmail } from "@/utils/envoiEmail";
import { validationContactez } from "@/validation/contactezNous";
import { redirect } from "next/navigation";

export async function contactezServeur(formData) {
  //valide les données coté serveur
  let [erreur, newState] = validationContactez(formData);

  if (erreur) {
    return [erreur, newState];
  }

  const data = {
    nom: formData.get("nom"),
    email: formData.get("courriel"),
    objet: formData.get("objet"),
    message: formData.get("message"),
  };

  await envoiEmail(data.nom, data.email, data.objet, data.message);

  redirect("/contactez-nous/succes");
}
