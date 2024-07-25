import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import menu from "../assets/images/menu-burger.png";
import espace from "../assets/images/chateau.png";
import pigeon from "../assets/images/carrier-pigeon.png";
import "../style/Navbar.css";

function Navbar() {
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
          <div className="mon-espace-nav">
            <img src={espace} alt="Mon espace" />
            <button>Mon Espace</button>
          </div>
          <div className="modal-content">&times;</div>
          <div className="contact-bar-navigation">
            <img src={pigeon} alt="pigeon voyager" />
            <button className="button-contact">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
