"use server";
import { validationContactez } from "@/validation/contactezNous";

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

  const response = await fetch("http://localhost:3000/api/contacteznous", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return [erreur, newState];
}
