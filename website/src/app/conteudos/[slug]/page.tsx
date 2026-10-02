import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/dextarData";
import FinalCta from "@/components/Sections/FinalCta";

interface ArticleSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticleSlugProps) {
  const { slug } = await params;
  const item = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!item) return { title: "Artigo não encontrado | Dextar++" };
  return {
    title: `${item.title} | Dextar++`,
    description: item.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticleSlugProps) {
  const { slug } = await params;
  const item = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "60px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <Link href="/conteudos" style={{ color: "var(--dx-cyan-600)", fontSize: "0.875rem", fontWeight: 600 }}>
            ← Voltar para todos os artigos
          </Link>
          <div style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
            <span className="badge badge-cyan">{item.category}</span>
            <span style={{ fontSize: "0.8125rem", color: "var(--dx-text-muted)" }}>{item.readTime}</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            {item.title}
          </h1>
          <div style={{ fontSize: "0.875rem", color: "var(--dx-text-muted)" }}>
            Publicado em {item.publishDate} por {item.author}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--dx-text)", whiteSpace: "pre-line" }}>
            {item.content}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
