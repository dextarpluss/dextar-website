import type { Metadata } from "next";
import CasesSection from "@/components/Sections/CasesSection";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Cases de Sucesso e Resultados Operacionais | Dextar++",
  description:
    "Estudos de caso reais da Dextar++: cenários, desafios, soluções aplicadas e resultados operacionais rastreáveis.",
};

export default function CasesPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container">
          <span className="badge badge-cyan">ESTUDOS DE CASO</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Resultado Precisa de Contexto e Transparência
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", maxWidth: "720px", lineHeight: 1.6 }}>
            Acreditamos na verdade operacional. Não publicamos percentuais irrealistas sem comprovação. Nossos casos de estudo são construídos com transparência técnica sobre o cenário inicial e as soluções adotadas.
          </p>
        </div>
      </section>

      <CasesSection />
      <FinalCta />
    </>
  );
}
