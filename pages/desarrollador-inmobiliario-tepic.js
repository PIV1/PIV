export const metadata = {
  title: "Desarrollador inmobiliario en Xalisco y Nayarit | PIV",
  description:
    "PIV desarrolla proyectos inmobiliarios en Xalisco, Tepic y Nayarit, enfocados en inversión, valorización del suelo, terrenos urbanizados y proyectos aptos para crédito INFONAVIT.",
  alternates: {
    canonical: "https://www.piv.one/desarrollador-inmobiliario-tepic",
  },
};

export default function SEOPage() {
  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios";

  const buttonStyle = {
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
            <a href="/" style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}>
              Inicio
            </a>
            <a href="/#nosotros" style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}>
              Nosotros
            </a>
            <a href="/#contacto" style={{ color: "#374151", textDecoration: "none" }}>
              Contacto
            </a>
          </nav>
        </header>

        <section style={{ paddingTop: "64px", paddingBottom: "24px" }}>
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
            Oportunidades inmobiliarias en Xalisco, Tepic y Nayarit
          </div>

          <h1 style={{ fontSize: "52px", lineHeight: "1.08", margin: "0 0 18px", maxWidth: "950px" }}>
            Desarrollador inmobiliario en Xalisco y Nayarit
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.7", color: "#4b5563", maxWidth: "900px", margin: 0 }}>
            En{" "}
            <a href="/" style={{ color: "#1f3d2b", fontWeight: "600", textDecoration: "none" }}>
              PIV
            </a>{" "}
            desarrollamos proyectos inmobiliarios en Xalisco, Tepic y todo el estado de Nayarit,
            enfocados en la planeación estratégica, la valorización del suelo y la generación de oportunidades reales de inversión.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" style={buttonStyle}>
            Contactar por WhatsApp
          </a>
        </section>

        {/* RESTO DEL CONTENIDO YA AJUSTADO A XALISCO (misma estructura) */}

        <section style={{ marginTop: "56px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Proyectos inmobiliarios en Xalisco y Tepic
          </h2>
          <div style={{ backgroundColor: "#f3f6f4", border: "1px solid #dfe7e2", borderRadius: "18px", padding: "24px", marginTop: "20px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", marginTop: 0 }}>
              Nuestro enfoque se basa en identificar ubicaciones con alto potencial de crecimiento y estructurar desarrollos sólidos que respondan a la demanda real del mercado.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.8", marginBottom: 0 }}>
              Creamos proyectos que buscan generar valor para quienes invierten en Xalisco, Tepic y Nayarit.
            </p>
          </div>
        </section>

        <section style={{ marginTop: "56px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Un desarrollador inmobiliario en Xalisco con proyectos aptos para crédito INFONAVIT
          </h2>

          <div style={{ backgroundColor: "#f3f6f4", border: "1px solid #dfe7e2", borderRadius: "18px", padding: "24px", marginTop: "20px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", marginTop: 0 }}>
              Como desarrollador inmobiliario en Xalisco, en PIV nos distinguimos por desarrollar proyectos que cumplen con todos los requisitos legales, técnicos y urbanos necesarios para su comercialización a través de instituciones de crédito como INFONAVIT y la banca tradicional.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
              Nuestro desarrollo Vallegrand cuenta con todos los elementos necesarios para brindar certeza jurídica a nuestros clientes, incluyendo contratos de agua, alineamiento oficial, licencia de uso de suelo y la asignación de números oficiales para cada lote.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", marginBottom: 0 }}>
              Gracias a este cumplimiento integral, nuestros clientes pueden adquirir terrenos en Xalisco utilizando crédito INFONAVIT, así como financiamiento bancario.
            </p>
          </div>
        </section>

        {/* Footer igual */}

      </div>
    </main>
  );
}
