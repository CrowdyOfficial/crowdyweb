import React from "react";
import { Link, useLocation } from "react-router-dom";
import NAV from "./pageComponent/Nav";
import Bottom from "./pageComponent/Bottom";

import "../../style/Intro.scss";

const Intro = () => {
  const sec01Img = "./assets/Intro/5imgs.webp";
  const sec01ImgMobile = "./assets/Intro/imgs_mobile.webp";
  const sec02Img = "./assets/Intro/3phones.webp";
  const sec02ImgMobile = "./assets/Intro/2phones_mobile.webp";

  const nowurl = useLocation();
  if (nowurl.pathname !== "/") {
    nowurl.pathname = "/";
  }
  return (
    <div className="App">
      <div className="Intro">
        <NAV></NAV>
        <div className="section01">
          <div className="desc SCoreDreamFont2">
            <span>카페 사장님의 </span>
            <span>자세한 이야기</span>
            <div className="descs">
              <span>솔직 담백한 이곳 카페 사장님의</span>
              <br />
              <span>자세한 카페 이야기를 들어보아요.</span>
            </div>
          </div>

          <div className="mainIMGs">
            <img src={sec01Img} alt="" />
          </div>

          <div className="mainMobileIMGs">
            <img src={sec01ImgMobile} alt="" />
          </div>
        </div>

        {/* section 02 */}
        <div className="section02">
          <div className="mainIMGs">
            <img src={sec02Img} alt="" />
          </div>
          <div className="desc SCoreDreamFont2">
            <div className="title">
              <span>서로 다른 사장님,</span>
              <span>서로 다른 인터뷰, </span>
              <span>브랜딩을 담은 매거진</span>
            </div>
            <div className="descs">
              <span>카페에 대한 질문과 사장님의&nbsp;</span>

              <span>솔직한 답변을 매거진에 담았어요.</span>
            </div>
            <Link to="/magazine">
              <button className="SCoreDreamFont">매거진 보러가기</button>
            </Link>
          </div>
          <div className="mainMobileIMGs">
            <img src={sec02ImgMobile} alt="" />
          </div>
        </div>

        {/* bottom */}
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Intro;
