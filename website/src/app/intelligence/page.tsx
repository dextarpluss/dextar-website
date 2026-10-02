import type { Metadata } from "next";
import IntelligenceHighlight from "@/components/Sections/IntelligenceHighlight";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Dextar Intelligence++ | Inteligência Artificial Aplicada às Operações",
  description:
    "O Dextar Intelligence++ é a camada de inteligência do ecossistema: dados e contexto transformados em análise, recomendação, assistência e automação.",
};

export default function IntelligencePage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container">
          <span className="badge badge-purple">DEXTAR INTELLIGENCE++</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Inteligência Aplicada. Não Apenas IA Adicionada.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", maxWidth: "720px", lineHeight: 1.6 }}>
            O Dextar Intelligence++ é a camada contextual de inteligência do ecossistema Dextar: transforma dados operacionais brutos em diagnósticos de causa raiz, recomendações embasadas e assistentes contextuais.
          </p>
        </div>
      </section>

      <IntelligenceHighlight />

      {/* Seção Governança e Segurança LGPD */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-cyan">GOVERNANÇA & SEGURANÇA</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginTop: "12px", marginBottom: "16px" }}>
              IA Corporativa com Controle e Rastreabilidade
            </h2>
            <p style={{ color: "var(--dx-text-muted)", fontSize: "1.0625rem", lineHeight: 1.6, marginBottom: "32px" }}>
              Projetos corporativos de Inteligência Artificial precisam considerar rigorosamente acessos, segurança de dados, privacidade (LGPD) e responsabilização. Na Dextar, ações críticas recomendadas pela IA sempre exigem validação e autorização humana explícita.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            <div style={{ background: "var(--dx-surface-soft)", padding: "24px", borderRadius: "12px", border: "1px solid var(--dx-border)" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>Permissão por Perfil</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Assistentes e recomendações respeitam estritamente a hierarquia de acesso do usuário no sistema.
              </p>
            </div>
            <div style={{ background: "var(--dx-surface-soft)", padding: "24px", borderRadius: "12px", border: "1px solid var(--dx-border)" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>Auditabilidade Total</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Cada insight gerado registra a base de dados analisada e o período de comparação utilizado.
              </p>
            </div>
            <div style={{ background: "var(--dx-surface-soft)", padding: "24px", borderRadius: "12px", border: "1px solid var(--dx-border)" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "8px" }}>Sem Alucinação Cega</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
                Respostas e recomendações são estritamente restritas à base factual da sua operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
