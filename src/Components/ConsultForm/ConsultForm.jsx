import React from "react";
import "./ConsultForm.scss";
export const ConsultForm = () => {
  return (
    <div className="consultForm">
      <h2>Book a Consultation with us</h2>
      <form className="formConsult" action="">
        <label htmlFor=""></label>
        <input type="text" name="" id="" placeholder="Enter your full name" />
        <label htmlFor=""></label>
        <input type="text" name="" id="" placeholder="Enter your work email" />
        <label htmlFor=""></label>
        <input type="num" name="" id="" placeholder="Mobile number" />
        <label htmlFor=""></label>
        <input type="text" name="" id="" placeholder="Company Name" />
        <label htmlFor=""></label>
        <input type="text" name="" id="" />
        <textarea
          name=""
          id=""
          cols="23"
          rows="5"
          placeholder="Drop a message....."
        ></textarea>
      </form>
    </div>
  );
};
