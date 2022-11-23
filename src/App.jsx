import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Intro from "./components/pages/Intro";
import Home from "./components/pages/Home";
import Magazine from "./components/pages/magazine";
import Inquire from "./components/pages/Inquire";

// Magazine Pages
import Yenani from "./components/pages/magazines/yenani";
import TDLCoffee from "./components/pages/magazines/tdlcofee";
import AtTheMoment from "./components/pages/magazines/atthemoment";
import GeeksYeonnam from "./components/pages/magazines/geeksyeonnam";
import Pyojeong from "./components/pages/magazines/pyojeong";
import Jamjam from "./components/pages/magazines/jamjam";
import Cafededaeng from "./components/pages/magazines/cafededaeng";
import Underfloor from "./components/pages/magazines/underfloor";

// Test page
import Test from "./components/pages/magazines/test";
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
        {/* Magazine */}
        <Route path="/magazine" element={<Magazine />} />
        {/* Inquire */}
        <Route path="/inquiry" element={<Inquire />} />

        {/* Wrong path */}
        <Route path="/*" element={<Intro />} />

        {/* Magazines */}
        <Route path="/yenani" element={<Yenani />} />
        <Route path="/tenderly" element={<TDLCoffee />} />
        <Route path="/atthemoment" element={<AtTheMoment />} />
        <Route path="/geeksyeonnam" element={<GeeksYeonnam />} />
        <Route path="/pyojeong" element={<Pyojeong />} />
        <Route path="/jamjam" element={<Jamjam />} />
        <Route path="/cafededaeng" element={<Cafededaeng />} />
        <Route path="/underfloor" element={<Underfloor />} />

        {/* Magazine Test */}
        <Route path="magazinetestpage" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
