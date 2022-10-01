// import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Intro from "./components/pages/Intro";
import Home from "./components/pages/Home";
import Magazine from "./components/pages/magazine";
import Inquire from "./components/pages/Inquire";

// Magazine Pages
// import LeReve from "./components/pages/Lereve";
import Yenani from "./components/pages/magazines/yenani";
import TDLCoffee from "./components/pages/magazines/tdlcofee";

// Components
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* /intro */}
        <Route path="/" element={<Intro />} />
        {/* /home */}
        <Route path="/home" element={<Home />} />
        {/* LeLeve */}
        {/* <Route path="/lereve" element={<LeReve />} /> */}
        {/* Magazine */}
        <Route path="/magazine" element={<Magazine />} />
        {/* Inquire */}
        <Route path="/inquire" element={<Inquire />} />

        {/* Magazines */}
        <Route path="/yenani" element={<Yenani />} />
        <Route path="/tenderly" element={<TDLCoffee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
