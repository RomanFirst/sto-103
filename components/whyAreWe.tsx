import useTranslation from "next-translate/useTranslation";
import { Carlito } from "next/font/google";
import Image from "next/image";
const carlito = Carlito({ subsets: ["cyrillic"], weight: "400" });

export default function WhyAreWe() {
  const { t, lang } = useTranslation("");
  return (
    <div id="areWe" className=" container why__we">
      <h2>{t("home:whyus")}</h2>
      <div className={`${carlito.className} all__icon`}>
        <div className="experienced__specialists">
          <Image
            src={"/img/icon/1.png"}
            width={95}
            height={100}
            alt="Experienced specialists"
          />
          <h3>{t("home:experiencedspecialists")}</h3>
        </div>
        <div className="saving__time">
          <Image
            src={"/img/icon/2.png"}
            width={95}
            height={100}
            alt="we save your time"
          />
          <h3>{t("home:wesaveyourtime")}</h3>
        </div>
        <div className="open__week">
          <Image
            src={"/img/icon/3.png"}
            width={95}
            height={100}
            alt="Open for you 7 days a week"
          />
          <h3>{t("home:openforyou")}</h3>
        </div>
        <div className="all__brands">
          <Image
            src={"/img/icon/4.png"}
            width={95}
            height={100}
            alt="Service for cars of all brands"
          />
          <h3>{t("home:serviceforcarsofallbrands")}</h3>
        </div>
      </div>
    </div>
  );
}
