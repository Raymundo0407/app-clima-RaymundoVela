import React from "react";

export default function Formulario({ onEnter }) {
  return (
    <section className="form-register">
      <h4>Formulario de Registro</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onEnter();
        }}
      >
        <input className="controls" type="text" placeholder="Nombre" />
        <input className="controls" type="text" placeholder="Apellido" />
        <input className="controls" type="email" placeholder="Correo" />
        <input className="controls" type="password" placeholder="Contraseña" />

        <p>
          Estoy de acuerdo con{" "}
          <a href="#">Términos y Condiciones</a>
        </p>

        <input className="botons" type="submit" value="Entrar" />
      </form>

      <p><a href="#">¿Ya te registraste?</a></p>
    </section>
  );
}
