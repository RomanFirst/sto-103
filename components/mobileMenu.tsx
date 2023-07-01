import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";

interface MobileMenuProps {
  scrollToElement: (id: string) => void;
  scrollActualCount: number;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  scrollToElement,
  scrollActualCount,
}) => {
  const [isMobileNavToggleChecked, setIsMobileNavToggleChecked] =
    useState<boolean>(false);

  const { t, lang } = useTranslation("");

  useEffect(() => {
    document.body.style.overflow = isMobileNavToggleChecked ? "hidden" : "auto";
  }, [isMobileNavToggleChecked]);

  const handleMobileNavToggleChange = () => {
    setIsMobileNavToggleChecked(!isMobileNavToggleChecked);
  };

  const handelScroll = (id: string) => {
    setIsMobileNavToggleChecked(false);
    scrollToElement(id);
  };

  const navbar = [
    { name: t("home:our"), id: "our" },
    { name: t("home:areWe"), id: "areWe" },
    { name: t("home:contacts"), id: "contacts" },
    { name: t("home:dPrice"), id: "" },
  ];

  return (
    <>
      <div className="mobile__menu">
        <input
          type="checkbox"
          name="mobile-nav-toggle"
          id="mobileNavToggle"
          style={{ display: "none" }}
          checked={isMobileNavToggleChecked}
          onChange={handleMobileNavToggleChange}
        />
        <div
          className={`show-on-scroll-wrapper ${
            scrollActualCount > 300 && "show"
          }`}
          id="showOnScrollWrapper"
        >
          <label
            htmlFor="mobileNavToggle"
            className="mobile-nav-toggle-label show-on-scroll-mobile"
          >
            <div className="top-bar"></div>
            <div className="middle-bar"></div>
            <div className="bottom-bar"></div>
          </label>
        </div>
        <div id="overlayNav" className="text-white">
          <div id="mobileNavWrapper" className="nav-wrapper">
            <nav id="mobileNavigation">
              <ul className="mainNavButton" style={{ background: "black" }}>
                {navbar.map(({ id, name }) => (
                  <li key={id} onClick={() => handelScroll(id)}>
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <header id="header" role="banner" className="header__mobile">
          <div className="relative">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
              className=""
            ></div>
            <label
              htmlFor="mobileNavToggle"
              className="mobile-nav-toggle-label"
            >
              <div className="top-bar" />
              <div className="middle-bar" />
              <div className="bottom-bar" />
            </label>
          </div>
        </header>
      </div>
    </>
  );
};

export default MobileMenu;
