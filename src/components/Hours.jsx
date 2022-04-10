import React, { useState } from "react";
function Hours() {
  setInterval(updateHrs, 1000);
  const hours = new Date().getHours();
  const [hrs, setHrs] = useState(hours);
  function updateHrs() {
    const newHrs = new Date().getHours();
    setHrs(newHrs);
  }
  return (
    <span className="hrs">
      {hrs < 10 ? "0" + hours : hrs > 12 ? "0" + (hours - 12) : hours}
    </span>
  );
}

export default Hours;
