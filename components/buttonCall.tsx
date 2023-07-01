import useTranslation from "next-translate/useTranslation";
import { Russo_One } from "next/font/google";
const russoOne = Russo_One({ subsets: ["cyrillic"], weight: "400" });
interface ButtonCallProps {
  openModal: () => void;
  isTransparent?: boolean;
  className?: string;
}
const ButtonCall = ({
  openModal,
  isTransparent,
  className,
}: ButtonCallProps) => {
  const { t, lang } = useTranslation("");
  return (
    <button
      onClick={openModal}
      className={`button__call ${russoOne.className}`}
      style={{ backgroundColor: isTransparent ? "transparent" : "#131019" }}
    >
      {t("home:requestacall")}
    </button>
  );
};

export default ButtonCall;
