import styles from "./QuickDifferentials.module.css";

export default function QuickDifferentials() {
  const items = [
    {
      title: "Experiência em Operação e ERP",
      description: "Tecnologia construída por quem vivencia a rotina de armazéns, logística e regras de negócio de ERPs corporativos.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Implantação Próxima da Operação",
      description: "Acompanhamento do entendimento inicial até a virada de chave no chão de fábrica e pós-go-live.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Integração Corporativa",
      description: "Conexão fluida entre ERP, APIs, WMS e plataformas terceiras sem criar ilhas isoladas de informação.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="8" height="8" rx="2" />
          <rect x="14" y="2" width="8" height="8" rx="2" />
          <rect x="14" y="14" width="8" height="8" rx="2" />
          <rect x="2" y="14" width="8" height="8" rx="2" />
        </svg>
      ),
    },
    {
      title: "Inteligência Aplicada",
      description: "Dados e modelos de IA estruturados para resolver gargalos operacionais reais e apoiar decisões humanas.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 12L2.5 7.5" />
          <path d="M12 12v10" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.wrapper} aria-label="Diferenciais Dextar++">
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
