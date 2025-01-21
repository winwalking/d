import React, { useState } from "react";
import Logo from "assets/image/logo_header.svg";
import Message from "assets/image/msg_header.svg";
import Alram from "assets/image/alram_header.svg";
import Profile from "assets/image/profile_header.svg";

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

type MenuPath = typeof predefinedMenus[number]["path"];

interface HeaderProps {
  scrollToSection: (id: MenuPath) => void;
  activeMenu: MenuPath; // Dashboard에서 전달받는 activeMenu
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="styles_layout_header">
      <header className="styles_header">
        <div className="styles_inner">
          {/* Logo */}
          <div className="styles_logoImage">
            <Logo style={{ marginRight: 20 }} />
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
          <div className="styles_waitlist" style={{ display: "flex" }}>
            <Message style={{ margin: "0 12px" }} />
            <Alram style={{ margin: "0 12px" }} />
            <Profile style={{ margin: "0 12px" }} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`styles_layout_header_other ${
          isOpen ? "styles_isVisible" : ""
        }`}
      >
        <div className="styles_module_5">
          <div className="styles_inner__N4Jni">
            <div className="styles_mainNavigations__fZqoQ">
              {/* Render Mobile Menus */}
              {predefinedMenus.map((menu) => (
                <div key={menu.id} className="styles_navigationTree__HR2V3">
                  <h2 className="styles_navigationTreeLabel___Jry_">
                    {menu.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
