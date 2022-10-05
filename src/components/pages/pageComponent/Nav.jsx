import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyle.scss";

const NAV = () => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  return (
    <div className="App">
      <nav className="SCoreDreamFont">
        <div className="navnav">
          <Link className="align" to="/">
            <img src="./assets/crowdysymbol.png" alt="" />
            <span>크라우디</span>
          </Link>
          <Link className="align" to="/">
            <div className="link nowPageColor">홈</div>
          </Link>
          <Link className="align" to="/magazine">
            <div className="link">매거진</div>
          </Link>
          <Link className="align" to="/inquire">
            <div className="link">문의하기</div>
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
                <span className="nowPageColor">홈</span>
              </li>
            </Link>
            <Link to="/magazine">
              <li>
                <span>매거진</span>
              </li>
            </Link>
            <Link to="/inquire">
              <li>
                <span>문의하기</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div
        className={isOpen ? "showModal" : "hideModal"}
        onClick={() => toggleMenu()}
      ></div>
    </div>
  );
};

export default NAV;
