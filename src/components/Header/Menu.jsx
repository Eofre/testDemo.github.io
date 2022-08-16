import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ header, items, active, setActive }) {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul className="menu__list">
          {items.map((item) => (
            <li key={item.value} className="menu__item">
              <Link
                className="menu__link"
                to={item.to}
                onClick={() => setActive(false)}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
