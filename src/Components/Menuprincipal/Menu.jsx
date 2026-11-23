import { useState } from 'react';
import fondoRegistro from '../../assets/tecnico-registro.jpg';
import './Menu.css';

const categorias = [
  'Electricidad',
  'Soporte',
  'Instalación',
  'Mantenimiento',
  'Orientación',
];

const beneficios = [
  {
    numero: '01',
    icono: '⌁',
    titulo: 'Diagnóstico guiado',
    texto: 'Organiza los síntomas y revisa posibles causas paso a paso.',
  },
  {
    numero: '02',
    icono: '▤',
    titulo: 'Orientación técnica',
    texto: 'Consulta procedimientos y recibe ayuda para continuar con tu tarea.',
  },
  {
    numero: '03',
    icono: '↗',
    titulo: 'Aprendizaje práctico',
    texto: 'Refuerza tus conocimientos mientras buscas resolver cada problema.',
  },
];

const pasos = [
  'Describe la falla o tu consulta',
  'Revisa las indicaciones del asistente',
  'Aplica los pasos y comprueba el resultado',
];

export default function MenuPrincipal() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [loginAbierto, setLoginAbierto] = useState(false);
  const [registroAbierto, setRegistroAbierto] = useState(false);
  const [mensajeLogin, setMensajeLogin] = useState('');
  const [mensajeRegistro, setMensajeRegistro] = useState('');

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  function abrirLogin() {
    cerrarMenu();
    setRegistroAbierto(false);
    setMensajeLogin('');
    setLoginAbierto(true);
  }

  function abrirRegistro() {
    setLoginAbierto(false);
    setMensajeRegistro('');
    setRegistroAbierto(true);
  }

  function volverInicio() {
    setRegistroAbierto(false);
    setLoginAbierto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (registroAbierto) {
    return (
      <main className="registro-page">
        <header className="registro-header">
          <a
            className="fixit-brand"
            href="#inicio"
            onClick={volverInicio}
            translate="no"
          >
            <span className="fixit-logo">F</span>
            <span className="fixit-brand-name">FIXIT</span>
          </a>

          <p>
            ¿Ya tienes cuenta?{' '}
            <button type="button" onClick={abrirLogin}>
              Inicia sesión
            </button>
          </p>
        </header>

        <section className="registro-card">
          <span className="fixit-section-label">ÚNETE A LA COMUNIDAD</span>
          <h1>Crea tu cuenta</h1>
          <p className="registro-intro">
            Regístrate para acceder al asistente virtual y compartir
            conocimientos con otros técnicos.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMensajeRegistro(
                'El formulario está listo. Falta conectarlo al backend.'
              );
            }}
          >
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
              minLength={8}
              required
            />

            <button className="fixit-primary-button registro-submit" type="submit">
              Crear cuenta <span aria-hidden="true">→</span>
            </button>

            {mensajeRegistro && (
              <p className="form-message">{mensajeRegistro}</p>
            )}
          </form>

          <button
            className="registro-back-link"
            type="button"
            onClick={volverInicio}
          >
            ← Volver a FIXIT
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="fixit">
      <header className="fixit-header">
        <a className="fixit-brand" href="#inicio" onClick={cerrarMenu} translate="no">
          <span className="fixit-logo">F</span>
          <span className="fixit-brand-name">FIXIT</span>
        </a>

        <nav
          className={`fixit-nav ${menuAbierto ? 'fixit-nav-abierto' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="#servicios" onClick={cerrarMenu}>Áreas</a>
          <a href="#proceso" onClick={cerrarMenu}>Proceso</a>
          <a href="#nosotros" onClick={cerrarMenu}>Beneficios</a>
        </nav>

        <button
          className="fixit-login-button"
          type="button"
          onClick={abrirLogin}
        >
          Iniciar sesión
        </button>

        <button
          className="fixit-menu-toggle"
          type="button"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? '×' : '☰'}
        </button>
      </header>

      <section className="fixit-hero" id="inicio">
        <div className="fixit-hero-content">
          <span className="fixit-eyebrow">
            <span className="fixit-indicator" />
            AYUDA RÁPIDA PARA TÉCNICOS Y PRACTICANTES
          </span>

          <h1>
            Resuelve problemas
            <br />
            técnicos más
            <br />
            <span>rápido.</span>
          </h1>

          <p className="fixit-description">
            Describe la falla o tarea que tienes y recibe orientación paso a
            paso de nuestro asistente virtual.
          </p>

          <div className="fixit-actions">
            <button
              className="fixit-primary-button"
              type="button"
              onClick={abrirLogin}
            >
              Contactar <span aria-hidden="true">→</span>
            </button>

            <a className="fixit-secondary-button" href="#servicios">
              Ver áreas de ayuda
            </a>
          </div>
        </div>
        <div className="fixit-bottom-label">
          <span>ORIENTACIÓN PARA EL TRABAJO TÉCNICO</span>
          <span>IDEAL PARA TÉCNICOS Y PRACTICANTES</span>
        </div>
      </section>

      <nav
        className="fixit-categories"
        id="servicios"
        aria-label="Áreas técnicas"
      >
        {categorias.map((categoria) => (
          <a href="#proceso" key={categoria}>
            {categoria}
          </a>
        ))}
      </nav>

      <section className="fixit-benefits" id="nosotros">
        <div className="fixit-benefits-heading">
          <div>
            <span className="fixit-section-label">
              AYUDA TÉCNICA EN UN SOLO LUGAR
            </span>
            <h2>
              Menos tiempo buscando.
              <br />
              Más problemas resueltos.
            </h2>
          </div>

          <p>
            Orientación práctica para técnicos y practicantes que necesitan
            avanzar con su trabajo.
          </p>
        </div>

        <div className="fixit-benefits-grid">
          {beneficios.map((beneficio) => (
            <article className="fixit-benefit" key={beneficio.numero}>
              <span className="fixit-benefit-icon">{beneficio.icono}</span>
              <span className="fixit-card-number">{beneficio.numero}</span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fixit-process" id="proceso">
        <div className="fixit-process-card">
          <span className="fixit-section-label">ASISTENCIA PASO A PASO</span>
          <div className="fixit-process-circle">
            <span />
          </div>
          <h3>
            Describe.
            <br />
            Revisa.
            <br />
            Resuelve.
          </h3>
        </div>

        <div className="fixit-process-copy">
          <span className="fixit-section-label">UN FLUJO SENCILLO</span>
          <h2>De la duda a una posible solución.</h2>
          <p>
            Explica qué ocurre con tu equipo y recibe orientación para analizar
            el problema y decidir qué hacer después.
          </p>

          <ol className="fixit-steps">
            {pasos.map((paso, index) => (
              <li key={paso}>
                <span>0{index + 1}</span>
                {paso}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fixit-highlights" aria-label="Características de FIXIT">
        <div>
          <strong>Asistente virtual</strong>
          <span>Orientación para tus consultas</span>
        </div>
        <div>
          <strong>Varias áreas técnicas</strong>
          <span>Ayuda para diferentes tipos de tareas</span>
        </div>
        <div>
          <strong>Paso a paso</strong>
          <span>Indicaciones claras para avanzar</span>
        </div>
      </section>

      <section className="fixit-join" id="contacto">
        <div>
          <span className="fixit-section-label">EMPIEZA AQUÍ</span>
          <h2>
            Tu próxima solución
            <br />
            empieza con una consulta.
          </h2>
        </div>

        <div className="fixit-join-action">
          <p>
            Inicia sesión para acceder al asistente virtual y a los
            conocimientos compartidos por otros técnicos.
          </p>
          <button
            className="fixit-primary-button"
            type="button"
            onClick={abrirLogin}
          >
            Iniciar sesión <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <footer className="fixit-footer">
        <a className="fixit-brand" href="#inicio" translate="no">
          <span className="fixit-logo">F</span>
          <span className="fixit-brand-name">FIXIT</span>
        </a>

        <span>Orientación técnica para seguir avanzando.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {loginAbierto && (
        <div
          className="fixit-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLoginAbierto(false);
          }}
        >
          <section
            className="fixit-login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-titulo"
          >
            <button
              className="fixit-modal-close"
              type="button"
              aria-label="Cerrar"
              onClick={() => setLoginAbierto(false)}
            >
              ×
            </button>

            <span className="fixit-section-label">BIENVENIDO A FIXIT</span>
            <h2 id="login-titulo">Inicia sesión</h2>
            <p>
              Ingresa a tu cuenta para acceder al asistente y a la comunidad
              técnica.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMensajeLogin(
                  'El formulario está listo. Falta conectarlo al backend.'
                );
              }}
            >
              <label htmlFor="login-correo">Correo electrónico</label>
              <input
                id="login-correo"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
                required
              />

              <label htmlFor="login-clave">Contraseña</label>
              <input
                id="login-clave"
                type="password"
                placeholder="Tu contraseña"
                autoComplete="current-password"
                required
              />

              <button className="fixit-primary-button login-submit" type="submit">
                Entrar <span aria-hidden="true">→</span>
              </button>

              {mensajeLogin && <p className="form-message">{mensajeLogin}</p>}

              <p className="fixit-register-prompt">
                ¿No tienes cuenta?{' '}
                <button type="button" onClick={abrirRegistro}>
                  Regístrate
                </button>
              </p>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}