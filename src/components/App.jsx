import React from "react";
import Hours from "./Hours";
import Minute from "./Minute";
import Second from "./Second";
import Ampm from "./Ampm";
import Today from "./Today";
function App() {
  return (
    <div>
      <div className="frame">
        <Hours />
        <span className="blink">:</span>
        <Minute />
        <span className="blink">:</span>
        <Second />
        <Ampm />
        <Today />
      </div>
      <a
        className="rgd"
        href="https://www.instagram.com/developer_rgd/"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-instagram insta"></i> RGD
      </a>
    </div>
  );
}
export default App;
