import React from "react";

const Img1 = (props) => {
  return (
    <div className="imgOne">
      <div className="imgDesc">
        <img className="LereveMenu" src={props.img} alt="" />
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default Img1;
