import nodemailer from "nodemailer";

/**
 * Fonction pour envoyer un email.
 * Utilise nodemailer pour envoyer un message à une adresse spécifiée avec les informations fournies.
 * Le message contient le nom de l'expéditeur, son email, l'objet et le corps du message.
 *
 * @param {string} nom
 * @param {string} email
 * @param {string} objet
 * @param {string} message
 */
export async function envoiEmail(nom, email, objet, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user_Email,
      pass: process.env.pass_Email,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.user_Email,
    to: "ousameurelias@gmail.com",
    subject: `Nouveau message de ${nom}: ${objet}`,
    text: `De: ${nom} (${email})\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
}
