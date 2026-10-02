import type { Metadata } from "next";
import ArticlesSection from "@/components/Sections/ArticlesSection";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Conteúdos e Artigos Técnicos | Dextar++",
  description:
    "Artigos e guias técnicos sobre WMS, Operação Logística, Integração ERP e Inteligência Artificial Aplicada.",
};

export default function ConteudosPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container">
          <span className="badge badge-cyan">CENTRO DE CONHECIMENTO</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Conteúdos para Evoluir Sua Operação
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", maxWidth: "720px", lineHeight: 1.6 }}>
            Artigos práticos sem enrolação comercial: entenda os bastidores da automação de armazéns, arquitetura de integração e aplicação real de IA no chão de fábrica.
          </p>
        </div>
      </section>

      <ArticlesSection />
      <FinalCta />
    </>
  );
}
