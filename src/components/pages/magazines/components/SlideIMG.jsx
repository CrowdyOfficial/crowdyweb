import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const SlideIMG = (props) => {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };
  const images = props.imgArray;
  const makeSlide = () => {
    const result = [];
    for (let i = 0; i < images.length; i++) {
      result.push(
        <div key={i} className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[i]})` }}></div>
        </div>
      );
    }
    return result;
  };
  return (
    <div className="slide">
      <Slide {...properties}>{makeSlide()}</Slide>
    </div>
  );
};

export default SlideIMG;
