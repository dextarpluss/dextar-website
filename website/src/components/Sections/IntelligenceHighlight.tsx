import Link from "next/link";
import { INTELLIGENCE_CAPABILITIES } from "@/data/dextarData";
import styles from "./IntelligenceHighlight.module.css";

export default function IntelligenceHighlight() {
  const insightExample = INTELLIGENCE_CAPABILITIES[0].exampleInsight;

  return (
    <section className={styles.section} id="intelligence-destaque">
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-purple">DEXTAR INTELLIGENCE++</span>
          <h2 className={styles.title}>
            Dados deixam de ser apenas registro. Passam a apoiar decisões.
          </h2>
          <p className={styles.subtitle}>
            Inteligência aplicada ao contexto operacional. Sem clichês visuais, focada em diagnóstico, recomendação de ação e produtividade no chão de fábrica.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Lado Esquerdo: Exemplo Oficial de Insight++ Card */}
          <div>
            <div className={styles.insightCard}>
              <div className={styles.insightCardHeader}>
                <div className={styles.insightCardTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  INSIGHT++ OPERACIONAL
                </div>
                <span className="badge badge-purple">Em Tempo Real</span>
              </div>

              <div className={styles.insightContentBlock}>
                <div>
                  <div className={styles.insightLabel}>O que foi observado</div>
                  <div className={styles.insightText}>
                    {insightExample?.observed || "Taxa de divergência na conferência do corredor B aumentou 14% nas últimas 4 horas."}
                  </div>
                </div>

                <div>
                  <div className={styles.insightLabel}>Por que importa</div>
                  <div className={styles.insightText}>
                    {insightExample?.importance || "Risco de atraso no carregamento da rota metropolitana das 16h."}
                  </div>
                </div>

                <div>
                  <div className={styles.insightLabel}>Base de análise</div>
                  <div className={styles.insightText} style={{ fontSize: "0.8125rem", color: "var(--dx-text-muted)" }}>
                    {insightExample?.basePeriod || "Comparado à média histórica do mesmo turno."}
                  </div>
                </div>
              </div>

              <div className={styles.insightCardActions}>
                <button className={styles.actionCyan}>Gerar Ação Sugerida</button>
                <button className={styles.actionSecondary}>Ver Evidências</button>
              </div>
            </div>
          </div>

          {/* Lado Direito: As 5 Capacidades do Intelligence++ */}
          <div className={styles.capabilitiesList}>
            {INTELLIGENCE_CAPABILITIES.map((cap, idx) => (
              <div key={idx} className={styles.capabilityCard}>
                <span className={`badge badge-${cap.badgeColor}`} style={{ marginTop: "2px" }}>
                  {cap.name}
                </span>
                <div>
                  <div className={styles.capabilityName}>{cap.name}</div>
                  <div className={styles.capabilityTagline}>{cap.tagline}</div>
                  <div className={styles.capabilityDesc}>{cap.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
