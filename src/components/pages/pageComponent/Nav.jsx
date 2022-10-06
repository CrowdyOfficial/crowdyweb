import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyle.scss";
import { useLocation } from "react-router-dom";
const NAV = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  const getURL = useLocation();
  console.log(getURL.pathname);

  return (
    <div className="App">
      <nav className="SCoreDreamFont">
        <div className="navnav">
          <Link className="align" to="/">
            <img src="./assets/crowdysymbol.png" alt="" />
            <span>크라우디</span>
          </Link>
          <Link className="align" to="/">
            <div
              className={getURL.pathname === "/" ? "link nowPageColor" : "link"}
            >
              홈
            </div>
          </Link>
          <Link className="align" to="/magazine">
            <div
              className={
                getURL.pathname === "/magazine" ? "link" : "link nowPageColor"
              }
            >
              매거진
            </div>
          </Link>
          <Link className="align" to="/inquire">
            <div
              className={
                getURL.pathname === "/inquire" ? "link nowPageColor" : "link"
              }
            >
              문의하기
            </div>
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
                <span
                  className={
                    getURL.pathname === "/" ? "link nowPageColor" : "link"
                  }
                >
                  홈
                </span>
              </li>
            </Link>
            <Link to="/magazine">
              <li>
                <span
                  className={
                    getURL.pathname === "/magazine"
                      ? "link nowPageColor"
                      : "link"
                  }
                >
                  매거진
                </span>
              </li>
            </Link>
            <Link to="/inquire">
              <li>
                <span
                  className={
                    getURL.pathname === "/inquire"
                      ? "link nowPageColor"
                      : "link"
                  }
                >
                  문의하기
                </span>
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
