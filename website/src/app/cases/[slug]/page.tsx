import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/dextarData";
import FinalCta from "@/components/Sections/FinalCta";

interface CaseSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CaseSlugProps) {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);
  if (!item) return { title: "Case não encontrado | Dextar++" };
  return {
    title: `${item.title} | Case Dextar++`,
    description: item.challenge,
  };
}

export default async function CaseDetailPage({ params }: CaseSlugProps) {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section style={{ backgroundColor: "var(--dx-navy-950)", color: "#fff", padding: "80px 0" }}>
        <div className="container">
          <Link href="/cases" style={{ color: "var(--dx-cyan-400)", fontSize: "0.875rem", fontWeight: 600 }}>
            ← Voltar para todos os cases
          </Link>
          <div style={{ marginTop: "16px" }}>
            <span className="badge badge-cyan-dark">{item.segment}</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "12px", marginBottom: "16px" }}>
            {item.title}
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--dx-text-light-muted)" }}>
            Solução Utilizada: {item.solutionUsed}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>Cenário Inicial</h2>
            <p style={{ color: "var(--dx-text-muted)", lineHeight: 1.6 }}>{item.scenario}</p>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>O Desafio Operacional</h2>
            <p style={{ color: "var(--dx-text-muted)", lineHeight: 1.6 }}>{item.challenge}</p>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>A Solução Aplicada</h2>
            <p style={{ color: "var(--dx-text-muted)", lineHeight: 1.6 }}>{item.solution}</p>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}>Integrações Envolvidas</h2>
            <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {item.integrations.map((ing, idx) => (
                <li key={idx} className="badge badge-cyan" style={{ fontSize: "0.875rem" }}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "var(--dx-surface-soft)", padding: "28px", borderRadius: "12px", border: "1px solid var(--dx-border)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>Resultados Alcançados</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {item.results.map((res, idx) => (
                <li key={idx} style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                  ✓ {res}
                </li>
              ))}
            </ul>
          </div>

          {item.validationNotice && (
            <div style={{ marginTop: "24px" }}>
              <span className="validation-notice">{item.validationNotice}</span>
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
