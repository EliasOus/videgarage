import "./globals.css";

import style from "./layout.module.css";

export const metadata = {
  title: "VideGarage",
  description: "site web pour organiser, découvrir et partager des ventes de garage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={style.body}>{children}</body>
    </html>
  );
}
