import React from "react";

function WeatherCard({ data, unit }) {
  return (
    <article className="card card-current">
      <div className="card-header">
        <img src={`/assets/${data.icon}.svg`} alt="" className="weather-icon" />
        <div>
          <h3 className="location">{data.location}</h3>
          <p className="meta">{data.description}</p>
        </div>
        <div className="temp">
          <span className="value">{data.temp}</span>
          <span className="unit">°{unit}</span>
        </div>
      </div>
      <div className="card-body">
        <dl className="kv">
          <div><dt>Sensación</dt><dd>{data.feels_like}°{unit}</dd></div>
          <div><dt>Humedad</dt><dd>{data.humidity}%</dd></div>
          <div><dt>Viento</dt><dd>{data.wind_speed} km/h</dd></div>
          <div><dt>UV</dt><dd>{data.uv}</dd></div>
          <div><dt>Presión</dt><dd>{data.pressure} hPa</dd></div>
          <div><dt>Visibilidad</dt><dd>{data.visibility} km</dd></div>
        </dl>
      </div>
    </article>
  );
}

export default WeatherCard;

