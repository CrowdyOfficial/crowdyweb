import React from "react";
import { Link } from "react-router-dom";

const MagazineMenu = (props) => {
  return (
    <div className="App SCoreDreamFont1">
      <div>
        <div className="magazineMenu">
          <Link to={props.to}>
            <div className="magazineLink">
              <img src={props.thumbnail} alt="" />
              <div className="magazineDesc">
                <div className="cafeName">{props.cafeName}</div>
                <div className="cafeDesc">{props.cafeDesc}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MagazineMenu;
