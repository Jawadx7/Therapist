import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Therapists from "./Pages/Therapists/Therapists";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("green");

  const openNav = () => {
    setActive(0);
  };
  const closeNav = () => {
    setActive("-100%");
  };

  return (
    <Router>
      <Header active={active} openNav={openNav} closeNav={closeNav} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="therapists" element={<Therapists />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
