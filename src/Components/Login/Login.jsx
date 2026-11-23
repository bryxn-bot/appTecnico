import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [mensaje, setMensaje] = useState('');

  function iniciarSesion(e) {
    e.preventDefault();
    setMensaje('El formulario está listo. Falta conectarlo al backend.');
  }

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link className="auth-brand notranslate" to="/" translate="no">
          <span className="auth-logo">F</span>
          <span>FIXIT</span>
        </Link>

        <Link className="auth-home-link" to="/">
          Volver al inicio
        </Link>
      </header>

      <section className="auth-card">
        <span className="auth-label">BIENVENIDO A FIXIT</span>
        <h1>Inicia sesión</h1>
        <p className="auth-description">
          Accede al asistente virtual y a los conocimientos de otros técnicos.
        </p>

        <form onSubmit={iniciarSesion}>
          <label htmlFor="login-correo">Correo electrónico</label>
          <input
            id="login-correo"
            name="correo"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            autoComplete="email"
            required
          />

          <label htmlFor="login-clave">Contraseña</label>
          <input
            id="login-clave"
            name="clave"
            type="password"
            placeholder="Tu contraseña"
            autoComplete="current-password"
            required
          />

          <button className="auth-submit" type="submit">
            Iniciar sesión
          </button>

          {mensaje && <p className="auth-message">{mensaje}</p>}
        </form>

        <p className="auth-switch">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </section>
    </main>
  );
}