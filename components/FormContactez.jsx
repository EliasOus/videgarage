"use client";
import style from "./FromContactez.module.css";
import Button from "@/components/Boutton";
import { useActionState} from "react";

export default function ContactezNous() {
  /**
   * Fonction de validation du formulaire de contact.
   * Vérifie si tous les champs du formulaire (nom, courriel, téléphone, message, etc.)
   * sont remplis correctement et renvoie l'état mis à jour avec les erreurs correspondantes.
   *
   * - Si un champ est vide ou mal renseigné, un message d'erreur est ajouté.
   * - Si tous les champs sont valides, l'état mis à jour sera renvoyé avec les valeurs saisies.
   *
   * Cette fonction prend en entrée l'état précédent du formulaire et les données soumises via `formData`.
   * Elle met à jour l'état avec les erreurs ou les valeurs des champs.
   *
   * @param {object} previeousState - L'état précédent du formulaire.
   * @param {FormData} formData - Les données soumises via le formulaire.
   * @returns {object} - Un objet représentant l'état mis à jour du formulaire avec les erreurs.
   */

  const contactez = (previeousState, formData) => {
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

    if (erreur) {
      newState.nom.valeur = nom;
      newState.courriel.valeur = courriel;
      newState.objet.valeur = objet;
      newState.message.valeur = message;
    }
    return newState;
  };

  const [formState, formAction] = useActionState(contactez, {
    nom: { valeur: "", erreur: null },
    courriel: { valeur: "", erreur: null },
    objet: { valeur: "", erreur: null },
    message: { valeur: "", erreur: null },
  });

  return (
    <div className={style.contenaire}>
      <div className={style.contactezNous}>
        <h2>Contactez-Nous</h2>
        <span></span>
        <form action={formAction} className={style.form} noValidate>
          <div className={style.nom}>
            <label>
              <h2>
                Nom <span>*</span>
              </h2>
              <input
                type="text"
                name="nom"
                defaultValue={formState.nom.valeur}
                required
              />
              <div className={style.erreur}>{formState.nom.erreur}</div>
            </label>
          </div>
          <div className={style.email}>
            <label>
              <h2>
                Email <span>*</span>
              </h2>
              <input
                type="email"
                name="courriel"
                defaultValue={formState.courriel.valeur}
                required
              />
              <div className={style.erreur}>{formState.courriel.erreur}</div>
            </label>
          </div>
          <div className={style.objet}>
            <label>
              <h2>Objet</h2>
              <input
                type="text"
                name="objet"
                defaultValue={formState.objet.valeur}
              />
            </label>
          </div>
          <div className={style.message}>
            <label>
              <h2>
                Votre Message <span>*</span>
              </h2>
              <textarea
                name="message"
                minLength={10}
                maxLength={200}
                defaultValue={formState.message.valeur}
                required
              />
              <div className={style.erreur}>{formState.message.erreur}</div>
            </label>
          </div>
          <Button
            texte={"Envoyer"}
            active={true}
            className={style.buttonEnvoyer}
            type={"submit"}
          />
        </form>
      </div>
    </div>
  );
}
