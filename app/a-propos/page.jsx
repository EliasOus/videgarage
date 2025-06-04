import style from "./page.module.css";

import BannerImage from "@/components/BannerImage";

export default function Apropos() {
  return (
    <>
      <BannerImage titre={"A-Propos"} />
      <div className={style.container}>
        <h1>
          À propos de <span className={style.brand}>videGarage</span>
        </h1>

        <p>
          Bienvenue sur <strong>videGarage</strong>, la plateforme en ligne
          dédiée aux passionnés de bonnes affaires et d’objets de seconde main !
        </p>

        <p>
          Notre mission ? <strong>Donner une seconde vie aux objets</strong>{" "}
          tout en facilitant les ventes entre particuliers. Que vous souhaitiez
          vider votre garage, votre grenier ou simplement faire de la place chez
          vous, videGarage est l’endroit idéal pour vendre ce que vous
          n’utilisez plus… et pourquoi pas, trouver des trésors cachés chez les
          autres !
        </p>

        <h2>Ce que nous offrons :</h2>
        <ul>
          <li>
            Un espace simple et intuitif pour{" "}
            <strong>mettre en vente vos objets</strong>.
          </li>
          <li>
            Une <strong>communauté locale</strong> de vendeurs et d’acheteurs.
          </li>
          <li>Une alternative écoresponsable pour consommer autrement.</li>
        </ul>

        <h2>Pourquoi nous faire confiance ?</h2>
        <p>
          <strong>videGarage</strong> a été créé avec une idée simple : rendre
          le <em>vide-grenier accessible depuis chez soi</em>, en toute
          simplicité et sécurité. Nous croyons que chaque objet mérite une
          seconde chance, et qu’il est possible de faire de bonnes affaires tout
          en réduisant le gaspillage.
        </p>

        <div className={style.slogan}>
          <p>
            <strong>Faites le tri. Mettez en ligne. Vendez.</strong>
          </p>
          <p>
            Bienvenue dans le monde du vide-grenier digital avec{" "}
            <strong>videGarage</strong> !
          </p>
        </div>
      </div>
    </>
  );
}
