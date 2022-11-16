import React from "react";
import NAV from "./pageComponent/Nav";
import Bottom from "./pageComponent/Bottom";
import "../../style/Intro.scss";
import "../../style/Inquire.scss";

const Inquire = () => {
  return (
    <div className="App">
      <div className="inquire">
        <NAV></NAV>

        {/* section one */}
        <div className="section01 SCoreDreamFont">
          <div className="desc">
            <div className="title">
              <span>&nbsp;</span>
              <span>문의하기</span>
            </div>
            <div className="descs">
              <span>궁금한 사항은&nbsp;</span>
              <span>직접 크라우디 팀에게 전달해 주세요</span>
            </div>
          </div>
        </div>

        {/* section two */}
        <div className="section02 SCoreDreamFont">
          <div className="inquireBox">
            <div className="inquires inqKakao">
              <div className="imgBox">
                <img src="./assets/Inquire/kakao.webp" alt="" />
              </div>
              <div className="inquireTitle">카카오톡</div>
              <div className="inquireDesc">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://pf.kakao.com/_xgyHYb/chat"
                >
                  http://pf.kakao.com/_xgyHYb/chat
                </a>
              </div>
            </div>
            <div className="inquires inqMail">
              <div className="imgBox">
                <img src="./assets/Inquire/mail.webp" alt="" />
              </div>
              <div className="inquireTitle">이메일</div>
              <div className="inquireDesc">crowdy2022@gmail.com</div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Inquire;
