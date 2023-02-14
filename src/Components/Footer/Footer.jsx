import React from "react";
import "./Footer";
import "./Footer.scss";
import house from "../../Assets/house2.svg";
import { FiPhoneCall } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <ul>
        <li>
          <img src={house} alt="house" />
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
          Nigeria.
        </li>
        <li>Loyalbaze is almost here.</li>
        <li>
          <FiPhoneCall fontSize="1rem" />
          +234 903 618 9485
        </li>
      </ul>
    </div>
  );
};
