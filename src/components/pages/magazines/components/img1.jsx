import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img1 = (props) => {
  return (
    <div className="imgOne">
      <div className="imgDesc">
        <LazyLoadImage src={props.img} className="LereveMenu" effect="blur" />
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default Img1;
