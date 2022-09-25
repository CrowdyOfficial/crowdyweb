import React from "react";
import { Link } from "react-router-dom";
import "../../style/Intro.scss";
import "../../style/Inquire.scss";

const Inquire = () => {
  return (
    <div className="App">
      <div className="inquire">
        {/* Navigation */}
        <nav className="SCoreDreamFont">
          <div className="navnav">
            <Link className="align" to="/">
              <img src="./assets/crowdysymbol.png" alt="" />
              <span className="ali">크라우디</span>
            </Link>
            <Link className="align" to="/">
              <div className="link">홈</div>
            </Link>
            <Link className="align" to="/magazine">
              <div className="link">매거진</div>
            </Link>
            <Link className="align" to="/inquire">
              <div className="link nowPageColor">문의하기</div>
            </Link>
          </div>
        </nav>

        {/* section one */}
        <div className="section01 SCoreDreamFont">
          <div className="desc">
            <div className="title">
              <span>&nbsp;</span>
              <span>문의하기</span>
            </div>
            <div className="descs">
              <span>궁금한 사항은 </span>
              <span>직접 크라우디 팀에게 전달해 주세요</span>
            </div>
          </div>
        </div>

        {/* section two */}
        <div className="section02 SCoreDreamFont">
          <div className="inquireBox">
            <div className="inquires inqKakao">
              <div className="imgBox">
                <img src="./assets/Inquire/kakao.png" alt="" />
              </div>
              <div className="inquireTitle">카카오톡</div>
              <div className="inquireDesc">
                <a target="_blank" href="http://pf.kakao.com/_xgyHYb/chat">
                  http://pf.kakao.com/_xgyHYb/chat
                </a>
              </div>
            </div>
            <div className="inquires inqMail">
              <div className="imgBox">
                <img src="./assets/Inquire/mail.png" alt="" />
              </div>
              <div className="inquireTitle">이메일</div>
              <div className="inquireDesc">crowdy2022@gmail.com</div>
            </div>
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

export default Inquire;
