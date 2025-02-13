import React, { useState, useEffect } from "react";

import LogoFooter from "assets/image/logo_footer.svg";
import LogoTextFooter from "assets/image/logo_text_footer.svg";
// Predefined menu items
const predefinedMenus = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "About Us", path: "about-us" },
  { id: 3, name: "Why Choose Us", path: "why-choose-us" },
  { id: 4, name: "Services", path: "services" },
  { id: 5, name: "History", path: "history" },
  { id: 6, name: "Team", path: "team" },
  { id: 7, name: "Contact Us", path: "contact-us" },
] as const;

type MenuPath = (typeof predefinedMenus)[number]["path"];

interface FooterProps {
  scrollToSection: (id: MenuPath) => void;
}
const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
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
  return (
    <footer className="styles_footer">
      <div className="styles_inner_footer">
        <div className="styles_footer_mainNavigations md:items_flex-start">
          <LogoFooter />
          <nav className="styles_pcOnly">
            <ul className="styles_footer_navigationItems">
              {predefinedMenus.map((menu) => (
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
            <ul className="styles_footer_navigationItems nm:flex_column!">
              {predefinedMenus.map((menu) => (
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
        <div
          className="w_100% d_flex items_flex-end justify_between"

        >
          <div className="w_390">
            <div
              className="d_flex items_center mb_20 gap_20"
            
            >
              <LogoTextFooter />
              <span className="text_rgb(118,_118,_118) fs_18 fw_400">
                Powered by Dneuro
              </span>
            </div>
            <div className="mb_20">
              <span className="text_rgb(118,_118,_118) fs_18 fw_400">
                © 2025 Algolab INC. All Rights Reserved.
              </span>
            </div>
            <div
              className="d_flex items_center gap_40"
              // style={{ display: "flex", alignItems: "center", gap: 40 }}
            >
              <a
                className="text_rgb(165,_167,_177) fs_18 fw_normal text-decor_underline!"
                href=""
              >
                Privacy Policy
              </a>
              <a className="text_rgb(165,_167,_177) fs_18 fw_normal text-decor_underline!">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="w_310">
            <div className="mb_20">
              <span
                className="fs_18 fw_400 leading_28px text_rgb(165,_167,_177)"
                // style={{
                //   lineHeight: "27px",
                // }}
              >
                100-0005
                <br />
                ALGOLAB Inc. Level 2, Marunouchi
                <br />
                Nijubashi Building, 3-2-2, Marunouchi,
                <br />
                Chiyoda-ku, Tokyo
              </span>
            </div>
            <div className="d_flex justify_flex-end">
              <span className="fs_18 fw_400 text-align_right text_rgb(165,_167,_177)">
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
