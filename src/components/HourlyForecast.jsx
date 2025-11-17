import React from "react";

function HourlyForecast({ data, unit }) {
  return (
    <div className="scroller" role="list">
      {data.map((hour, i) => (
        <button key={i} className="chip" role="listitem" aria-label={`${hour.time} ${hour.deg} grados`}>
          <span className="time">{hour.time}</span>
          <img src={`/assets/${hour.icon}.svg`} alt="" className="chip-icon" />
          <span className="deg">{hour.deg}°{unit}</span>
        </button>
      ))}
    </div>
  );
}

export default HourlyForecast;
