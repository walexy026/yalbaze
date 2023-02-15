import React from "react";
import "./Priotize.scss";
import zigzag from "../../Assets/zigzag.svg";
import { ConsultForm } from "../ConsultForm/ConsultForm";

export const Priotize = () => {
  return (
    <div className="priotizeSection">
      <div className="priptizeText">
        <h2>Priority Access</h2>
        <img src={zigzag} alt="zigzag" />
        <p id="Ptx">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>
      <ConsultForm />
    </div>
  );
};
