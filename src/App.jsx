import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Intro from "./components/pages/Intro";
import Home from "./components/pages/Home";

import LeReve from "./components/pages/magazine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /intro */}
        <Route path="/" element={<Intro />} />
        {/* /home */}
        <Route path="/home" element={<Home />} />
        {/* LeLeve */}
        <Route path="/lereve" element={<LeReve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
