import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Intro.scss";
import "../../style/Inquire.scss";

const Inquire = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  return (
    <div className="App">
      <div className="inquire">
        {/* Navigation */}
        <nav className="SCoreDreamFont">
          <div className="navnav">
            <Link className="align" to="/">
              <img src="./assets/crowdysymbol.png" alt="" />
              <span>크라우디</span>
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

          <div id="menu" onClick={() => toggleMenu()}>
            <span id="openButton">
              <img
                src={
                  isOpen
                    ? "./assets/icon/closeButton.png"
                    : "./assets/icon/openButton.png"
                }
                alt=""
              />
            </span>
          </div>
        </nav>

        <div id="topDownMenu" className={isOpen ? "showMenu" : "hideMenu"}>
          <div className="slideBarMenu SCoreDreamFont">
            <ul>
              <Link to="/">
                <li>
                  <span>홈</span>
                </li>
              </Link>
              <Link to="/magazine">
                <li>
                  <span>매거진</span>
                </li>
              </Link>
              <Link to="/inquire">
                <li>
                  <span className="nowPageColor">문의하기</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div
          className={isOpen ? "showModal" : "hideModal"}
          onClick={() => toggleMenu()}
        ></div>

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
                <img src="./assets/Inquire/kakao.png" alt="" />
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
