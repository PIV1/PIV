export default function Home() {
  const sectionStyle = {
    marginTop: "56px",
    paddingTop: "8px",
  };

  const cardStyle = {
    backgroundColor: "#f3f6f4",
    border: "1px solid #dfe7e2",
    borderRadius: "18px",
    padding: "24px",
    marginTop: "20px",
  };

  const buttonPrimary = {
    display: "inline-block",
    backgroundColor: "#1f3d2b",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: "20px",
    marginRight: "12px",
  };

  const buttonSecondary = {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#1f3d2b",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "15px",
    border: "1px solid #cfd8d2",
    marginTop: "20px",
  };

  const statStyle = {
    flex: "1 1 220px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe7e2",
    borderRadius: "18px",
    padding: "22px",
  };

  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios";

  const socialIconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fcfcfb",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "36px 24px 72px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "24px",
            borderBottom: "1px solid #e5e7eb",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/logo-piv.png"
              alt="Logotipo PIV"
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                }}
              >
                PIV
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  marginTop: "6px",
                }}
              >
                Proyectos Inmobiliarios de Valor
              </div>
            </div>
          </div>

          <nav style={{ fontSize: "14px", color: "#374151" }}>
            <a
              href="#vallegrand"
              style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}
            >
              Vallegrand
            </a>
            <a
              href="#nosotros"
              style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Contacto
            </a>
          </nav>
        </header>

        <section
          style={{
            paddingTop: "64px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "#1f3d2b",
              backgroundColor: "#e8f3ed",
              padding: "8px 14px",
              borderRadius: "999px",
              marginBottom: "20px",
            }}
          >
            Generamos valor para tu inversión
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.08",
              margin: "0 0 18px",
              maxWidth: "900px",
            }}
          >
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor y ejecución disciplinada.
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#4b5563",
              maxWidth: "860px",
              margin: 0,
            }}
          >
            Identificamos oportunidades, estructuramos proyectos y los llevamos a ejecución con un objetivo claro:
            crear desarrollos sólidos con alto potencial de valorización.
          </p>

          <div style={{ marginTop: "18px" }}>
            <a
              href="https://www.vallegrand.com"
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Conocer proyecto Vallegrand
            </a>

            <a href="#contacto" style={buttonSecondary}>
              Contacto
            </a>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Resultados que respaldan nuestra ejecución
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#4b5563",
              maxWidth: "860px",
            }}
          >
            Nuestro primer desarrollo, Vallegrand, valida nuestra capacidad de estructuración, ejecución y
            comercialización en proyectos reales.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              marginTop: "24px",
            }}
          >
            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Primera etapa vendida en su totalidad
              </div>
            </div>

            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Segunda etapa urbanizada
              </div>
            </div>

            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                20%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Segunda etapa ya comercializada
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={{ margin: 0, fontSize: "17px", lineHeight: "1.8", color: "#374151" }}>
              Adicionalmente, Vallegrand se distingue por un estándar de calidad de obra superior al promedio dentro
              de su categoría, reflejando una ejecución cuidada en cada detalle. Estos resultados expresan una
              propuesta sólida, una respuesta positiva del mercado y una disciplina operativa consistente.
            </p>
          </div>
        </section>

        <section id="vallegrand" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>Vallegrand</h2>
          <p style={{ fontSize: "15px", color: "#6b7280", marginTop: 0 }}>Xalisco, Nayarit</p>

          <div style={cardStyle}>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#374151", marginTop: 0 }}>
              Vallegrand es un desarrollo de lotes urbanizados con fines habitacionales, estructurado en cuatro etapas
              y concebido bajo un enfoque de generación de valor desde su origen.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563" }}>
              El proyecto combina planeación estratégica, ejecución eficiente y una sólida aceptación comercial.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563" }}>
              Dentro de su segmento, destaca por un estándar de calidad de obra por encima del promedio, lo que
              fortalece su posicionamiento y su potencial de valorización.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563", marginBottom: 0 }}>
              Representa el primer proyecto de PIV y establece la base para el crecimiento y consolidación de futuros
              desarrollos.
            </p>

            <a
              href="https://www.vallegrand.com"
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Conocer más
            </a>
          </div>
        </section>

        <section id="nosotros" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Acerca de nosotros</h2>
          <div style={cardStyle}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#374151", marginTop: 0 }}>
              PIV es una firma enfocada en el desarrollo de proyectos inmobiliarios con una visión clara: generar valor
              a través de la planeación, la ejecución y la disciplina operativa.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563", marginBottom: 0 }}>
              Cada proyecto es estructurado con un enfoque estratégico, priorizando su viabilidad, su potencial de
              valorización y su correcta ejecución en el tiempo.
            </p>
          </div>
        </section>

        <section id="contacto" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Contacto</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Correo</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>hola@piv.one</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Teléfono</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>+52 311 466 9798</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>WhatsApp</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>+52 311 108 1887</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Oficina</div>
              <div style={{ fontSize: "17px", lineHeight: "1.8", color: "#111827" }}>
                Av. Palomas #196
                <br />
                Col. Las Palomas
                <br />
                Xalisco, Nayarit
              </div>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={buttonPrimary}
          >
            Contactar por WhatsApp
          </a>
        </section>

        <footer
          style={{
            marginTop: "72px",
            paddingTop: "28px",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "14px",
            color: "#6b7280",
            alignItems: "center",
          }}
        >
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={socialIconStyle}
              >
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instagramGradient)"
                  d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5z"
                />
                <circle cx="12" cy="12" r="3.2" fill="#ffffff" />
                <circle cx="16.9" cy="7.1" r="1.1" fill="#ffffff" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={socialIconStyle}
              >
                <path
                  fill="#1877F2"
                  d="M24 12a12 12 0 10-13.88 11.85v-8.39H7.08V12h3.04V9.41c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0024 12z"
                />
                <path
                  fill="#ffffff"
                  d="M16.65 15.46L17.18 12h-3.32V9.8c0-.95.46-1.87 1.95-1.87h1.51V4.98s-1.37-.23-2.68-.23c-2.73 0-4.52 1.65-4.52 4.66V12H7.08v3.46h3.04v8.39a12.1 12.1 0 003.74 0v-8.39h2.79z"
                />
              </svg>
            </a>

            <a
              href="/privacidad"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Aviso de Privacidad
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
