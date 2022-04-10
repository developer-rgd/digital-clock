import React, { useState } from "react";

function Today() {
  const dateOptions = {
    hours12: true,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  setInterval(updateDay, 1000);

  const today = new Date().toLocaleDateString("en-IN", dateOptions);
  const [day, setDay] = useState(today);
  function updateDay() {
    const newDay = new Date().toLocaleDateString("en-IN", dateOptions);
    setDay(newDay);
  }

  return <p className="today">{day}</p>;
}

export default Today;
