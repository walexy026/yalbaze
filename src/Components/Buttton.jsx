import React from "react";

const Buttton = (props) => {
  const { title } = props;
  return (
    <div>
      <button className="btn">{title}</button>
    </div>
  );
};

export default Buttton;
