import Link from "next/link";
import { CASE_STUDIES } from "@/data/dextarData";
import styles from "./CasesSection.module.css";

export default function CasesSection() {
  return (
    <section className={styles.section} id="cases-destaque">
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-cyan">CASES & APLICAÇÕES PRÁTICAS</span>
          <h2 className={styles.title}>Resultado precisa de contexto e transparência.</h2>
          <p>
            Não publicamos métricas genéricas nem resultados fictícios. Nossos estudos de caso detalham o cenário inicial, o desafio real e a solução implantada.
          </p>
        </div>

        <div className={styles.grid}>
          {CASE_STUDIES.map((c) => (
            <div key={c.slug} className={styles.card}>
              <div className={styles.segment}>{c.segment} • {c.solutionUsed}</div>
              <h3 className={styles.caseTitle}>{c.title}</h3>

              <div className={styles.sectionBlock}>
                <div className={styles.blockLabel}>Cenário & Desafio</div>
                <div className={styles.blockText}>{c.challenge}</div>
              </div>

              <div className={styles.sectionBlock}>
                <div className={styles.blockLabel}>Solução Implantada</div>
                <div className={styles.blockText}>{c.solution}</div>
              </div>

              <ul className={styles.resultsList}>
                {c.results.map((res, idx) => (
                  <li key={idx} className={styles.resultItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--dx-cyan-600)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {res}
                  </li>
                ))}
              </ul>

              {c.validationNotice && (
                <div className={styles.notice}>
                  <span className="validation-notice">{c.validationNotice}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
