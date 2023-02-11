import React from "react";
import "./Header.scss";
import Logo from "../../Assets/logoYalbaze.svg";
import Buttton from "../Buttton";

export const Header = () => {
  return (
    <div>
      <nav>
        <img src={Logo} alt="Logo" />
        <Buttton title="Get Priority Access" />
      </nav>
    </div>
  );
};
