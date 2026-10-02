import Link from "next/link";
import { ARTICLES_DATA } from "@/data/dextarData";
import styles from "./ArticlesSection.module.css";

export default function ArticlesSection() {
  return (
    <section className={styles.section} id="conteudos-destaque">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="badge badge-cyan">CONHECIMENTO OPERACIONAL</span>
            <h2 className={styles.title}>Conteúdos para evoluir sua operação</h2>
          </div>
          <Link href="/conteudos" className="badge badge-cyan-dark" style={{ padding: "10px 18px" }}>
            Ver todos os artigos →
          </Link>
        </div>

        <div className={styles.grid}>
          {ARTICLES_DATA.map((art) => (
            <article key={art.slug} className={styles.card}>
              <div className={styles.meta}>
                <span className="badge badge-cyan">{art.category}</span>
                <span>{art.readTime}</span>
              </div>
              <h3 className={styles.articleTitle}>
                <Link href={`/conteudos/${art.slug}`}>{art.title}</Link>
              </h3>
              <p className={styles.excerpt}>{art.excerpt}</p>
              <Link href={`/conteudos/${art.slug}`} className={styles.readMore}>
                Ler artigo completo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
