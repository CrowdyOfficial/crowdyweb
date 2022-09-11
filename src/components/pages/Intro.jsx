import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="App">
      <div className="background">
        <div className="welcome">
          <img src="assets/crowdysymbol-white.png" alt="crowdy" />

          <h1>Welcome Crowdy</h1>
          <br />
          <Link to={"/lereve"}>
            <h2>LeReve Magazine</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
