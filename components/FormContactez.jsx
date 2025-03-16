"use client";
import { contactezServeur } from "@/actions/contactezNous";
import style from "./FromContactez.module.css";
import Button from "@/components/Boutton";
import { validationContactez } from "@/validation/contactezNous";
import { useActionState } from "react";

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
 * @param {object} previeousState
 * @param {FormData} formData
 * @returns
 */
export default function ContactezNous() {
  /**
   *
   * @param {formData} formData
   * @returns
   */
  const contactez = async (previeousState, formData) => {
    let [erreur, newState] = validationContactez(formData);

    if (!erreur) {
      [erreur, newState] = await contactezServeur(formData);
    }

    if (erreur) {
      newState.nom.valeur = formData.get("nom");
      newState.courriel.valeur = formData.get("courriel");
      newState.objet.valeur = formData.get("objet");
      newState.message.valeur = formData.get("message");
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
