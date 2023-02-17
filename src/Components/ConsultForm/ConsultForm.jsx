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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState(true);
  const nameChange = (e) => {
    setName(e.target.value);
    console.log(e);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const companyChange = (e) => {
    setCompany(e.target.value);
  };
  const textareaChange = (e) => {
    setTextarea(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="consultForm">
        <img className="img5" src={cube} alt="cube" />
        <img className="img6" src={cube} alt="cube" />
        <form className="formConsult" action="" onSubmit={formSubmit}>
          <h2>Book a Consultation with us</h2>
          <label htmlFor=""></label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={nameChange}
            placeholder="Enter your full name"
          />
          <label htmlFor=""></label>
          <input
            type="text"
            value={email}
            onChange={emailChange}
            name=""
            id=""
            placeholder="Enter your work email"
          />
          <label htmlFor=""></label>
          <input
            type="num"
            value={phone}
            onChange={phoneChange}
            name=""
            id=""
            placeholder="Mobile number"
          />
          <label htmlFor=""></label>
          <input
            type="text"
            name=""
            value={company}
            onChange={companyChange}
            id=""
            placeholder="Company Name"
          />
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
          <div className="txArea">
            <textarea
              name=""
              id=""
              value={textarea}
              onChange={textareaChange}
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
