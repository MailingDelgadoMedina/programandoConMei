import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <div style={{ overflowY: "scroll", height: "800px" }}></div>
      </Fragment>
    </div>
  );
}

export default App;
