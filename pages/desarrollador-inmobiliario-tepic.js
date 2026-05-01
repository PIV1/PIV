export const metadata = {
  title: "Desarrollador inmobiliario en Tepic y Nayarit | PIV",
  description:
    "PIV desarrolla proyectos inmobiliarios en Tepic, Xalisco y Nayarit, enfocados en inversión, valorización del suelo y oportunidades inmobiliarias.",
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
            Oportunidades inmobiliarias en Tepic, Xalisco y Nayarit
          </div>

          <h1 style={{ fontSize: "52px", lineHeight: "1.08", margin: "0 0 18px", maxWidth: "950px" }}>
            Desarrollador inmobiliario en Tepic y Nayarit
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.7", color: "#4b5563", maxWidth: "900px", margin: 0 }}>
            En{" "}
            <a href="/" style={{ color: "#1f3d2b", fontWeight: "600", textDecoration: "none" }}>
              PIV
            </a>{" "}
            desarrollamos proyectos inmobiliarios en Tepic, Xalisco y todo el estado de Nayarit.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" style={buttonStyle}>
            Contactar por WhatsApp
          </a>
        </section>

        {/* TODO tu resto del contenido sigue igual... */}
      </div>
    </main>
  );
}
