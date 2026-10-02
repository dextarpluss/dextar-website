import { METHOD_STEPS } from "@/data/dextarData";
import styles from "./MethodSection.module.css";

export default function MethodSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="badge badge-cyan">NOSSO MÉTODO</span>
          <h2 className={styles.title}>Como trabalhamos junto à sua equipe</h2>
        </div>

        <div className={styles.grid}>
          {METHOD_STEPS.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
