/**
 * Fonction de validation coté client et serveur du formulaire de contact.
 * Vérifie que le nom, l'adresse courriel et le message sont valides.
 * Retourne un booléen d'erreur et un objet avec les erreurs pour chaque champ.
 *
 * @param {FormData} formData
 * @returns
 */
export function validationContactez(formData) {
  const nom = formData.get("nom");
  const courriel = formData.get("courriel");
  const objet = formData.get("objet");
  const message = formData.get("message");

  let newState = {
    nom: { valeur: "", erreur: null },
    courriel: { valeur: "", erreur: null },
    objet: { valeur: "", erreur: null },
    message: { valeur: "", erreur: null },
  };
  let erreur = false;

  if (!nom) {
    erreur = true;
    newState.nom.erreur = "Veuillez entrer votre nom";
  }
  if (!courriel) {
    erreur = true;
    newState.courriel.erreur = "Veuillez entrer une adresse courriel";
  } else if (
    !courriel.match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    )
  ) {
    erreur = true;
    newState.courriel.erreur = "Veuillez entrer une adresse courriel valide";
  }

  if (!message) {
    erreur = true;
    newState.message.erreur = "Veuillez entrer un message ";
  }
  if (message.length < 10 || message.length > 200) {
    erreur = true;
    newState.message.erreur =
      "Veuillez entrer un message entre 10 a 200 caracter ";
  }

  return [erreur, newState];
}
