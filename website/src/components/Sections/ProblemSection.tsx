import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
  const symptoms = [
    {
      title: "Ilhas de Informação",
      text: "ERP e estoque desatualizados geram divergências fiscais e operacionais.",
    },
    {
      title: "Baixa Rastreabilidade",
      text: "Dificuldade de rastrear lotes, validades e conferências de expedientes.",
    },
    {
      title: "Retrabalho Físico",
      text: "Erros de separação exijam novas conferências e retratamentos de carga.",
    },
    {
      title: "Decisões Tardias",
      text: "Falta de visibilidade em tempo real para ajustar gargalos durante o turno.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.grid}>
          {/* Lado Esquerdo: Mensagem Central */}
          <div>
            <div className={styles.badge}>
              <span className="badge badge-cyan">O DESAFIO OPERACIONAL</span>
            </div>

            <h2 className={styles.title}>
              Operações complexas não precisam de mais sistemas isolados.
            </h2>

            <p className={styles.text}>
              Quando estoque, processos, pessoas e sistemas não trabalham coordenados, surgem retrabalho, baixa rastreabilidade, divergências de faturamento e decisões tardias.
              <br /><br />
              A Dextar atua na conexão profunda entre <strong>processo, software, integração e inteligência</strong>, garantindo orquestração real do chão de fábrica até o ERP.
            </p>
          </div>

          {/* Lado Direito: Os Sintomas Frequentes */}
          <div className={styles.symptomsGrid}>
            {symptoms.map((sym, idx) => (
              <div key={idx} className={styles.symptomCard}>
                <h3 className={styles.symptomTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {sym.title}
                </h3>
                <p className={styles.symptomText}>{sym.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
