import React from "react";

function Ampm() {
  const hrs = new Date().getHours();
  return <span className="ampm">{hrs < 12 ? "AM" : "PM"}</span>;
}

export default Ampm;