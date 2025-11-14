import React from "react";

function Header({ unit, toggleUnit, onSearch }) {
  return (
    <header className="site-header" role="banner">
      <div className="header-wrap">
        <h1 className="brand" aria-label="Aplicación del Clima">
          <img src="/assets/sun.svg" alt="" className="brand-icon" aria-hidden="true" />
          <span>CLIMA</span>
        </h1>

        <form className="search" onSubmit={onSearch}>
          <label htmlFor="q" className="visually-hidden">Buscar ciudad o código postal</label>
          <input id="q" name="q" type="search" placeholder="Buscar ciudad o código postal" autoComplete="off" />
          <div className="hint">Ej.: Cancún, 77500</div>
          <button type="submit" className="btn">Buscar</button>
        </form>

        <div className="toggles">
          <button className="btn btn-ghost" onClick={toggleUnit}>
            {unit === "C" ? "°C / °F" : "°F / °C"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;




