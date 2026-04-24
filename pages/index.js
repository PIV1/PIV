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
    border: "none",
  };

  const statStyle = {
    flex: "1 1 220px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe7e2",
    borderRadius: "18px",
    padding: "22px",
  };

  const socialIconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
  };

  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios";

  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fcfcfb", color: "#111827" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "36px 24px 72px" }}>

        {/* HEADER */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src="/logo-piv.png" style={{ width: "64px" }} />
            <div>
              <div style={{ fontSize: "30px", fontWeight: "700" }}>PIV</div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>Proyectos Inmobiliarios de Valor</div>
            </div>
          </div>

          <nav>
            <a href="#vallegrand" style={{ marginRight: "18px" }}>Vallegrand</a>
            <a href="#nosotros" style={{ marginRight: "18px" }}>Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        {/* HERO */}
        <section style={{ paddingTop: "64px" }}>
          <h1 style={{ fontSize: "52px" }}>
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor.
          </h1>

          <p style={{ fontSize: "20px", color: "#4b5563" }}>
            Creamos desarrollos sólidos con alto potencial de valorización.
          </p>

          <a href="https://www.vallegrand.com" target="_blank" style={buttonPrimary}>
            Conocer Vallegrand
          </a>
        </section>

        {/* RESULTADOS */}
        <section style={sectionStyle}>
          <h2>Resultados</h2>

          <div style={{ display: "flex", gap: "18px", marginTop: "20px" }}>
            <div style={statStyle}>100% vendido etapa 1</div>
            <div style={statStyle}>100% urbanizado etapa 2</div>
            <div style={statStyle}>20% vendido etapa 2</div>
          </div>
        </section>

        {/* VALLEGRAND */}
        <section id="vallegrand" style={sectionStyle}>
          <h2>Vallegrand</h2>

          <div style={cardStyle}>
            <p>
              Vallegrand es un desarrollo de lotes urbanizados en Xalisco, Nayarit.
            </p>

            <a href="https://www.vallegrand.com" target="_blank" style={buttonPrimary}>
              Ver proyecto
            </a>
          </div>
        </section>

        {/* NOSOTROS (AQUÍ ESTÁ EL SEO 🔥) */}
        <section id="nosotros" style={sectionStyle}>
          <h2>Acerca de nosotros</h2>

          <div style={cardStyle}>
            <p>
              PIV es una firma enfocada en el desarrollo de proyectos inmobiliarios con una visión clara: generar valor
              a través de la planeación, la ejecución y la disciplina operativa. Como{" "}
              <a
                href="/desarrollador-inmobiliario-tepic"
                style={{ color: "#1f3d2b", fontWeight: "700", textDecoration: "underline" }}
              >
                desarrollador inmobiliario en Tepic
              </a>
              , buscamos crear proyectos sólidos en Tepic, Xalisco y Nayarit.
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={sectionStyle}>
          <h2>Contacto</h2>

          <a href={whatsappLink} target="_blank" style={whatsappButtonStyle}>
            Contactar por WhatsApp
          </a>
        </section>

        {/* FOOTER */}
        <footer style={{ marginTop: "60px", borderTop: "1px solid #e5e7eb" }}>
          <p>PIV · Proyectos Inmobiliarios de Valor</p>
        </footer>

      </div>
    </main>
  );
}
