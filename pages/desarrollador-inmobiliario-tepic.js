export default function SEOPage() {
  const sectionStyle = {
    marginTop: "56px",
  };

  const cardStyle = {
    backgroundColor: "#f3f6f4",
    border: "1px solid #dfe7e2",
    borderRadius: "18px",
    padding: "24px",
    marginTop: "20px",
  };

  const whatsappButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#25D366",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "15px",
    marginTop: "20px",
  };

  const socialIconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
  };

  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios";

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
        {/* HEADER */}
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
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
              color: "#111827",
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
          </a>

          <nav style={{ fontSize: "14px", color: "#374151" }}>
            <a href="/" style={{ marginRight: "18px", textDecoration: "none" }}>
              Inicio
            </a>
            <a href="/#nosotros" style={{ marginRight: "18px", textDecoration: "none" }}>
              Nosotros
            </a>
            <a href="/#contacto" style={{ textDecoration: "none" }}>
              Contacto
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section style={{ paddingTop: "64px" }}>
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
            Oportunidades inmobiliarias en Tepic, Xalisco y Nayarit
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.08",
              margin: "0 0 18px",
            }}
          >
            Desarrollador inmobiliario en Tepic y Nayarit
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#4b5563",
              maxWidth: "900px",
            }}
          >
            En{" "}
            <a href="/" style={{ color: "#1f3d2b", fontWeight: "600" }}>
              PIV
            </a>{" "}
            somos un desarrollador inmobiliario enfocado en la planeación,
            estructuración y ejecución de proyectos de alto valor en Tepic,
            Xalisco y el estado de Nayarit.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" style={whatsappButtonStyle}>
            WhatsApp
          </a>
        </section>

        {/* SECCIONES */}
        <section style={sectionStyle}>
          <h2>Proyectos inmobiliarios en Tepic y Xalisco</h2>
          <div style={cardStyle}>
            <p>
              Desarrollamos proyectos inmobiliarios con un enfoque estratégico,
              priorizando la viabilidad, el potencial de valorización y una ejecución disciplinada.
            </p>
            <p>
              Nuestro objetivo es crear desarrollos sólidos que representen una
              oportunidad real de inversión.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Inversión en terrenos y lotes urbanizados en Nayarit</h2>
          <div style={cardStyle}>
            <p>
              La inversión en terrenos en Tepic y Xalisco representa una de las
              oportunidades más relevantes dentro del mercado inmobiliario.
            </p>
            <p>
              Identificamos ubicaciones con alto potencial y desarrollamos
              proyectos que generan valor desde su concepción.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Desarrollo inmobiliario con enfoque en valor</h2>
          <div style={cardStyle}>
            <p>
              Cada proyecto es estructurado bajo un análisis estratégico que
              considera factores urbanos, comerciales y financieros.
            </p>
            <p>
              Combinamos planeación, disciplina operativa y calidad constructiva.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Experiencia comprobada en Nayarit</h2>
          <div style={cardStyle}>
            <p>
              Vallegrand valida nuestra capacidad de ejecución y generación de valor
              en desarrollos inmobiliarios.
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section style={{ marginTop: "60px" }}>
          <h2>Contacto</h2>
          <div style={cardStyle}>
            <p>
              Si buscas invertir en terrenos en Tepic y Nayarit, estamos listos
              para ayudarte.
            </p>

            <a href={whatsappLink} target="_blank" rel="noreferrer" style={whatsappButtonStyle}>
              Contactar por WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
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
          }}
        >
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noreferrer"
            >
              <span>Facebook</span>
            </a>

            <a href="/privacidad">Aviso de Privacidad</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
