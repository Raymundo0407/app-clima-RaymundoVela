import React, { useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import { weatherData } from "./data";
import "./estilos/index.css";

function App() {

  const [unit, setUnit] = useState(localStorage.getItem("unit") || "C");
  const [stage, setStage] = useState("loading");
  const [retries, setRetries] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [data, setData] = useState(weatherData);

  const toggleUnit = () => {
    const newUnit = unit === "C" ? "F" : "C";
    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (stage === "ready") setStage("loading");

    const newData = {
      ...data,
      current: {
        ...data.current,
        temp: Math.floor(Math.random() * 10) + 25,
        feels_like: Math.floor(Math.random() * 10) + 25,
        humidity: Math.floor(Math.random() * 50) + 50,
        wind_speed: Math.floor(Math.random() * 10) + 5,
      },
      hourly: data.hourly.map(h => ({
        ...h,
        deg: Math.floor(Math.random() * 10) + 25,
      })),
      daily: data.daily.map(d => ({
        ...d,
        max: Math.floor(Math.random() * 10) + 25,
        min: Math.floor(Math.random() * 5) + 20,
      }))
    };

    setTimeout(() => {
      setData(newData);
      if (stage === "loading") setStage("ready");
    }, 1500);
  };

  const handleRetry = () => {
    const newRetries = retries + 1;
    setRetries(newRetries);
    setStage("loading");

    setTimeout(() => {
      if (newRetries >= 2) setStage("offline");
      else setStage("error");
    }, 2000);
  };

  const handleOfflineContinue = () => setStage("ready");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setStage("loading");

    setTimeout(() => setStage("error"), 500);
  };

  if (showForm) {
    return (
      <section className="form-register">
        <h4>Formulario de Registro</h4>

        <form onSubmit={handleFormSubmit}>
          <input className="controls" type="text" placeholder="Nombre (opcional)" />
          <input className="controls" type="text" placeholder="Apellido (opcional)" />
          <input className="controls" type="email" placeholder="Correo (opcional)" />
          <input className="controls" type="password" placeholder="Contraseña (opcional)" />

          <p>
            Estoy de acuerdo con{" "}
            <button type="button" className="link-like">Términos y Condiciones</button>
          </p>

          <input className="botons" type="submit" value="Entrar" />
        </form>
      </section>
    );
  }

  return (
    <div className="layout">

      <Header unit={unit} toggleUnit={toggleUnit} onSearch={handleSearch} />

      <main className="wrap">

        {stage === "loading" && (
          <article className="card skeleton">
            <div className="skeleton-block h40"></div>
            <div className="skeleton-block h20"></div>
            <div className="skeleton-block h20"></div>
          </article>
        )}

        {stage === "error" && (
          <article className="card error-card">
            <h3>Error al cargar datos</h3>
            <p>No se pudo obtener la información meteorológica.</p>
            <button className="btn btn-retry" onClick={handleRetry}>
              Reintentar
            </button>
          </article>
        )}

        {stage === "offline" && (
          <article className="card offline-card">
            <h3>Sin conexión</h3>
            <p>No hay acceso a internet. Conéctate para actualizar el pronóstico.</p>
            <button className="btn btn-retry" onClick={handleOfflineContinue}>
              Continuar
            </button>
          </article>
        )}

        {(stage === "ready" ||
          stage === "loading" ||
          stage === "error" ||
          stage === "offline") && (
          <>
            <WeatherCard data={data.current} unit={unit} />
            <HourlyForecast data={data.hourly} unit={unit} />
            <DailyForecast data={data.daily} unit={unit} />
            <Extras />
          </>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default App;

