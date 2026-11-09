import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Eid from "./pages/Eid";
import Kodaikanal from "./pages/Kodaikanal";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Day30 from "./pages/Day30";

const App=()=> {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Day30" element={<Day30 />} />
        <Route path="/eid" element={<Eid />} />
        <Route path="/kodaikanal" element={<Kodaikanal />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;