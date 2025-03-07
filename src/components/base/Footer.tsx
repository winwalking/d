import React, { useState, useEffect } from "react";

import LogoFooter from "assets/image/logo_footer_d.svg";
import LogoTextFooter from "assets/image/logo_text_footer_d.svg";
import LogoTextFooterMd from "assets/image/logo_text_footer_md_d.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // i18n 설정 불러오기
// Predefined menu items
const predefinedMenus = [
  { id: 1, name: "Home", path: "home", key: "home" },
  { id: 2, name: "About Us", path: "about-us", key: "aboutUs" },
  { id: 3, name: "Why Choose Us", path: "why-choose-us", key: "whyChooseUs" },
  { id: 4, name: "Services", path: "services", key: "services" },
  { id: 5, name: "History", path: "history", key: "history" },
  { id: 6, name: "Team", path: "team", key: "team" },
  { id: 7, name: "Contact Us", path: "contact-us", key: "contactUs" },
] as const;

type MenuPath = (typeof predefinedMenus)[number]["path"];

interface FooterProps {
  scrollToSection: (id: MenuPath) => void;
}
const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { t } = useTranslation();
  // const [menus, setMenus] = useState<Menu[]>([]);

  // // API로부터 메뉴 데이터 가져오기
  // useEffect(() => {
  //   const fetchMenus = async () => {
  //     try {
  //       const response = await axios.get<Menu[]>("http://127.0.0.1:8000/menus");
  //       setMenus(buildMenuTree(response.data)); // API 데이터를 계층 구조로 변환 후 저장
  //     } catch (error) {
  //       console.error("API 호출 실패:", error);
  //     }
  //   };

  //   fetchMenus();
  // }, []);
  const [isDisplayXS, setIsDisplayXs] = useState(false);
  const [isDisplaySm, setIsDisplaySm] = useState(false);
  const [isDisplayMd, setIsDisplayMd] = useState(false);
  const [isDisplayNm, setIsDisplayNm] = useState(false);
  const [isDisplayLg, setIsDisplayLg] = useState(false);
  const [isDisplayXl, setIsDisplayXl] = useState(false);
  useEffect(() => {
    // const handleResize = () => {
    //   const width = window.innerWidth;
    //   setIsDisplayLg(width <= 1040);
    //   setIsDisplayXl(width <= 1280 && width > 1040);
    // };
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDisplayXs(width <= 390);
      setIsDisplaySm(width <= 675);
      setIsDisplayMd(width <= 1040);
      setIsDisplayNm(width <= 1180);
      setIsDisplayLg(width <= 1280);
      setIsDisplayXl(width <= 1460);
    };
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Translate menu names
  const translatedMenus = predefinedMenus.map((menu) => ({
    ...menu,
    name: t(`layouts.top.menus.landing.${menu.key}`),
  }));
  return (
    <footer className="styles_footer">
      <div className="styles_inner_footer">
        <div className="styles_footer_mainNavigations md:items_flex-start md:mb_40!">
          <LogoFooter />
          <nav className="styles_pcOnly">
            <ul className="styles_footer_navigationItems">
              {translatedMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={`styles_footer_navigationItem `}
                  onClick={() => scrollToSection(menu.path)}
                >
                  <a>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="styles_mobileOnly">
            <ul className="styles_footer_navigationItems md:flex_column! md:gap_16!">
              {translatedMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={`styles_footer_navigationItem `}
                  onClick={() => scrollToSection(menu.path)}
                >
                  <a>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w_100% d_flex items_flex-end justify_between md:flex_column! md:items_flex-start">
          <div className="w_390 md:d_flex md:flex_column-reverse!">
            <div className="md:mb_28">
              <div className="d_flex items_center mb_20 gap_20">
                {isDisplayMd ? (
                  <LogoTextFooterMd/>
                ) : (
                  <LogoTextFooter />
                )}
              </div>
              <div className="mb_20">
                <span className="text_rgb(118,_118,_118) fs_18 md:fs_14 fw_400">
                  © 2025 Dneuro INC. All Rights Reserved.
                </span>
              </div>
            </div>
            <div
              className="d_flex items_center gap_40 md:gap_20 md:mb_20"
              // style={{ display: "flex", alignItems: "center", gap: 40 }}
            >
              <a
                className="text_rgb(165,_167,_177) md:text_rgb(118,_118,_118) fs_18 md:fs_14 fw_normal text-decor_underline!"
                href=""
              >
                {t("layouts.footer.privacyPolicy")}
              </a>
              <a className="text_rgb(165,_167,_177) md:text_rgb(118,_118,_118) fs_18 md:fs_14 fw_normal text-decor_underline!">
                {t("layouts.footer.termsOfService")}
              </a>
            </div>
          </div>
          <div className="w_310">
            <div className="mb_20">
              <span
                className="fs_18 md:fs_14 fw_400 leading_28px text_rgb(165,_167,_177) md:text_rgb(118,_118,_118)"
                // style={{
                //   lineHeight: "27px",
                // }}
              >
                {t("layouts.footer.address1")}
                <br />
                {t("layouts.footer.address2")}
                {isDisplayMd && "\u00A0"}
                {!isDisplayMd && <br />}
                {t("layouts.footer.address3")}
                {isDisplayMd && <br />} {t("layouts.footer.address4")}
                {isDisplayMd && "\u00A0"}
                {!isDisplayMd && <br />}
                {t("layouts.footer.address5")}
              </span>
            </div>
            <div className="d_flex justify_flex-end md:justify_flex-start">
              <span className="fs_18 md:fs_14 fw_400 text-align_right md:text-align_left text_rgb(165,_167,_177) md:text_rgb(118,_118,_118)">
                +82 (02) 6274-0055
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="styles_notation">
        <span className="styles_module_notation">ブルーモ証券株式会社｜</span>
        <span className="styles_module_notation">
          金融商品取引業者 関東財務局長（金商）第3384号｜
        </span>
        加入協会：日本証券業協会
      </p> */}
    </footer>
  );
};

export default Footer;
