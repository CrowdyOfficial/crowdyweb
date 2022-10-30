import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img1 = (props) => {
  return (
    <div className="imgOne">
      <div className="imgDesc">
        {/* <img className="LereveMenu" src={props.img} alt="" /> */}
        <LazyLoadImage src={props.img} width="100%" effect="blur" />
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default Img1;
