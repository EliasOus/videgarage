"use server";
import { envoiEmail } from "@/utils/envoiEmail";
import { validationContactez } from "@/validation/contactezNous";
import { redirect } from "next/navigation";

/**
 * Fonction pour traiter les données du formulaire de contact côté serveur.
 * Valide les données reçues, puis envoie un email si les informations sont valides.
 * Redirige vers la page de succès après l'envoi de l'email.
 *
 * @param {FormData} formData
 * @returns
 */

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
