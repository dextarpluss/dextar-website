import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/dextarData";
import styles from "./SolutionsGrid.module.css";

export default function SolutionsGrid() {
  const mainPillars = SOLUTIONS_DATA.filter((s) => s.isMainPillar);
  const complementary = SOLUTIONS_DATA.filter((s) => !s.isMainPillar);

  return (
    <section className={styles.section} id="solucoes-grid">
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-cyan">PORTFÓLIO INTEGRADO</span>
          <h2 className={styles.title}>Tecnologia completa para evoluir a sua operação</h2>
          <p className={styles.subtitle}>
            Não partimos de uma tecnologia procurando um problema. Partimos da realidade do seu processo.
          </p>
        </div>

        {/* 3 Pilares Principais */}
        <div className={styles.mainPillarsGrid}>
          {mainPillars.map((sol) => (
            <div key={sol.id} className={styles.pillarCard}>
              <div className={styles.pillarCardHeader}>
                <span className="badge badge-cyan-dark">{sol.badge}</span>
              </div>
              <h3 className={styles.pillarTitle}>{sol.title}</h3>
              <div className={styles.pillarSubtitle}>{sol.subtitle}</div>
              <p className={styles.pillarDesc}>{sol.description}</p>

              <ul className={styles.featureList}>
                {sol.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg className={styles.featureCheck} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={sol.slug} className={styles.cardLink}>
                Saiba mais sobre {sol.title}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Ofertas Complementares */}
        <div>
          <h3 className={styles.complementaryTitle}>Ofertas Complementares & Projetos Especiais</h3>
          <div className={styles.compGrid}>
            {complementary.map((sol) => (
              <div key={sol.id} className={styles.compCard}>
                <h4 className={styles.compTitle}>{sol.title}</h4>
                <p className={styles.compDesc}>{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
