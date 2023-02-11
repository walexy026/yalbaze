import React from "react";
import "./Header.scss";
import Logo from "../../Assets/logoYalbaze.svg";

export const Header = () => {
  return (
    <div className="e">
      <nav>
        <img src={Logo} alt="" />
      </nav>
    </div>
  );
};
