import React from "react";
import { useState } from "react";
import "./Header.css";
import { CgMenuRound } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const getMenuStyle = (toggleMenu) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !toggleMenu && "-100%"}
    }
  }


  return (
    <section className="h-wrapper">
      <div className="flex-center paddings inner-width h-container">
        <img src="./logo3.png" alt="Website Logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setToggleMenu(false)}>

        <div className="flexCenter h-menu"
        style={getMenuStyle(toggleMenu)}
        >
          <a href="">Reasidencies</a>
          <a href="">Our Values</a>
          <a href="">Conatct Us</a>
          <a href="">Get Started</a>
          
          <button className="button">
          <a href="">Contact</a>
          </button>
        </div>
          </OutsideClickHandler>
      <div className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
      <CgMenuRound size={30}/>
      </div>
      </div>
    </section>
  );
};

export default Header;
