import type { Metadata } from "next";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Sobre a Dextar | Tecnologia para Operações Inteligentes",
  description:
    "Conheça a trajetória da Dextar: da automação logística por radiofrequência em 2010 ao ecossistema moderno de WMS, Integrações e Inteligência Artificial.",
};

export default function SobrePage() {
  const values = [
    {
      title: "Segurança",
      desc: "Continuidade operacional e dados altamente protegidos com governança rígida.",
    },
    {
      title: "Profissionalismo",
      desc: "Clareza de escopo, transparência técnica e responsabilidade nas implantações.",
    },
    {
      title: "Inovação com Propósito",
      desc: "Tecnologia e inteligência aplicadas a resolver problemas reais da operação física.",
    },
    {
      title: "Parceria",
      desc: "Proximidade diária com o cliente, acompanhando o chão de fábrica do entendimento ao pós-go-live.",
    },
  ];

  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container">
          <span className="badge badge-cyan">NOSSA HISTÓRIA</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Tecnologia com propósito operacional.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", maxWidth: "720px", lineHeight: 1.6 }}>
            A Dextar nasceu no chão de fábrica e na operação física. Nossa abordagem combina implantação de ERP, processos operacionais, logística e desenvolvimento de software especializado.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "840px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "20px" }}>A Origem da Dextar</h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--dx-text-muted)", lineHeight: 1.7, marginBottom: "24px" }}>
            A história da Dextar começou a partir de uma necessidade concreta de automação logística identificada em um projeto de grande porte iniciado em <strong>2010</strong>.
          </p>
          <p style={{ fontSize: "1.0625rem", color: "var(--dx-text-muted)", lineHeight: 1.7, marginBottom: "24px" }}>
            Naquele contexto surgiu a oportunidade de desenvolver automação para controle logístico por radiofrequência, criando a base para que a operação pudesse posteriormente evoluir para uma gestão mais estruturada e abrangente de armazém.
          </p>

          <div style={{ margin: "24px 0" }}>
            <span className="validation-notice">
              [VALIDAR datas exatas, nomes de sócios e cronologia institucional antes da publicação definitiva]
            </span>
          </div>

          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "48px", marginBottom: "24px" }}>
            Nossos Valores Fundamentais
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {values.map((v, idx) => (
              <div key={idx} style={{ background: "var(--dx-surface-soft)", padding: "24px", borderRadius: "12px", border: "1px solid var(--dx-border)" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", color: "var(--dx-text)" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)", lineHeight: 1.5 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
