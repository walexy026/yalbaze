import React from "react";
import "./HeroSection.scss";
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
          <label htmlFor="text">
            <input type="text" name="" placeholder="Tell us your name" id="" />
            {/* <Fa-ring /> */}
          </label>
          <label htmlFor="email"></label>
          <input
            type="email"
            name=""
            placeholder="Enter your email address"
            id=""
          />
          <button className="btnForm" type="submit">
            Get early access
          </button>
        </form>
      </div>
    </div>
  );
};
