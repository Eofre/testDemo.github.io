import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {/* <li className="header__item">
          <Link to="/" className="header__link">
            AA
          </Link>
        </li> */}
        <li className="header__item">
          <Link to="/evenWeek" className="header__link">
            Четная
          </Link>
        </li>
        <li className="header__item">
          <Link to="/oddWeek" className="header__link">
            Нечетная
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
