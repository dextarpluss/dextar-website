import type { Metadata } from "next";
import IntegrationsDiagram from "@/components/Sections/IntegrationsDiagram";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Integração de Sistemas e ERP | Dextar++",
  description:
    "Integração especialista entre ERPs, WMS, e-commerce e APIs logísticas. Elimine digitação manual e gargalos de comunicação.",
};

export default function IntegracoesPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-navy-950)", color: "#fff", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container">
          <span className="badge badge-cyan-dark">DEXTAR INTEGRAÇÕES</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Sistemas conectados. Operação fluindo sem interrupção.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-light-muted)", maxWidth: "700px", lineHeight: 1.6 }}>
            Nossa abordagem de integração coloca a resiliência do processo em primeiro lugar. Desenvolvemos barramentos e APIs para garantir que ERP, armazém e serviços operem em sincronia contínua.
          </p>
        </div>
      </section>

      <IntegrationsDiagram />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "720px", marginBottom: "40px" }}>
            <span className="badge badge-cyan">METODOLOGIA DE INTEGRAÇÃO</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "12px" }}>
              Nossos 4 Princípios de Arquitetura de Dados
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            <div style={{ background: "var(--dx-surface-soft)", border: "1px solid var(--dx-border)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>1. Entender o Processo Primeiro</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Antes de definir endpoints e JSONs, mapeamos as regras de negócio, momentos fiscais e fluxos operacionais físicos.
              </p>
            </div>

            <div style={{ background: "var(--dx-surface-soft)", border: "1px solid var(--dx-border)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>2. Definir Responsabilidade e Autoridade</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Definição clara de qual sistema detém a autoridade sobre cada dado (ex: ERP manda faturamento; WMS determina o estoque físico).
              </p>
            </div>

            <div style={{ background: "var(--dx-surface-soft)", border: "1px solid var(--dx-border)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>3. Rastreabilidade & Reprocessamento</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Falhas de rede ou indisponibilidades temporárias acionam mecanismo de fila resiliente sem perda de transação.
              </p>
            </div>

            <div style={{ background: "var(--dx-surface-soft)", border: "1px solid var(--dx-border)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>4. Monitoramento Ativo</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Alertas preventivos para que eventuais travamentos de faturamento ou lote sejam corrigidos antes de paralisar a expedição.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
