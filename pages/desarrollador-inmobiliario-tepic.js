export default function SEOPage() {
  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20sus%20proyectos%20inmobiliarios";

  const sectionStyle = {
    marginTop: "48px",
    maxWidth: "900px",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fcfcfb",
        color: "#111827",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "40px" }}>
          Desarrollador inmobiliario en Tepic y Nayarit
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563" }}>
          En PIV somos un desarrollador inmobiliario enfocado en la planeación,
          estructuración y ejecución de proyectos de alto valor en Tepic,
          Xalisco y el estado de Nayarit.
        </p>

        {/* SECCIÓN 1 */}
        <section style={sectionStyle}>
          <h2>Proyectos inmobiliarios en Tepic y Xalisco</h2>
          <p>
            Desarrollamos proyectos inmobiliarios con un enfoque estratégico,
            priorizando la viabilidad, el potencial de valorización y una
            ejecución disciplinada.
          </p>

          <p>
            Nuestro objetivo es crear desarrollos sólidos que representen una
            oportunidad real de inversión para nuestros clientes.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section style={sectionStyle}>
          <h2>Inversión en terrenos y lotes urbanizados en Nayarit</h2>
          <p>
            La inversión en terrenos en Tepic y Xalisco representa una de las
            oportunidades más relevantes dentro del mercado inmobiliario en
            Nayarit.
          </p>

          <p>
            En PIV identificamos ubicaciones con alto potencial de crecimiento y
            desarrollamos proyectos que generan valor desde su concepción.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section style={sectionStyle}>
          <h2>Desarrollo inmobiliario con enfoque en valor</h2>
          <p>
            Cada proyecto es estructurado bajo un análisis estratégico que
            considera factores urbanos, comerciales y financieros, asegurando su
            correcta ejecución.
          </p>

          <p>
            Nuestro enfoque combina planeación, disciplina operativa y calidad
            constructiva por encima del estándar del mercado.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section style={sectionStyle}>
          <h2>Experiencia comprobada en Nayarit</h2>
          <p>
            Vallegrand, nuestro primer desarrollo en Xalisco, Nayarit, valida
            nuestra capacidad de ejecución, comercialización y generación de
            valor en proyectos reales.
          </p>

          <p>
            Este proyecto refleja una propuesta sólida y una respuesta positiva
            del mercado.
          </p>
        </section>

        {/* CTA */}
        <section style={{ marginTop: "60px" }}>
          <h2>Contacto</h2>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#25D366",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            Contactar por WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
