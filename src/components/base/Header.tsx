import React, { useState, useEffect, useRef } from "react";
import Logo from "assets/image/logo_header_d.svg";
import Message from "assets/image/msg_header.svg";
import Alram from "assets/image/alram_header.svg";
import Profile from "assets/image/profile_header.svg";
import Translation from "assets/image/translation.svg";
import MoblieMenuBtn from "assets/image/mobile_menu_btn.svg";
import MobileMenuClseBtn from "assets/image/close_white_trans.svg";
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
  const mobileMenuRef = useRef<HTMLDivElement>(null); // 🔥 메뉴 내부 감지 Ref
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
    const newState = !isOpen; 
    setIsOpen(newState);
    shadowOn(newState); 
    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

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

  useEffect(() => {
    const handleMobileClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        shadowOn(false);
        document.body.style.overflow = "";
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleMobileClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleMobileClickOutside);
    };
  }, [isOpen]);
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
                <span>{i18n.language === "ko-KR" ? "한국어" : "ENG"}</span>
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
        ref={mobileMenuRef} 
        className={`styles_layout_header_other ${
          isOpen ? "styles_isVisible" : ""
        }`}
        style={{
          transform: isOpen ? "translateX(30%)" : "translateX(100%)", // 🔥 30% 보이도록 수정
          transition: "transform 0.3s ease-in-out", // 부드러운 애니메이션 효과 추가
        }}
      >
        <div className="styles_module_5 h_auto!">
          <MobileMenuClseBtn
            className="transform_rotate(45deg) cursor_pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <div className="styles_module_5">
          <div className="flex_column items_flex-start">
            <div className="styles_navigationItems flex_column mb_40!">
              {/* Render Mobile Menus */}
              {translatedMenus.map((menu) => (
                <div key={menu.id} className="styles_navigationTree">
                  <h2
                    className="styles_navigationTreeLabel"
                    onClick={() => scrollToSection(menu.path)}
                  >
                    <a className="fw_bold text_white">{menu.name}</a>
                  </h2>
                </div>
              ))}
            </div>
            <div className="styles_waitlist d_flex! mb_40">
              <Message className="my_0 mx_12" />
              <Alram className="my_0 mx_12" />
              <Profile className="my_0 mx_12" />
            </div>
            <ul className="styles_trans_menu">
              <li
                className={`${
                  i18n.language === "ko-KR" ? "bg_rgba(22,_35,_254,_1)" : ""
                } d_flex items_center`}
                onClick={() => changeLanguage("ko-KR")}
              >
                <span
                  className={`${i18n.language === "ko-KR" ? "fw_bold " : ""}`}
                >
                  한국어
                </span>
              </li>
              <li
                className={`${
                  i18n.language === "en-US" ? "bg_rgba(22,_35,_254,_1)" : ""
                } d_flex items_center`}
                onClick={() => changeLanguage("en-US")}
              >
                <span
                  className={`${i18n.language === "en-US" ? "fw_bold" : ""}`}
                >
                  English
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" />}
    </div>
  );
};

export default Header;
