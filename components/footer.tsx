import useTranslation from "next-translate/useTranslation";
import { Carlito } from "next/font/google";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
const carlito = Carlito({ subsets: ["cyrillic"], weight: "400" });

export default function Footer() {
  const phoneNumber = "+375336885005";
  const actualYear = new Date().getUTCFullYear();
  const { t, lang } = useTranslation("");
  return (
    <footer id="contacts" className={`contacts`}>
      <div className="container">
        <div className="contact__title">
          <h2>{t("home:contacts")}</h2>
        </div>
        <div className="contacts__bar">
          <div className="contacts__map">
            <div
              className="map"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <Link
                href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Яндекс Карты
              </Link>
              <Link
                href="https://yandex.by/maps/29631/gomel-district/house/Z0kYfwBkTUIAQFtofX90dHtrYA==/?ll=30.974477%2C52.355784&utm_medium=mapframe&utm_source=maps&z=17.18"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Октябрьская улица, 16B — Яндекс Карты
              </Link>
              <iframe
                src="https://yandex.by/map-widget/v1/?ll=30.974477%2C52.355784&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NzUyOTgzMDU3Ep4B0JHQtdC70LDRgNGD0YHRjCwg0JPQvtC80LXQu9GM0YHQutGWINGA0LDRkdC9LCDQp9C-0L3QutCw0Z7RgdC60ZYg0YHQtdC70YzRgdCw0LLQtdGCLCDQv9Cw0YHRkdC70LDQuiDQp9C-0L3QutGWLCDQmtCw0YHRgtGA0YvRh9C90ZbRhtC60LDRjyDQstGD0LvRltGG0LAsIDE20JIiCg26y_dBFVNsUUI%2C&z=17.18"
                width="100%"
                height="100%"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>
            <div className={`${carlito.className} contacts__icon`}>
              <div className="icon">
                <Link href="mailto:gar0668800@gmail.com">
                  <AiOutlineMail size={50} color={"red"} />
                </Link>
                <span>Email</span>
              </div>
              <div className="icon">
                <Link href="https://www.instagram.com/garage103gomel/">
                  <AiOutlineInstagram size={50} color={"red"} />
                </Link>
                <span>Instagram</span>
              </div>
              <div className="icon">
                <Link href="https://yandex.by/maps/29631/gomel-district/house/Z0kYfwBkTUIAQFtofX90dHtrYA==/?from=mapframe&ll=30.974477%2C52.355961&source=mapframe&utm_source=mapframe&z=17">
                  <BiMap size={50} color={"red"} />
                </Link>
                <span>{t("home:navigation")}</span>
              </div>
              <div className="icon">
                <a href={`tel:${phoneNumber}`}>
                  <AiOutlinePhone size={50} color={"red"} />
                </a>
                <span>{t("home:callbutton")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line__footer" />
      <div className="main-copyright">
        <div className="container">
          <div className={`${carlito.className} designer__developer`}>
            <div className="copyright">
              © {actualYear}, Garage-103. {t("home:copyright")}
            </div>
            <div className="contacts__designer inline ">
              <span className="designer__label">Design by</span>
              <a href="https://instagram.com/bellamy1006" target="_blank">
                Bellamy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
