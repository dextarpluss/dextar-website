import Link from "next/link";
import styles from "./IntegrationsDiagram.module.css";

export default function IntegrationsDiagram() {
  const nodes = [
    {
      title: "ERPs Corporativos",
      desc: "Sincronização de pedidos, faturamento e cadastro de produtos.",
    },
    {
      title: "APIs & Web Services",
      desc: "Barramento RESTful/SOAP para aplicações proprietárias.",
    },
    {
      title: "E-Commerce & B2B",
      desc: "Baixa automática de estoque e entrada de pedidos online.",
    },
    {
      title: "Transportadoras & TMS",
      desc: "Despacho, rastreio e emissão de documentação de transporte.",
    },
  ];

  return (
    <section className={styles.section} id="integracoes-diagrama">
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-cyan">CONECTIVIDADE TOTAL</span>
          <h2 className={styles.title}>Sistemas conectados. Operação fluindo.</h2>
          <p className={styles.subtitle}>
            Elimine digitação manual e ilhas de informação. A arquitetura Dextar conecta sua infraestrutura existente a um ecossistema integrado e auditável.
          </p>
        </div>

        <div className={styles.diagramWrapper}>
          {/* Hub Central Dextar++ */}
          <div className={styles.hubCenter}>
            <div className={styles.hubTitle}>Dextar Hub Integration ++</div>
            <div className={styles.hubSub}>Barramento de Integração & Rastreabilidade</div>
          </div>

          {/* Nós Conectados */}
          <div className={styles.nodesGrid}>
            {nodes.map((node, idx) => (
              <div key={idx} className={styles.nodeCard}>
                <h3 className={styles.nodeTitle}>{node.title}</h3>
                <p className={styles.nodeDesc}>{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Marcação [VALIDAR] conforme regra inegociável */}
          <div className={styles.winthorNotice}>
            <span className="validation-notice">
              [VALIDAR] Experiência prévia com ambientes ERP TOTVS Winthor sob consulta prévia de escopo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
