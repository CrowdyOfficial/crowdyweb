import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideIMG = (props) => {
  const images = [props.img1, props.img2, props.img3];
  // const makeContent = () => {
  //   const result = [];
  //   while (true) {
  //     let i = 0;
  //     if (images[i] === isNaN) {
  //       break;
  //     } else {
  //       result.push(
  //         <div className="each-slide-effect">
  //           <div style={{ backgroundImage: `url(${images[i]})` }}></div>
  //         </div>
  //       );
  //     }
  //   }
  //   return result;
  // };
  return (
    <div className="slide">
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideIMG;
