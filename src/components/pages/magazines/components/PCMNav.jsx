import React from "react";
import { Link } from "react-router-dom";
import "./PCMNav.scss";

const PCMNav = () => {
  return (
    <div className="pcmnav">
      <nav className="SCoreDreamFont">
        <div className="mnavnav">
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
            <div className="link">문의하기</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default PCMNav;
