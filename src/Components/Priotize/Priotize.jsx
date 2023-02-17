import React from "react";
import "./Priotize.scss";
import star from "../../Assets/Star2.svg";
import zigzag from "../../Assets/zigzag.svg";
import { ConsultForm } from "../ConsultForm/ConsultForm";

export const Priotize = () => {
  return (
    <div className="priotizeSection">
      {/* <img src={star} width="30px" height="36px" alt="star" /> */}
      {/* <img src={star} width="30px" height="36px" alt="star" /> */}
      <div className="priptizeText">
        <h2>
          <img className="img4" src={star} alt="star" />
          Priority Access
        </h2>
        <img src={zigzag} alt="zigzag" />
        <p id="Ptx">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
          <img className="img5" src={star} alt="star" />
          ``
        </p>
      </div>
      <ConsultForm />
    </div>
  );
};
