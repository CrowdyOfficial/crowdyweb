import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="App">
      <div className="background">
        <div className="welcome">
          <Link to={"/home"}>
            <img src="assets/crowdysymbol-white.png" alt="crowdy" />
          </Link>
          <h1>Welcome Crowdy</h1>
          <br />
          <h2>click icon</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
