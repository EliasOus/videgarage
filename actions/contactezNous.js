"use server";

import { validationContactez } from "@/validation/contactezNous";

export async function contactezServeur(formData) {
  //valide les données coté serveur
  let [erreur, newState] = validationContactez(formData);

  if (erreur) {
    return [erreur, newState];
  }

  const nom = formData.get("nom");
  const courriel = formData.get("courriel");
  const objet = formData.get("objet");
  const message = formData.get("message");
  

  return [erreur, newState];
}
