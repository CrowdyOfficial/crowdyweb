import React from "react";
import "../../style/Intro.scss";
import "../../style/magazine.scss";
import { Link } from "react-router-dom";

import MagazineMenu from "./magazineComponent/MagazineMenu";

const Magazine = () => {
  return (
    <div className="App">
      <div className="magazinePage">
        {/* Navigation */}
        <nav className="SCoreDreamFont">
          <div className="navnav">
            <Link to="/">
              <img src="./assets/crowdysymbol.png" alt="" />
              <span>크라우디</span>
            </Link>
            <Link to="/">
              <div className="link">홈</div>
            </Link>
            <Link to="/magazine">
              <div className="link">매거진</div>
            </Link>
            <Link to="moon">
              <div className="link">문의하기</div>
            </Link>
          </div>
        </nav>

        {/* section one */}
        <div className="section01 SCoreDreamFont">
          <div className="desc">
            <div className="title">
              <span>매거진, 사장님이</span>
              <span>풀어내는 카페 이야기</span>
            </div>
            <div className="descs">
              <span>
                어디에서도 들어보지 못한, 사장님이 직접 말하는 카페 스토리
              </span>
            </div>
          </div>
        </div>

        {/* section two */}
        <div className="section02">
          <MagazineMenu
            className="M"
            to={"./yenani"}
            thumbnail={"IMG_5431.png"}
            cafeName={"예나니"}
            cafeDesc={"끝남동의 매력적인 카페, 아기자기한 감성"}
          ></MagazineMenu>

          <MagazineMenu
            className="M"
            to={"./yenani"}
            thumbnail={"IMG_5669.png"}
            cafeName={"텐더리커피앤디저트"}
            cafeDesc={"따뜻하고 아늑한 공간의 여유로움"}
          ></MagazineMenu>
        </div>

        {/* bottom */}
        <div className="bottom SCoreDreamFont">
          <div className="bottomLink">
            <Link to="/">
              <div className="bottomLinks">홈</div>
            </Link>
            <Link to="/magazine">
              <div className="bottomLinks">매거진</div>
            </Link>
            <Link to="/moon">
              <div className="bottomLinks">문의하기</div>
            </Link>
          </div>
          <div className="email">
            문의 <span>crowdy2022@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
