import React from "react";

function DailyForecast({ data, unit }) {
  return (

    <ul className="days" role="list">
      {data.map((day, i) => (
        <li key={i} className="day">
          <span className="label">{day.day}</span>
          <img src={`/assets/${day.icon}.svg`} alt="" className="day-icon" />
          <span className="max">{day.max}°{unit}</span>
          <span className="min">{day.min}°{unit}</span>
        </li>
      ))}
    </ul>
  );
}

export default DailyForecast;
