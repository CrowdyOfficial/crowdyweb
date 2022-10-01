import React, { useState } from "react";
import { Link } from "react-router-dom";

const MNav = () => {
  // Magazine's Navigation
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  // const nav = useNavigate();
  return (
    <div className="App">
      <nav id="nav" className="SCoreDreamFont">
        <div className="navnav">
          <Link className="align" to="/">
            <img src="./assets/crowdysymbol.png" alt="" />
            <span>크라우디</span>
          </Link>
          <Link className="align" to="/">
            <div className="link">홈</div>
          </Link>
          <Link className="align" to="/magazine">
            <div className="link nowPageColor">매거진</div>
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
    </div>
  );
};

export default MNav;
