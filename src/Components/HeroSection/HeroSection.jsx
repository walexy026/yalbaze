import React from "react";
import "./HeroSection.scss";
import star from "../../Assets/Star2.svg";
import { FiMail } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import curvedArrow from "../../Assets/curvedArrow.svg";
// import {Fa-ring} from 'react-icons/fa'
export const HeroSection = () => {
  const [yourname, setYourname] = useState("");
  const [yourmail, setYourmail] = useState("");
  const [error, setError] = useState(true);
  const [Loading, isloading] = useState(false);

  let yournamehandler = (event) => {
    setYourname(event.target.value);
  };

  const youremailhandler = (event) => {
    setYourmail(event.target.value);
  };

  const submitformhandler = (event) => {
    event.preventDefault();

    if (yourname.trim() === "" || yourmail.trim() === "") {
      setError(false);
      return;
    }

    setError(true);

    setYourname("");
    setYourmail("");
  };

  let classes = error ? "formTx" : "formTx  formbx";

  return (
    <div>
      <div className="circle4"></div>
      <div className="circle1"></div>
      <div className="hero">
        {/* <div className="circle2"></div> */}
        <h1>
          <img className="img1" src={star} alt="star" />
          Turn your best customers into <b> Loyal fans</b>
          <img src={star} alt="star" className="img2" />
        </h1>
        <div className="circle3"></div>
        <p id="heroP">
          Loyalbaze,empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
        <form action="" onSubmit={submitformhandler}>
          <img
            src={curvedArrow}
            alt="curvedArrow"
            width="150px"
            height="150px"
          />
          <div className={classes}>
            <label htmlFor="text"></label>

            {!error && (
              <b style={{ color: "red", transition: "1s" }} className="">
                Name must not be empty
              </b>
            )}
            <input
              type="text"
              value={yourname}
              name=""
              placeholder="Tell us your name"
              id=""
              onChange={yournamehandler}
            />
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
          <div className={classes}>
            <label htmlFor="email"></label>

            {!error && (
              <b style={{ color: "red" }} className="">
                Email must not be empty
              </b>
            )}

            <input
              type="email"
              value={yourmail}
              name=""
              placeholder="Enter your email address"
              id=""
              onChange={youremailhandler}
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

          <button className="btnForm">Get early access</button>

          {Loading && <b style={{ color: "white" }}>Loading</b>}
        </form>
      </div>
    </div>
  );
};
