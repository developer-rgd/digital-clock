import React, { useState } from "react";
function Second() {
  setInterval(updateSec, 1000);
  const second = new Date().getSeconds();
  const [sec, setSec] = useState(second);
  function updateSec() {
    const newSec = new Date().getSeconds();
    setSec(newSec);
  }
  return <span className="sec">{sec < 10 ? "0" + sec : sec}</span>;
}
export default Second;