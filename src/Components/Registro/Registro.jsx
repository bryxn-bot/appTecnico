import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

export default function Registro() {
  const [mensaje, setMensaje] = useState('');

  function crearCuenta(e) {
    e.preventDefault();
    setMensaje('El formulario está listo. Falta conectarlo al backend.');
  }

  return (
    <main className="registro-page">
      <header className="registro-header">
        <Link className="registro-brand notranslate" to="/" translate="no">
          <span className="registro-logo">F</span>
          <span>FIXIT</span>
        </Link>

        <Link className="registro-home-link" to="/">
          Volver al inicio
        </Link>
      </header>

      <section className="registro-card">
        <span className="registro-label">ÚNETE A LA COMUNIDAD</span>
        <h1>Crea tu cuenta</h1>
        <p className="registro-description">
          Regístrate para acceder al asistente virtual y compartir
          conocimientos con otros técnicos.
        </p>

        <form onSubmit={crearCuenta}>
          <label htmlFor="registro-nombre">Nombre</label>
          <input
            id="registro-nombre"
            name="nombre"
            type="text"
            placeholder="Escribe tu nombre"
            autoComplete="name"
            required
          />

          <label htmlFor="registro-correo">Correo electrónico</label>
          <input
            id="registro-correo"
            name="correo"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            autoComplete="email"
            required
          />

          <label htmlFor="registro-clave">Contraseña</label>
          <input
            id="registro-clave"
            name="clave"
            type="password"
            placeholder="Crea una contraseña"
            autoComplete="new-password"
            minLength="8"
            required
          />

          <button className="registro-submit" type="submit">
            Crear cuenta
          </button>

          {mensaje && <p className="registro-message">{mensaje}</p>}
        </form>

        <p className="registro-switch">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </main>
  );
}