import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import menu from "../assets/images/menu-burger.png";
import "../style/Navbar.css";
import Info1 from "./Infopub/Info1";
import Info2 from "./Infopub/Info2";
import Info3 from "./Infopub/Info3";
import Info4 from "./Infopub/Info4";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  const [showMenu, setShowMenu] = useState(false);
  const modalRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav>
      <Outlet />
      <Info1 />
      <Info2 />
      <Info3 />
      <Info4 />
      <div className="bar-navigation">
        <img
          src={menu}
          alt="menu-burger"
          className="burger-menu"
          type="button"
          tabIndex="0"
          onClick={handleMenuClick}
          ref={menuButtonRef}
        />
      </div>
      {showMenu && (
        <div className="top-modal" ref={modalRef}>
          <div className="container-buttons-left">
            <div
              className="mon-espace-nav-button"
              type="button"
              onClick={handleNavigation("faq")}
            >
              <p className="hover-text">Mon Espace</p>
            </div>
            <div
              className="home-button"
              type="button"
              onClick={handleNavigation("/")}
            >
              <p className="hover-text">Page d`accueil</p>
            </div>
          </div>
          <div className="modal-content">&times;</div>
          <div className="container-buttons-right">
            <div className="mon-payment-button" type="button">
              <p className="hover-text">Mes payments</p>
            </div>
            <div
              className="contact-button-nav"
              type="button"
              onClick={handleNavigation("contact")}
            >
              <p className="hover-text">Contact</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
