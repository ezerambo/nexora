import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">N</span>
          <span>NEXORA</span>
        </div>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#precios">Precios</a>
        </nav>

        <button className="login-button">
          Iniciar sesión
        </button>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-content">
            <div className="badge">
              ✨ Potenciado por inteligencia artificial
            </div>

            <h1>
              Convertí tu idea
              <span> en un negocio.</span>
            </h1>

            <p>
              Contanos qué querés crear y NEXORA te ayudará a
              transformar tu idea en un negocio con estrategia,
              marca, marketing y un plan para empezar.
            </p>

            <div className="idea-box">
              <textarea
                placeholder="💡 Ej: Quiero vender ropa deportiva online..."
                rows="4"
              />

              <button className="create-button">
                🚀 Crear mi negocio
              </button>
            </div>

            <div className="idea-help">
              <span>¿No tenés una idea todavía?</span>
              <button>Encontrar una oportunidad →</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="business-card">
              <div className="card-top">
                <span>✨ NEXORA AI</span>
                <span className="status">● Online</span>
              </div>

              <div className="card-icon">
                🚀
              </div>

              <h3>
                Tu próxima empresa
              </h3>

              <p>
                De una idea a un negocio real.
              </p>

              <div className="progress">
                <div className="progress-label">
                  <span>Construyendo negocio</span>
                  <strong>78%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>

              <div className="mini-items">
                <div>✓ Estrategia</div>
                <div>✓ Marca</div>
                <div>✓ Marketing</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="features"
        >
          <div className="section-heading">
            <span>TODO EN UN SOLO LUGAR</span>

            <h2>
              De la idea al negocio.
            </h2>

            <p>
              NEXORA te acompaña durante todo el proceso.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">💡</div>

              <h3>Tu idea</h3>

              <p>
                Contanos qué querés crear y analizamos
                automáticamente tu oportunidad.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🎯</div>

              <h3>Tu estrategia</h3>

              <p>
                Descubrí quién es tu cliente, cómo
                diferenciarte y cómo ganar dinero.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🎨</div>

              <h3>Tu marca</h3>

              <p>
                Generá nombres, identidad, propuesta
                de valor y contenido para tu negocio.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🚀</div>

              <h3>Tu lanzamiento</h3>

              <p>
                Obtené un plan concreto para pasar
                de la idea a tus primeros clientes.
              </p>
            </article>
          </div>
        </section>

        <section
          id="precios"
          className="cta-section"
        >
          <div>
            <span>EL COMIENZO DE ALGO GRANDE</span>

            <h2>
              Tu próxima idea puede cambiarlo todo.
            </h2>

            <p>
              NEXORA está diseñada para ayudarte a
              convertir una idea en una oportunidad real.
            </p>
          </div>

          <button className="cta-button">
            Empezar ahora →
          </button>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-icon">N</span>
          <span>NEXORA</span>
        </div>

        <p>
          © 2026 NEXORA. Convertí ideas en negocios.
        </p>
      </footer>
    </div>
  );
}

export default App;