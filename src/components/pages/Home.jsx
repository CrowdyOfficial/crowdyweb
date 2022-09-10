import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      Home
      <br />
      <Link to={"/lereve"}>Lereve</Link>
    </div>
  );
};

export default Home;
