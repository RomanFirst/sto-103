import useTranslation from "next-translate/useTranslation";
import { Carlito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ButtonCall from "./buttonCall";
const carlito = Carlito({ subsets: ["cyrillic"], weight: "400" });

export default function OurServices({ openModal }: { openModal: () => void }) {
  const { t, lang } = useTranslation("");
  const date = [
    {
      imageUrl: "/img/running.webp",
      text: t("home:runninggearrepair"),
    },
    {
      imageUrl: "/img/replacement.webp",
      text: t("home:replace"),
    },
    {
      imageUrl: "/img/icerepeir.webp",
      text: t("home:repairICE"),
    },
    {
      imageUrl: "/img/changeoil.webp",
      text: t("home:changeOfOil"),
    },
    {
      imageUrl: "/img/wheel.webp",
      text: t("home:wheelalignment3D"),
    },
  ];

  const itemsServices = date.map(({ imageUrl, text }, index) => (
    <div key={index} className={`${carlito.className} chassis__repair`}>
      <Image src={imageUrl} width={560} height={310} alt={text} />
      <h3>{text}</h3>
    </div>
  ));

  return (
    <section id="our" className="container">
      <div className="container our__services">
        <h2>{t("home:ourservices")}</h2>
        <Link className={carlito.className} href="">
          {t("home:downloadprice")}
        </Link>
      </div>
      <div className="all__img">{itemsServices}</div>
      <div className="call">
        <h3 className="call__text">
          <span>{t("home:call")}</span>
          <span>{t("home:calltext")}</span>
        </h3>
        <div className="call__button">
          <ButtonCall
            className="call__buttons"
            openModal={openModal}
            isTransparent={true}
          />
        </div>
      </div>
    </section>
  );
}
