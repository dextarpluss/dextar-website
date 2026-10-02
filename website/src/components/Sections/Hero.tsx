import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackgroundGlow} />

      <div className="container">
        <div className={styles.grid}>
          {/* Lado Esquerdo: Headline e Ações */}
          <div className={styles.content}>
            <div className={styles.badgeContainer}>
              <span className="badge badge-cyan-dark">
                TECNOLOGIA LOGÍSTICA DE ALTA CADÊNCIA ++
              </span>
            </div>

            <h1 className={styles.title}>
              Logística que <span className={styles.titleHighlight}>pensa à frente.</span>
            </h1>

            <p className={styles.subtitle}>
              Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes.
            </p>

            <p className={styles.description}>
              A Dextar desenvolve e integra soluções para transformar processos logísticos, conectar sistemas de ponta a ponta e aplicar inteligência artificial onde ela realmente gera valor operacional.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/solucoes" className={styles.primaryBtn}>
                Conheça nossas soluções
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contato" className={styles.secondaryBtn}>
                Fale com um especialista
              </Link>
            </div>
          </div>

          {/* Lado Direito: Composição Gráfica Operacional */}
          <div className={styles.visualWrapper}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <div className={styles.visualTitle}>
                  <span className={styles.statusDot} />
                  Dextar Operational Hub ++
                </div>
                <span className="badge badge-cyan-dark">Em Tempo Real</span>
              </div>

              {/* Indicadores do Painel */}
              <div className={styles.visualMetrics}>
                <div className={styles.metricBox}>
                  <div className={styles.metricLabel}>WMS Armazém</div>
                  <div className={styles.metricVal}>Operativo</div>
                </div>
                <div className={styles.metricBox}>
                  <div className={styles.metricLabel}>Integrações ERP</div>
                  <div className={styles.metricVal}>Sincronizado</div>
                </div>
                <div className={styles.metricBox}>
                  <div className={styles.metricLabel}>Intelligence++</div>
                  <div className={styles.metricVal}>Ativo</div>
                </div>
              </div>

              {/* Simulação de Fluxo Operacional */}
              <div className={styles.flowGraphic}>
                <div className={styles.flowRow}>
                  <span>01. Recebimento & Conferência</span>
                  <span style={{ color: "var(--dx-emerald-500)", fontWeight: 600 }}>100% Auditado</span>
                </div>
                <div className={styles.flowRow}>
                  <span>02. Armazenagem Direcionada</span>
                  <span style={{ color: "var(--dx-cyan-400)", fontWeight: 600 }}>Otimizada</span>
                </div>
                <div className={styles.flowRow}>
                  <span>03. Ondas de Separação (Coletores)</span>
                  <span style={{ color: "var(--dx-cyan-400)", fontWeight: 600 }}>Em Execução</span>
                </div>
                <div className={styles.flowRow}>
                  <span>04. Insight++ de Produtividade</span>
                  <span style={{ color: "var(--dx-purple-500)", fontWeight: 600 }}>0 Anomalias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
