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
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* 🔙 Volver */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#1f3d2b",
            fontWeight: "600",
          }}
        >
          ← Volver a PIV
        </a>

        {/* HERO */}
        <h1 style={{ fontSize: "40px", marginTop: "20px" }}>
          Desarrollador inmobiliario en Tepic y Nayarit
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563" }}>
          En PIV desarrollamos proyectos inmobiliarios en Tepic, Xalisco y todo
          el estado de Nayarit, enfocados en la planeación estratégica, la
          valorización del suelo y la generación de oportunidades reales de
          inversión.
        </p>

        {/* SECCIONES SEO */}
        <h2 style={{ marginTop: "40px" }}>
          Proyectos inmobiliarios en Tepic y Xalisco
        </h2>
        <p>
          Nuestro enfoque se basa en identificar ubicaciones con alto potencial
          de crecimiento y estructurar desarrollos sólidos que respondan a la
          demanda real del mercado.
        </p>

        <h2 style={{ marginTop: "40px" }}>
          Inversión en terrenos y lotes en Nayarit
        </h2>
        <p>
          La inversión en terrenos urbanizados en Tepic y Xalisco representa una
          de las oportunidades más relevantes en el mercado inmobiliario actual,
          especialmente en zonas con expansión urbana.
        </p>

        <h2 style={{ marginTop: "40px" }}>
          Desarrollo inmobiliario con enfoque en valor
        </h2>
        <p>
          Cada proyecto en PIV es diseñado considerando factores urbanos,
          financieros y comerciales, asegurando su viabilidad y potencial de
          valorización.
        </p>

        {/* 🏡 VALLEGRAND */}
        <div
          style={{
            marginTop: "50px",
            backgroundColor: "#f3f4f6",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h2>Proyecto destacado: Vallegrand</h2>

          <p>
            Vallegrand es un desarrollo inmobiliario ubicado en una de las zonas
            con mayor crecimiento en Nayarit, diseñado para quienes buscan
            invertir en terrenos con alto potencial de valorización.
          </p>

          <p>
            Este proyecto combina ubicación estratégica, planeación urbana y una
            propuesta sólida de inversión, ideal tanto para desarrollo
            habitacional como para inversión patrimonial.
          </p>

          <a
            href="/#vallegrand"
            style={{
              display: "inline-block",
              marginTop: "15px",
              backgroundColor: "#1f3d2b",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Conocer proyecto Vallegrand
          </a>
        </div>

        {/* 📲 WHATSAPP */}
        <a href={whatsappLink} target="_blank" rel="noreferrer" style={buttonStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ width: "20px", height: "20px", fill: "#ffffff" }}
          >
            <path d="M19.11 17.21c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.61 1.11 2.79c.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
          </svg>
          Contactar por WhatsApp
        </a>

        {/* 🌐 REDES */}
        <div style={{ marginTop: "40px", display: "flex", gap: "18px" }}>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/piv.tepic/" target="_blank">
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                <path fill="#fff" d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2z"/>
              </svg>
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/PIVTepic?locale=es_LA" target="_blank">
            <svg viewBox="0 0 24 24" style={socialIconStyle}>
              <path
                fill="#1877F2"
                d="M24 12a12 12 0 10-13.88 11.85v-8.39H7.08V12h3.04V9.41c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0024 12z"
              />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
