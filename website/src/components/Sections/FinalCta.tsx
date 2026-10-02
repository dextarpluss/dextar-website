import Link from "next/link";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.content}>
          <span className="badge badge-cyan-dark">VAMOS EVOLUIR SUA OPERAÇÃO</span>
          <h2 className={styles.title}>Sua operação pode ser mais inteligente.</h2>
          <p className={styles.text}>
            Conte como sua empresa trabalha hoje. Vamos entender onde tecnologia, integração e inteligência podem gerar valor real para o seu negócio.
          </p>
          <Link href="/contato" className={styles.btn}>
            Fale com um especialista Dextar++
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
