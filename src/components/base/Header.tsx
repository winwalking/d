import React, { useState, useEffect, useRef } from "react";
import Logo from "assets/image/logo_header_d.svg";
import Message from "assets/image/msg_header.svg";
import Alram from "assets/image/alram_header.svg";
import Profile from "assets/image/profile_header.svg";
import Translation from "assets/image/translation.svg";
import MoblieMenuBtn from "assets/image/mobile_menu_btn.svg";
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

// **Define HeaderProps before using it**
interface HeaderProps {
  scrollToSection: (id: MenuPath) => void;
  activeMenu: MenuPath;
  shadowOn: (isActive: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  activeMenu,
  shadowOn,
}) => {
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null); // 🔥 드롭다운을 감싸는 Ref 추가
  // Translate menu names
  const translatedMenus = predefinedMenus.map((menu) => ({
    ...menu,
    name: t(`layouts.top.menus.landing.${menu.key}`),
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTranslator = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMobileMenu = () => {
    const newState = !isOpen; // 🛠 상태를 미리 저장
    setIsOpen(newState);
    shadowOn(newState); // 🛠 shadowOn에 newState 전달
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  // 🔥 드롭다운 외부 클릭 감지 이벤트 추가
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <div className="styles_layout_header">
      <header className="styles_header">
        {isOpen && <div className="overlay_header" />}
        <div className="styles_inner">
          {/* Logo */}
          <div className="styles_logoImage">
            <Logo />
          </div>

          {/* Menu */}
          <nav className="styles_pcOnly">
            <ul className="styles_navigationItems">
              {translatedMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={`styles_navigationItem ${
                    activeMenu === menu.path ? "styles_activeMenu" : ""
                  }`}
                  onClick={() => scrollToSection(menu.path)}
                >
                  <a>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login / App Download */}

          <div className="styles_pcOnly">
            <div className="styles_waitlist d_flex!" ref={dropdownRef}>
              <div
                className="pos_relative d_flex items_center cursor_pointer"
                onClick={toggleTranslator}
              >
                <Translation className="my_0" />
                <span>
                  {i18n.language === "ja-JP"
                    ? "日本語"
                    : i18n.language === "ko-KR"
                    ? "한국어"
                    : "ENG"}
                </span>
              </div>
              {isDropdownOpen && (
                <ul className="styles_dropdown_menu">
                  <li
                    className="d_flex items_center"
                    onClick={() => changeLanguage("ko-KR")}
                  >
                    <span>한국어</span>
                  </li>
                  <li
                    className="d_flex items_center"
                    onClick={() => changeLanguage("en-US")}
                  >
                    <span>English</span>
                  </li>
                </ul>
              )}
              <Message className="my_0 mx_12 cursor_pointer" />
              <Alram className="my_0 mx_12 cursor_pointer" />
              <Profile className="my_0 mx_12 cursor_pointer" />
            </div>
          </div>

          <div className="styles_mobileOnly">
            <div className="styles_waitlist d_flex!" onClick={toggleMobileMenu}>
              <MoblieMenuBtn />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`styles_layout_header_other ${
          isOpen ? "styles_isVisible" : ""
        }`}
        style={{
          transform: isOpen ? "translateX(30%)" : "translateX(100%)", // 🔥 30% 보이도록 수정
          transition: "transform 0.3s ease-in-out", // 부드러운 애니메이션 효과 추가
        }}
      >
        <div onClick={toggleMobileMenu}>닫기(임시방편)</div>
        <div className="styles_module_5">
          <div className="flex_column items_flex-start">
            <div className="styles_navigationItems flex_column">
              {/* Render Mobile Menus */}
              {translatedMenus.map((menu) => (
                <div key={menu.id} className="styles_navigationTree">
                  <h2
                    className="styles_navigationTreeLabel"
                    onClick={() => scrollToSection(menu.path)}
                  >
                    <a>{menu.name}</a>
                  </h2>
                </div>
              ))}
            </div>
            <div className="styles_waitlist d_flex!">
              <Message className="my_0 mx_12" />
              <Alram className="my_0 mx_12" />
              <Profile className="my_0 mx_12" />
            </div>
            <ul className="styles_trans_menu">
              <li
                className="d_flex items_center"
                onClick={() => changeLanguage("ko-KR")}
              >
                <span>한국어</span>
              </li>
              <li
                className="d_flex items_center"
                onClick={() => changeLanguage("en-US")}
              >
                <span>English</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
