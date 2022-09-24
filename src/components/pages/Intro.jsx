import React from "react";
import { Link } from "react-router-dom";
import "../../style/Intro.scss";

const Intro = () => {
  return (
    <div className="App">
      <div className="Intro">
        {/* Navigation */}
        <nav className="SCoreDreamFont">
          <div className="navnav">
            <img src="./assets/crowdysymbol.png" alt="" />
            <span>크라우디</span>
            <div>홈</div>
            <div>매거진</div>
            <div>문의하기</div>
          </div>
        </nav>

        {/* section one */}
        <div className="section01">
          <div className="desc SCoreDreamFont">
            <span>연남동 카페 사장님의 </span>
            <span>자세한 이야기</span>
            <div className="descs">
              <span>국내 가장 핫한 카페 동네, 연남동</span>
              <span>
                이곳 카페에서 사장님의 자세한 카페 이야기를 들어보아요.
              </span>
            </div>
          </div>

          <div className="mainIMGs">
            <img
              className="third i0"
              src="./assets/Intro/IMG_5447 1.png"
              alt=""
            />
            <img
              className="second i1"
              src="./assets/Intro/IMG_5669.png"
              alt=""
            />
            <img
              className="first i2"
              src="./assets/Intro/IMG_5431.png"
              alt=""
            />
            <img
              className="second i3"
              src="./assets/Intro/IMG_5447 2.png"
              alt=""
            />
            <img
              className="third i4"
              src="./assets/Intro/IMG_5646 1.png"
              alt=""
            />
          </div>
        </div>

        {/* section 02 */}
        <div className="section02">
          <div className="mainIMGs">
            <img className="i0" src="./assets/Intro/Group 29.png" alt="" />
            <img src="./assets/Intro/Group 28.png" alt="" />
            <img src="./assets/Intro/Group 32.png" alt="" />
          </div>
        </div>

        {/* bottom */}
        <div>bottom</div>
      </div>
    </div>
  );
};

export default Intro;
