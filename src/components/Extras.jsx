import React from "react";

function Extras() {
  return (
    <section aria-labelledby="extras-title" className="section extras">
      <div className="wrap">
        <h2 id="extras-title">Detalles adicionales</h2>
        <div className="grid-2">
          <article className="card">
            <h3>Alertas</h3>
            <p className="muted">Sin alertas activas.</p>
          </article>
          <article className="card">
            <h3>Mapa</h3>
            <div className="map-ph" role="img" aria-label="Marcador en el mapa">
              Mapa (placeholder)
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Extras;
