import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img2 = (props) => {
  return (
    <div className="imgTwo">
      <div className="imgDesc">
        <LazyLoadImage src={props.img1} effect="blur" />
        <div>{props.desc1}</div>
      </div>
      <div className="imgDesc">
        <LazyLoadImage src={props.img2} effect="blur" />
        <div>{props.desc2}</div>
      </div>
    </div>
  );
};

export default Img2;
