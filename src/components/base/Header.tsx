import React, { useState } from "react";
import Logo from "assets/image/logo_header.svg";
import Message from "assets/image/msg_header.svg";
import Alram from "assets/image/alram_header.svg";
import Profile from "assets/image/profile_header.svg";
import MoblieMenuBtn from "assets/image/mobile_menu_btn.svg";
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

interface HeaderProps {
  scrollToSection: (id: MenuPath) => void;
  activeMenu: MenuPath; // Dashboard에서 전달받는 activeMenu
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="styles_layout_header">
      <header className="styles_header">
        <div className="styles_inner">
          {/* Logo */}
          <div className="styles_logoImage">
            <Logo />
          </div>

          {/* Menu */}
          <nav className="styles_pcOnly">
            <ul className="styles_navigationItems">
              {predefinedMenus.map((menu) => (
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
            <div className="styles_waitlist d_flex!">
              <Message className="my_0 mx_12" />
              <Alram className="my_0 mx_12" />
              <Profile className="my_0 mx_12" />
            </div>
          </div>
          <div className="styles_mobileOnly">
            <div className="styles_waitlist d_flex!" onClick={toggleMobileMenu}>
              {" "}
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
      >
        <div onClick={toggleMobileMenu}>닫기(임시방편)</div>
        <div className="styles_module_5">
          <div className="styles_inner">
            <div className="styles_navigationItems">
              {/* Render Mobile Menus */}
              {predefinedMenus.map((menu) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
