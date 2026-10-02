import type { Metadata } from "next";
import Link from "next/link";
import WmsHighlight from "@/components/Sections/WmsHighlight";
import FinalCta from "@/components/Sections/FinalCta";
import styles from "./wms.module.css";

export const metadata: Metadata = {
  title: "WMS Dextar++ | Gestão e Automação de Armazéns",
  description:
    "O WMS Dextar++ apoia a gestão e a execução do armazém, conectando pessoas, coletores móveis, estoque e endereços em um fluxo rastreável.",
};

export default function WmsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge badge-cyan-dark">WMS DEXTAR++</span>
          <h1 className={styles.title}>Controle o armazém. Conecte a operação.</h1>
          <p className={styles.subtitle}>
            O WMS Dextar++ é a solução completa de gestão e execução de estoque, cobrindo todo o ciclo operacional desde a chegada do caminhão no recebimento até o embarque final da expedição.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contato" className="btn-primary" style={{ padding: "14px 28px", background: "var(--dx-cyan-500)", color: "#fff", borderRadius: "8px", fontWeight: 600 }}>
              Solicitar demonstração do WMS
            </Link>
          </div>
        </div>
      </section>

      <WmsHighlight />

      <section className="section">
        <div className="container">
          <div className={styles.grid2}>
            <div>
              <span className="badge badge-cyan">OPERAÇÃO MÓVEL E COLETORES</span>
              <h2 style={{ fontSize: "2rem", marginTop: "12px", marginBottom: "16px" }}>
                Execução orientada por código de barras no chão de fábrica
              </h2>
              <p style={{ color: "var(--dx-text-muted)", lineHeight: 1.6 }}>
                Os fluxos do WMS Dextar++ são projetados para execução em dispositivos móveis Android e coletores de radiofrequência, priorizando a confirmação objetiva por bipagem e eliminando a digitação manual.
              </p>
              <ul style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", listStyle: "none" }}>
                <li>✓ Conferência cega física x fiscal na entrada</li>
                <li>✓ Validação mandatória de lote e data de validade</li>
                <li>✓ Reagrupamento automático de tarefas de picking</li>
                <li>✓ Alertas de divergência em tempo real no coletor</li>
              </ul>
            </div>

            <div className={styles.cardDark}>
              <h3 style={{ color: "var(--dx-cyan-400)", marginBottom: "12px" }}>WMS Conectado ao seu ERP</h3>
              <p style={{ color: "var(--dx-text-light-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                A Dextar trabalha com barramentos de integração síncronos e assíncronos. A experiência da equipe inclui cenários operacionais complexos integrados a ERPs corporativos como o TOTVS Winthor.
              </p>
              <div style={{ marginTop: "16px" }}>
                <span className="validation-notice">[VALIDAR redação comercial e uso de marca antes de publicar]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
