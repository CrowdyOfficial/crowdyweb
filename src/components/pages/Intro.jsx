import React from "react";
import { Link } from "react-router-dom";
import NAV from "./pageComponent/Nav";

import "../../style/Intro.scss";

const Intro = () => {
  return (
    <div className="App">
      <div className="Intro">
        <NAV></NAV>
        <div className="section01">
          <div className="desc SCoreDreamFont">
            <span>카페 사장님의 </span>
            <span>자세한 이야기</span>
            <div className="descs">
              <span>솔직 담백한 이곳 카페 사장님의</span>
              <br />
              <span>자세한 카페 이야기를 들어보아요.</span>
            </div>
          </div>

          <div className="mainIMGs">
            <img src="./assets/Intro/5imgs.png" alt="" />
          </div>

          <div className="mainMobileIMGs">
            <img src="./assets/Intro/imgs_mobile.png" alt="" />
          </div>
        </div>

        {/* section 02 */}
        <div className="section02">
          <div className="mainIMGs">
            <img src="./assets/Intro/3phones.png" alt="" />
          </div>
          <div className="desc SCoreDreamFont">
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
            <img src="./assets/Intro/2phones_mobile.png" alt="" />
          </div>
        </div>

        {/* bottom */}
        <div className="bottom SCoreDreamFont">
          <div className="bottomLink">
            <Link className="align" to="/">
              <div className="bottomLinks">홈</div>
            </Link>
            <Link className="align" to="/magazine">
              <div className="bottomLinks">매거진</div>
            </Link>
            <Link className="align" to="/inquire">
              <div className="bottomLinks">문의하기</div>
            </Link>
          </div>
          <div className="email">
            문의 <span>&nbsp;&nbsp;crowdy2022@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
