import React from "react";
import "./Footer";
import { FiPhoneCall } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
          Nigeria.
        </li>
        <li>Loyalbaze is almost here.</li>
        <li>
          <FiPhoneCall />
          +234 903 618 9485
        </li>
      </ul>
    </div>
  );
};
