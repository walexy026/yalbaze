import React, { useMemo, useState } from "react";
import star from "../../Assets/Star2.svg";
import cube from "../../Assets/cube.svg";
import "./ConsultForm.scss";
// import Select from "react-select-country-list";
// import countryList from "react-select-country-list";

export const ConsultForm = () => {
  // const [value, setValue] = useState("");
  // const options = useMemo(() => countryList().getData(), []);
  // const changeHandler = (value) => {
  //   setValue(value);
  // };
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
        </form>
      </div>
      <img className="img3" src={star} alt="star" />
      {/* <Select options={options} value={value} onChange={changeHandler} /> */}
    </div>
  );
};
