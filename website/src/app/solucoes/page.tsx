import type { Metadata } from "next";
import SolutionsGrid from "@/components/Sections/SolutionsGrid";
import FinalCta from "@/components/Sections/FinalCta";

export const metadata: Metadata = {
  title: "Soluções Tecnológicas e Logísticas | Dextar++",
  description:
    "Visão geral das soluções Dextar++: WMS, Integrações, Intelligence++, Agendamento, Gestão de Entregas e Projetos Especiais.",
};

export default function SolucoesPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container">
          <span className="badge badge-cyan">PORTFÓLIO COMPLETO</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Tecnologia Completa para Evoluir a Sua Operação
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", maxWidth: "700px", lineHeight: 1.6 }}>
            Não partimos de uma tecnologia procurando um problema. Partimos da realidade da sua operação para desenhar a combinação perfeita de software, integração e inteligência.
          </p>
        </div>
      </section>

      <SolutionsGrid />
      <FinalCta />
    </>
  );
}
