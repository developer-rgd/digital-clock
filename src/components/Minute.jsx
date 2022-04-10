import React, { useState } from "react";
function Minute() {
  setInterval(updateMin, 1000);
  const minute = new Date().getMinutes();
  const [min, setMin] = useState(minute);
  function updateMin() {
        const newMin = new Date().getMinutes();
        setMin(newMin);
      }
  return <span className="min">{min < 10 ? "0" + min : min}</span>;
}
export default Minute;