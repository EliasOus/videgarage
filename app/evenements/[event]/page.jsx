import Evenement from "@/components/Evenement";
import BannerImage from "@/components/BannerImage";

import configs from "@/next.config.mjs";
import evenement from "@/data/evenements.json";
import { notFound } from "next/navigation";

export default async function Evenet({ params }) {
  const slugs = await params;

  const slug = slugs.event;
  const event = evenement.find((event) => event.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <BannerImage titre={event.titre.replace(/-/g, " ")} />
      <Evenement
        image0={(configs.basePath ? configs.basePath : "") + event.imgBg}
        image1={event.imgSlide1}
        image2={event.imgSlide2}
        image3={event.imgSlide3}
        themeEvenement={event.titre.replace(/-/g, " ")}
        contactEvenement={event.contactEvenement}
        descriptionEvenement={event.descriptionEvenement}
        adresseEvenement={event.adresseEvenement}
        datEvenement={event.datEvenement}
      />
    </>
  );
}
