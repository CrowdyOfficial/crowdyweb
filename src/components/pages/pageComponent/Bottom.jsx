import React from "react";
import { Link } from "react-router-dom";
import "./BottomStyle.scss";

const Bottom = () => {
  return (
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
  );
};

export default Bottom;
