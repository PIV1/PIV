export default function Privacidad() {
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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "48px 24px 72px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Aviso de Privacidad</h1>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          PIV (en adelante, “la Empresa”), con domicilio en Av. Palomas #196, Col. Las Palomas, Xalisco, Nayarit, es
          responsable del uso y protección de los datos personales que recaba de sus clientes y prospectos.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades:
        </p>

        <ul style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          <li>Dar seguimiento a solicitudes de información sobre nuestros proyectos inmobiliarios.</li>
          <li>Establecer contacto con clientes potenciales.</li>
          <li>Brindar atención personalizada y asesoría comercial.</li>
          <li>Enviar información relevante sobre nuestros desarrollos.</li>
        </ul>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          Para las finalidades antes mencionadas, podemos recabar datos personales como nombre, número telefónico,
          correo electrónico y cualquier otra información que usted proporcione voluntariamente a través de nuestros
          medios de contacto.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          La Empresa no comparte sus datos personales con terceros, salvo que sea estrictamente necesario para cumplir
          con las finalidades antes descritas o por requerimiento legal de autoridad competente.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          Usted tiene derecho a acceder, rectificar o cancelar sus datos personales, así como oponerse al uso de los
          mismos (derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud al correo electrónico:
          hola@piv.one
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          La Empresa se reserva el derecho de realizar modificaciones o actualizaciones al presente Aviso de Privacidad
          en cualquier momento. Dichas modificaciones estarán disponibles en este mismo sitio web.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151" }}>
          Fecha de última actualización: abril 2026
        </p>

        <p style={{ marginTop: "32px" }}>
          <a href="/" style={{ color: "#1f3d2b", textDecoration: "none", fontWeight: "600" }}>
            Volver a inicio
          </a>
        </p>
      </div>
    </main>
  );
}
