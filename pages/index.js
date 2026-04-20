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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
          </div>

          <nav style={{ fontSize: "14px", color: "#374151" }}>
            <a
              href="#vallegrand"
              style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}
            >
              Vallegrand
            </a>
            <a
              href="#nosotros"
              style={{ marginRight: "18px", color: "#374151", textDecoration: "none" }}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Contacto
            </a>
          </nav>
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
            Generamos valor para tu inversión
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.08",
              margin: "0 0 18px",
              maxWidth: "900px",
            }}
          >
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor y ejecución disciplinada.
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
            Identificamos oportunidades, estructuramos proyectos y los llevamos a ejecución con un objetivo claro:
            crear desarrollos sólidos con alto potencial de valorización.
          </p>

          <div style={{ marginTop: "18px" }}>
            <a
              href="https://www.vallegrand.com"
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Conocer proyecto Vallegrand
            </a>

            <a href="#contacto" style={buttonSecondary}>
              Contacto
            </a>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Resultados que respaldan nuestra ejecución
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#4b5563",
              maxWidth: "860px",
            }}
          >
            Nuestro primer desarrollo, Vallegrand, valida nuestra capacidad de estructuración, ejecución y
            comercialización en proyectos reales.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              marginTop: "24px",
            }}
          >
            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Primera etapa vendida en su totalidad
              </div>
            </div>

            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Segunda etapa urbanizada
              </div>
            </div>

            <div style={statStyle}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1f3d2b",
                }}
              >
                20%
              </div>
              <div style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                Segunda etapa ya comercializada
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={{ margin: 0, fontSize: "17px", lineHeight: "1.8", color: "#374151" }}>
              Adicionalmente, Vallegrand se distingue por un estándar de calidad de obra superior al promedio dentro
              de su categoría, reflejando una ejecución cuidada en cada detalle. Estos resultados expresan una
              propuesta sólida, una respuesta positiva del mercado y una disciplina operativa consistente.
            </p>
          </div>
        </section>

        <section id="vallegrand" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>Vallegrand</h2>
          <p style={{ fontSize: "15px", color: "#6b7280", marginTop: 0 }}>Xalisco, Nayarit</p>

          <div style={cardStyle}>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#374151", marginTop: 0 }}>
              Vallegrand es un desarrollo de lotes urbanizados con fines habitacionales, estructurado en cuatro etapas
              y concebido bajo un enfoque de generación de valor desde su origen.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563" }}>
              El proyecto combina planeación estratégica, ejecución eficiente y una sólida aceptación comercial.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563" }}>
              Dentro de su segmento, destaca por un estándar de calidad de obra por encima del promedio, lo que
              fortalece su posicionamiento y su potencial de valorización.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563", marginBottom: 0 }}>
              Representa el primer proyecto de PIV y establece la base para el crecimiento y consolidación de futuros
              desarrollos.
            </p>

            <a
              href="https://www.vallegrand.com"
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Conocer más
            </a>
          </div>
        </section>

        <section id="nosotros" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Acerca de nosotros</h2>
          <div style={cardStyle}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#374151", marginTop: 0 }}>
              PIV es una firma enfocada en el desarrollo de proyectos inmobiliarios con una visión clara: generar valor
              a través de la planeación, la ejecución y la disciplina operativa.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563", marginBottom: 0 }}>
              Cada proyecto es estructurado con un enfoque estratégico, priorizando su viabilidad, su potencial de
              valorización y su correcta ejecución en el tiempo.
            </p>
          </div>
        </section>

        <section id="contacto" style={sectionStyle}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Contacto</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Correo</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>hola@piv.one</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Teléfono</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>+52 311 466 9798</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>WhatsApp</div>
              <div style={{ fontSize: "18px", color: "#111827" }}>+52 311 108 1887</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>Oficina</div>
              <div style={{ fontSize: "17px", lineHeight: "1.8", color: "#111827" }}>
                Av. Palomas #196
                <br />
                Col. Las Palomas
                <br />
                Xalisco, Nayarit
              </div>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={buttonPrimary}
          >
            Contactar por WhatsApp
          </a>
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

          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Facebook
            </a>

            <a
              href="/privacidad"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Aviso de Privacidad
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
