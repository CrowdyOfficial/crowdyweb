import React from "react";

const Img2 = (props) => {
  return (
    <div className="imgTwo">
      <div className="imgDesc">
        <img src={props.img1} alt="" />
        <div>{props.desc1}</div>
      </div>
      <div className="imgDesc">
        <img src={props.img2} alt="" />
        <div>{props.desc2}</div>
      </div>
    </div>
  );
};

export default Img2;
