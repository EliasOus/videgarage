import "./globals.css";

import style from "./layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VideGarage",
  description:
    "site web pour organiser, découvrir et partager des ventes de garage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={style.body}>
        <Header />
        <main className={style.main}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
