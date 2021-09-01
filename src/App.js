import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <FrontPage />
      </Fragment>
    </div>
  );
}

export default App;

{
  /** 
  THIS IS USED FOR ADDING SOME SCROLL BARS TO TEST THE NAV BAR

<div style={{ overflowY: "scroll", height: "800px" }}></div>*/
}
