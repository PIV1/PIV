export default function SEOPage() {
  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20sus%20proyectos%20inmobiliarios";

  const sectionStyle = {
    marginTop: "48px",
    maxWidth: "900px",
  };

  const backLinkStyle = {
    display: "inline-block",
    marginBottom: "24px",
    color: "#1f3d2b",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
  };

  const buttonWhatsapp = {
    display: "inline-block",
    backgroundColor: "#25D366",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    marginTop: "20px",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fcfcfb",
        color: "#111827",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <a href="/" style={backLinkStyle}>
          ← Volver a PIV
        </a>

        <h1 style={{ fontSize: "40px", lineHeight: "1.15", marginBottom: "18px" }}>
          Desarrollador inmobiliario en Tepic y Nayarit
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4b5563", maxWidth: "900px" }}>
          En PIV somos un desarrollador inmobiliario enfocado en la planeación,
          estructuración y ejecución de proyectos de alto valor en Tepic,
          Xalisco y el estado de Nayarit.
        </p>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
            Proyectos inmobiliarios en Tepic y Xalisco
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Desarrollamos proyectos inmobiliarios con un enfoque estratégico,
            priorizando la viabilidad, el potencial de valorización y una
            ejecución disciplinada.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Nuestro objetivo es crear desarrollos sólidos que representen una
            oportunidad real de inversión para nuestros clientes.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
            Inversión en terrenos y lotes urbanizados en Nayarit
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            La inversión en terrenos en Tepic y Xalisco representa una de las
            oportunidades más relevantes dentro del mercado inmobiliario en
            Nayarit.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            En PIV identificamos ubicaciones con alto potencial de crecimiento y
            desarrollamos proyectos que generan valor desde su concepción.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
            Desarrollo inmobiliario con enfoque en valor
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Cada proyecto es estructurado bajo un análisis estratégico que
            considera factores urbanos, comerciales y financieros, asegurando su
            correcta ejecución.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Nuestro enfoque combina planeación, disciplina operativa y calidad
            constructiva por encima del estándar del mercado.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
            Experiencia comprobada en Nayarit
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Vallegrand, nuestro primer desarrollo en Xalisco, Nayarit, valida
            nuestra capacidad de ejecución, comercialización y generación de
            valor en proyectos reales.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Este proyecto refleja una propuesta sólida y una respuesta positiva
            del mercado.
          </p>
        </section>

        <section style={{ marginTop: "60px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>Contacto</h2>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={buttonWhatsapp}
          >
            Contactar por WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
