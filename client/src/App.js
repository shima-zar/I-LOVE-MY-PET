import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Button } from "./components/Button";
import Home from "./components/pages/Home";


function App() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact components=
          {Home}/>
        </Routes>
        <Link to="/meow" className="princpal--button">
          {/* {button && <Button buttonStyle="btn--outline">WooF</Button>} */}
        </Link>
      </Router>
    </>
  );
}

export default App;
