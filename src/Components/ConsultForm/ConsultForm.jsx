import React from "react";
import star from "../../Assets/Star2.svg";
import cube from "../../Assets/cube.svg";

import "./ConsultForm.scss";
import { CountriesDropdown } from "../../CountriesDropdown";
export const ConsultForm = () => {
  return (
    <div>
      <img src={cube} alt="cube" />
      <img src={cube} alt="cube" />
      <div className="consultForm">
        <form className="formConsult" action="">
          <h2>Book a Consultation with us</h2>
          <label htmlFor=""></label>
          <input type="text" name="" id="" placeholder="Enter your full name" />
          <label htmlFor=""></label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your work email"
          />
          <label htmlFor=""></label>
          <input type="num" name="" id="" placeholder="Mobile number" />
          <label htmlFor=""></label>
          <input type="text" name="" id="" placeholder="Company Name" />
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
          <div className="txArea">
            <textarea
              name=""
              id=""
              cols="40"
              rows="15"
              placeholder="Drop a message....."
            ></textarea>
          </div>
          <button className="btnForm">Send Request</button>
          <img src={star} alt="star" />
        </form>
        <CountriesDropdown />
      </div>
    </div>
  );
};
