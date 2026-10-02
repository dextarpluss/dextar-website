import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dextar++",
  description:
    "Política de privacidade e governança de dados pessoais da Dextar Soluções em Tecnologia (LGPD).",
};

export default function PrivacidadePage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <span className="badge badge-cyan">GOVERNANÇA & LGPD</span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "16px", marginBottom: "24px" }}>
          Política de Privacidade
        </h1>

        <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--dx-text-muted)" }}>
          <p style={{ marginBottom: "20px" }}>
            A <strong>Dextar Soluções em Tecnologia</strong> reafirma seu compromisso com a segurança, transparência e proteção dos dados pessoais de seus clientes, parceiros e usuários do website, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--dx-text)", marginTop: "32px", marginBottom: "12px" }}>
            1. Coleta Mínima de Dados
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Coletamos apenas as informações estritamente necessárias para atendimento comercial e operacional enviadas espontaneamente através do formulário de contato (nome, empresa, e-mail corporativo, telefone e área de interesse).
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--dx-text)", marginTop: "32px", marginBottom: "12px" }}>
            2. Finalidade do Tratamento
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Os dados fornecidos são utilizados exclusivamente para responder às solicitações comerciais, agendar demonstrações técnicas de nossos sistemas (WMS, Integrações, Intelligence++) e enviar comunicações acordadas.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--dx-text)", marginTop: "32px", marginBottom: "12px" }}>
            3. Não Compartilhamento
          </h2>
          <p style={{ marginBottom: "20px" }}>
            A Dextar não comercializa nem compartilha dados pessoais com terceiros para fins de marketing sem autorização prévia e expressa.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--dx-text)", marginTop: "32px", marginBottom: "12px" }}>
            4. Direitos do Titular
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Você pode solicitar a qualquer momento a confirmação, acesso, correção ou eliminação dos seus dados pessoais tratados pela Dextar através dos nossos canais oficiais.
          </p>

          <div style={{ marginTop: "40px" }}>
            <span className="validation-notice">
              [VALIDAR minuta jurídica definitiva e indicação do DPO / Encarregado LGPD]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
