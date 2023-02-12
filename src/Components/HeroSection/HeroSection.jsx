import React from "react";
import "./HeroSection.scss";
import { FiMail } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
// import {Fa-ring} from 'react-icons/fa'
export const HeroSection = () => {
  return (
    <div>
      <div className="circle4"></div>
      <div className="circle1"></div>
      <div className="hero">
        {/* <div className="circle2"></div> */}
        <h1>
          Turn your best customers into <b> Loyal fans</b>
        </h1>
        <div className="circle3"></div>
        <p>
          Loyalbaze,empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
        <form action="">
          <div className="formTx">
            <label htmlFor="text"></label>
            <input type="text" name="" placeholder="Tell us your name" id="" />
            <BsPersonCircle
              color="white"
              style={{
                position: "absolute",
                left: "10px",
                top: "12px",
                fontSize: "1.5rem",
              }}
            />
          </div>
          <div className="formEm">
            <label htmlFor="email"></label>
            <input
              type="email"
              name=""
              placeholder="Enter your email address"
              id=""
            />

            <FiMail
              color="white"
              style={{
                position: "absolute",
                left: "10px",
                top: "12px",
                fontSize: "1.5rem",
              }}
            />
          </div>
          <button className="btnForm" type="submit">
            Get early access
          </button>
        </form>
      </div>
    </div>
  );
};
