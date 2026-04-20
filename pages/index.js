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
              style={{ width: "64px", height: "64px", objectFit: "contain" }}
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

          <h1 style={{ fontSize: "48px" }}>
            Desarrollamos proyectos inmobiliarios con enfoque en generación de valor y ejecución disciplinada.
          </h1>

          <p style={{ fontSize: "18px", color: "#4b5563" }}>
            Identificamos oportunidades, estructuramos proyectos y los llevamos a ejecución con un objetivo claro.
          </p>

          <div>
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

        {/* CONTACTO */}
        <section id="contacto" style={sectionStyle}>
          <h2>Contacto</h2>

          <div style={cardStyle}>
            <p>Email: hola@piv.one</p>
            <p>Teléfono: +52 311 466 9798</p>
            <p>WhatsApp: +52 311 108 1887</p>

            <p>
              <strong>Oficina</strong><br />
              Av. Palomas #196<br />
              Xalisco, Nayarit
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Contactar por WhatsApp
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
            gap: "14px",
            fontSize: "14px",
            color: "#6b7280",
            alignItems: "center",
          }}
        >
          <div>PIV · Proyectos Inmobiliarios de Valor</div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/piv.tepic/"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="22" height="22" fill="#374151" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/PIVTepic?locale=es_LA"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="22" height="22" fill="#374151" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88z"/>
              </svg>
            </a>

            <a href="/privacidad">Aviso de Privacidad</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
