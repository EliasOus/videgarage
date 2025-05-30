import "./globals.css";

import style from "./layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "next-themes";

//import des font dans google font
import { Roboto, Lora } from "next/font/google";

export const metadata = {
  title: "VideGarage",
  description:
    "site web pour organiser, découvrir et partager des ventes de garage.",
};

// ajouter la font roboto pour l'utilisé dans les titres
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-roboto",
});
// ajouter la font lora pour l'utilisé dans les paragraphes
const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-lora",
});

// Ce composant définit la structure principale de la page
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={style.body}>
        <ThemeProvider>
          <Header />
          <main className={style.main}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
