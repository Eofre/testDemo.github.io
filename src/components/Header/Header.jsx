import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logoImg from "./img/hearts.png";
import menuImg from "./img/menu.png";
import Menu from "./Menu";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", to: "/" },
    { value: "Чётная неделя", to: "/evenWeek" },
    { value: "Нечётная неделя", to: "/oddWeek" },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__logo">
              <img className="header__logo-img" src={logoImg} alt="" />
              Расписание <span>3 А РУСЛИТ</span>
            </Link>
          </div>
        </div>
        <button
          className="header__btn-menu"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className="header__btn-menu-item"></span>
          <span className="header__btn-menu-item"></span>
          <span className="header__btn-menu-item"></span>
        </button>
      </header>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Меню"}
        items={items}
      />
    </>
  );
}

export default Header;
