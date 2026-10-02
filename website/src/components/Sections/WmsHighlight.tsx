import Link from "next/link";
import { WMS_FLOW_STEPS } from "@/data/dextarData";
import styles from "./WmsHighlight.module.css";

export default function WmsHighlight() {
  return (
    <section className={styles.section} id="wms-destaque">
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-cyan-dark">WMS DEXTAR++</span>
          <h2 className={styles.title}>Controle o armazém. Conecte a operação.</h2>
          <p className={styles.subtitle}>
            O WMS Dextar++ apoia a gestão e a execução ponta a ponta, alinhando pessoas, coletores móveis, estoque e endereços em um fluxo 100% rastreável e auditável.
          </p>
        </div>

        {/* 6 Passos do Fluxo Logístico */}
        <div className={styles.flowGrid}>
          {WMS_FLOW_STEPS.map((step) => (
            <div key={step.step} className={styles.stepCard}>
              <span className={styles.stepNumber}>Etapa 0{step.step}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              <div className={styles.stepHighlight}>✓ {step.highlight}</div>
            </div>
          ))}
        </div>

        {/* Chamada para Ação WMS */}
        <div className={styles.wmsCtaRow}>
          <div className={styles.wmsCtaText}>
            WMS totalmente integrado ao seu ERP corporativo.
          </div>
          <Link href="/wms" className={styles.wmsCtaBtn}>
            Ver arquitetura completa do WMS
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
