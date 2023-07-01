"use client";

import useTranslation from "next-translate/useTranslation";
import { Carlito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import useCountSkroll from "../hooks/useActualScroll";
import ButtonCall from "./buttonCall";
import MobileMenu from "./mobileMenu";

const carlito = Carlito({ subsets: ["cyrillic"], weight: "400" });

export default function Header({ openModal }: { openModal: () => void }) {
  const { t, lang } = useTranslation("");
  console.log("lang", lang);

  const { scrollActualCount } = useCountSkroll();
  const isFullHDScreen = useMediaQuery({ query: "(max-width: 1920px)" });

  const styleEkg = isFullHDScreen
    ? {
        height: "237px",
        minHeight: "237px",
        backgroundImage: "url(/img/ekgFullHd.svg)",
      }
    : {
        height: "316px",
        minHeight: "316px",
        backgroundImage: "url(/img/ekgQHd.webp)",
      };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 50;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header`}>
      <div className="container header__container">
        <div className="header__logo">
          <Link href="" className="logo">
            <Image src={"/img/logo.png"} width={130} height={94} alt="logo" />
          </Link>
          <h4 className={`${carlito.className} header__address .header__hours`}>
            <span>{t("home:addres")}</span>
            <span>{t("home:street")}</span>
            <span className="header__hours">
              09:00-19:00 {t("home:withoutGoingOut")}
            </span>
          </h4>
        </div>
        <div className="title">
          <h1>{t("home:autoserviceGarage")}</h1>
          <h2 className={carlito.className}>{t("home:ambulance")}</h2>
        </div>
      </div>

      <div className="ekg" style={{ ...styleEkg }}>
        <div
          className={`${carlito.className} header__button`}
          style={{ top: isFullHDScreen ? "120px" : "174px" }}
        >
          <ButtonCall openModal={openModal} />
        </div>
      </div>
      <div className="ekg__button">
        <ButtonCall openModal={openModal} />
      </div>
      <MobileMenu
        scrollActualCount={scrollActualCount}
        scrollToElement={scrollToElement}
      />
    </header>
  );
}
