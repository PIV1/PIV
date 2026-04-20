export default function Home() {
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
          <h1 style={{ fontSize: "48px" }}>
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor
          </h1>

          <p style={{ fontSize: "18px", color: "#4b5563" }}>
            Identificamos oportunidades, estructuramos proyectos y los llevamos a ejecución.
          </p>

          <a href="#contacto" style={buttonPrimary}>
            Contacto
          </a>
        </section>

        {/* VALLEGRAND */}
        <section id="vallegrand" style={sectionStyle}>
          <h2>Proyecto destacado</h2>

          <div style={cardStyle}>
            <h3>Vallegrand</h3>
            <p>
              Desarrollo ubicado en Xalisco, Nayarit, enfocado en generar valor a través de planeación estratégica.
            </p>

            <a
              href="https://vallegrand.mx"
              target="_blank"
              style={buttonPrimary}
            >
              Conocer proyecto Vallegrand
            </a>
          </div>
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

        {/* SECCIÓN SEO */}
        <section style={sectionStyle}>
          <h2>Conoce más sobre PIV</h2>

          <div style={cardStyle}>
            <p>
              Explora más sobre nuestra experiencia como desarrollador inmobiliario en Tepic y Nayarit.
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
            color: "#6b7280",
          }}
        >
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                style={{ width: "24px" }}
              />
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                style={{ width: "24px" }}
              />
            </a>

            <a href="/privacidad">Aviso de Privacidad</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
