import style from "./page.module.css";

import BannerImage from "@/components/BannerImage";
import Faq from "@/components/Faq";

export default function PageFaq() {
  return (
    <>
      <BannerImage titre={"FAQ"} />
      <Faq />
    </>
  );
}
