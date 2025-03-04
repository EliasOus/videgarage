import { envoiEmail } from "@/utils/envoiEmail";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fonction POST pour traiter l'envoi de l'email
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
  try {
    // Parse la requête JSON
    const { nom, email, objet, message } = await request.json();

    // Appel de la fonction pour envoyer l'email
    await envoiEmail(nom, email, objet, message);
    return NextResponse.json({
      status: 200,
      message: "Email envoyé avec succès !",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Erreur d'envoi",
      error: error.message,
    });
  }
}
