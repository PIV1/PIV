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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/logo-piv.png"
              alt="Logotipo PIV"
              style={{ width: "64px", height: "64px" }}
            />
            <div>
              <div style={{ fontSize: "30px", fontWeight: "700" }}>PIV</div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                Proyectos Inmobiliarios de Valor
              </div>
            </div>
          </div>

          <nav style={{ fontSize: "14px" }}>
            <a href="#vallegrand" style={{ marginRight: "18px" }}>
              Vallegrand
            </a>
            <a href="#nosotros" style={{ marginRight: "18px" }}>
              Nosotros
            </a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        {/* HERO */}
        <section style={{ paddingTop: "64px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "#1f3d2b",
              backgroundColor: "#e8f3ed",
              padding: "8px 14px",
              borderRadius: "999px",
              marginBottom: "20px",
              display: "inline-block",
            }}
          >
            Generamos valor para tu inversión
          </div>

          <h1 style={{ fontSize: "48px" }}>
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor.
          </h1>

          <p style={{ fontSize: "18px", color: "#4b5563" }}>
            Identificamos oportunidades, estructuramos proyectos y los llevamos a ejecución.
          </p>

          <a href="#contacto" style={buttonPrimary}>
            Contacto
          </a>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" style={sectionStyle}>
          <h2>Acerca de nosotros</h2>
          <div style={cardStyle}>
            <p>
              PIV es una firma enfocada en el desarrollo de proyectos inmobiliarios
              con visión estratégica y enfoque en generación de valor.
            </p>
          </div>
        </section>

        {/* NUEVA SECCIÓN SEO */}
        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Conoce más sobre PIV
          </h2>

          <div style={cardStyle}>
            <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
              Explora más sobre nuestra visión, experiencia y enfoque de desarrollo inmobiliario en Tepic, Xalisco y Nayarit.
            </p>

            <a
              href="/desarrollador-inmobiliario-tepic"
              style={buttonPrimary}
            >
              Desarrollador inmobiliario en Tepic
            </a>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={sectionStyle}>
          <h2>Contacto</h2>

          <div style={cardStyle}>
            <p>Email: hola@piv.one</p>
            <p>Tel: +52 311 466 9798</p>

            <a href={whatsappLink} style={whatsappButtonStyle}>
              WhatsApp
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
            fontSize: "14px",
          }}
        >
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={{ display: "flex", gap: "16px" }}>
            <a href="/desarrollador-inmobiliario-tepic">
              SEO
            </a>
            <a href="/privacidad">Privacidad</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
