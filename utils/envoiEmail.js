import nodemailer from "nodemailer";

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
