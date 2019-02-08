import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <ul className="header" role="navigation">
        <li className="header-left-content">
          <Link to="/">
            Christopher Volante
          </Link>
        </li>
        <li className="header-right-content">
          <Link to="/work">
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;