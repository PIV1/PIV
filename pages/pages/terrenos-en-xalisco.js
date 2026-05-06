export const metadata = {
  title: "Terrenos en Xalisco, Nayarit | Vallegrand | PIV",
  description:
    "Terrenos en Xalisco, Nayarit dentro de Vallegrand, un desarrollo de lotes urbanizados con servicios ocultos y vialidades en concreto hidráulico.",
};

export default function TerrenosXalisco() {
  const whatsappLink =
    "https://wa.me/523111081887?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20los%20terrenos%20en%20Xalisco";

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

  const cardStyle = {
    backgroundColor: "#f3f6f4",
    border: "1px solid #dfe7e2",
    borderRadius: "18px",
    padding: "24px",
    marginTop: "20px",
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
            Terrenos urbanizados en Xalisco, Nayarit
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.08",
              margin: "0 0 18px",
              maxWidth: "900px",
            }}
          >
            Terrenos en Xalisco dentro del desarrollo Vallegrand
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
            En PIV desarrollamos Vallegrand, un fraccionamiento de lotes urbanizados
            ubicado en Xalisco, Nayarit, diseñado para quienes buscan invertir en
            terrenos con alto potencial de valorización y certeza jurídica.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            Contactar por WhatsApp
          </a>
        </section>

        <section style={{ marginTop: "56px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Lotes urbanizados con infraestructura de calidad
          </h2>

          <div style={cardStyle}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", marginTop: 0 }}>
              Vallegrand cuenta con todos sus servicios ocultos y vialidades en
              concreto hidráulico, ofreciendo una infraestructura urbana de calidad
              superior dentro de su categoría.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
              Nuestro objetivo es desarrollar proyectos sólidos que generen valor
              patrimonial y brinden certeza a nuestros clientes e inversionistas.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              El desarrollo se encuentra ubicado estratégicamente en Xalisco,
              Nayarit, una zona con crecimiento urbano y alta demanda habitacional.
            </p>
          </div>
        </section>

        <section style={{ marginTop: "56px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Medidas de terrenos disponibles
          </h2>

          <div style={cardStyle}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", marginTop: 0 }}>
              En Vallegrand contamos con terrenos de:
            </p>

            <ul
              style={{
                fontSize: "17px",
                lineHeight: "2",
                color: "#374151",
              }}
            >
              <li>7 x 15 metros — 105 m²</li>
              <li>7 x 20 metros — 140 m²</li>
            </ul>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              Estas opciones permiten adaptarse a distintos proyectos
              habitacionales y necesidades de inversión.
            </p>
          </div>
        </section>

        <section style={{ marginTop: "56px" }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: "32px",
                marginTop: 0,
                marginBottom: "16px",
              }}
            >
              Conoce más sobre Vallegrand
            </h2>

            <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
              Vallegrand representa el primer desarrollo de PIV y refleja nuestro
              enfoque en planeación estratégica, calidad de ejecución y generación
              de valor inmobiliario.
            </p>

            <a
              href="/desarrollador-inmobiliario-tepic"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "#1f3d2b",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Desarrollador inmobiliario en Xalisco
            </a>
          </div>
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
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              />
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={socialIconStyle}
              >
                <path
                  fill="#1877F2"
                  d="M24 12a12 12 0 10-13.88 11.85v-8.39H7.08V12h3.04V9.41c0-3 1.79-4.66 4.52-4.66..."
                />
              </svg>
            </a>

            <a
              href="/privacidad"
              style={{
                textDecoration: "none",
                color: "#374151",
              }}
            >
              Aviso de Privacidad
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
