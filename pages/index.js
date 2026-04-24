export default function Home() {
  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20sus%20proyectos%20inmobiliarios";

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
        <header style={{ marginBottom: "56px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
            PIV · Proyectos Inmobiliarios de Valor
          </h1>
          <p style={{ fontSize: "22px", color: "#4b5563" }}>
            Generamos valor a tu inversión.
          </p>
        </header>

        <section style={sectionStyle} id="nosotros">
          <h2 style={titleStyle}>Acerca de nosotros</h2>
          <p style={textStyle}>
            En PIV somos un{" "}
            <a href="/desarrollador-inmobiliario-tepic" style={linkStyle}>
              desarrollador inmobiliario en Tepic
            </a>{" "}
            enfocado en la planeación, estructuración y ejecución de proyectos
            inmobiliarios con visión estratégica y generación de valor.
          </p>
          <p style={textStyle}>
            Nuestro objetivo es crear desarrollos sólidos, bien ubicados y con
            alto potencial de plusvalía para quienes buscan invertir en terrenos
            y lotes urbanizados en Nayarit.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Proyecto destacado: Vallegrand</h2>
          <p style={textStyle}>
            Vallegrand es un desarrollo de lotes urbanizados con fines
            habitacionales ubicado en Xalisco, Nayarit.
          </p>
          <p style={textStyle}>
            El proyecto combina ubicación estratégica, planeación urbana y una
            propuesta sólida de inversión para quienes buscan construir
            patrimonio en una zona con crecimiento.
          </p>

          <a
            href="https://www.vallegrand.com"
            target="_blank"
            rel="noopener noreferrer"
            style={darkButton}
          >
            Conocer proyecto Vallegrand
          </a>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Conoce más sobre PIV</h2>
          <p style={textStyle}>
            Explora más sobre nuestra experiencia, visión y enfoque como
            desarrollador inmobiliario en Tepic, Xalisco y Nayarit.
          </p>

          <a href="/desarrollador-inmobiliario-tepic" style={darkButton}>
            Desarrollador inmobiliario en Tepic
          </a>
        </section>

        <section style={{ marginTop: "64px" }} id="contacto">
          <h2 style={titleStyle}>Contacto</h2>

          <div style={contactBox}>
            <p style={textStyle}>
              <strong>Email:</strong> hola@piv.one
            </p>
            <p style={textStyle}>
              <strong>Tel:</strong> +52 311 466 9798
            </p>
            <p style={textStyle}>
              <strong>WhatsApp:</strong> +52 311 108 1887
            </p>

            <p style={{ ...textStyle, marginTop: "24px" }}>
              <strong>Oficina</strong>
              <br />
              Av. Palomas #196
              <br />
              Col. Las Palomas
              <br />
              Xalisco, Nayarit
            </p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={whatsappButton}>
              <span style={whatsappIcon}>☘</span>
              Contactar por WhatsApp
            </a>
          </div>
        </section>

        <footer style={footerStyle}>
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={socialContainer}>
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram PIV"
              style={instagramIcon}
            >
              <span style={instagramInnerDot}></span>
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook PIV"
              style={facebookIcon}
            >
              f
            </a>

            <a href="/privacidad" style={privacyLink}>
              Aviso de Privacidad
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

const sectionStyle = {
  backgroundColor: "#f8faf9",
  border: "1px solid #d9e2dc",
  borderRadius: "18px",
  padding: "36px",
  marginBottom: "36px",
};

const titleStyle = {
  fontSize: "30px",
  marginBottom: "20px",
  color: "#111827",
};

const textStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#111827",
};

const linkStyle = {
  color: "#1f3d2b",
  fontWeight: "700",
  textDecoration: "underline",
};

const darkButton = {
  display: "inline-block",
  marginTop: "24px",
  backgroundColor: "#24452f",
  color: "#ffffff",
  padding: "16px 28px",
  borderRadius: "999px",
  fontWeight: "700",
  textDecoration: "none",
};

const contactBox = {
  backgroundColor: "#f8faf9",
  border: "1px solid #d9e2dc",
  borderRadius: "18px",
  padding: "36px",
};

const whatsappButton = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "28px",
  backgroundColor: "#5fd26d",
  color: "#ffffff",
  padding: "16px 28px",
  borderRadius: "999px",
  fontWeight: "700",
  textDecoration: "none",
};

const whatsappIcon = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "14px",
};

const footerStyle = {
  borderTop: "1px solid #d9e2dc",
  marginTop: "64px",
  paddingTop: "28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  color: "#4b5563",
};

const socialContainer = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
};

const facebookIcon = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  backgroundColor: "#1877F2",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "700",
  fontFamily: "Arial, sans-serif",
  textDecoration: "none",
};

const instagramIcon = {
  width: "28px",
  height: "28px",
  borderRadius: "8px",
  background:
    "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 8%, #fd5949 38%, #d6249f 62%, #285AEB 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  textDecoration: "none",
};

const instagramInnerDot = {
  width: "10px",
  height: "10px",
  border: "2px solid #ffffff",
  borderRadius: "4px",
  display: "block",
};

const privacyLink = {
  color: "#111827",
  textDecoration: "underline",
};
