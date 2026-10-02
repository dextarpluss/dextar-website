import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Coluna Marca */}
          <div className={styles.brandCol}>
            <Image
              src="/images/brand/DEXTAR_logo_negativa_escura.png"
              alt="Dextar++ Logística e Tecnologia"
              width={150}
              height={36}
              className={styles.brandLogo}
            />
            <p className={styles.tagline}>
              <strong>Dextar++</strong> — Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes.
            </p>
          </div>

          {/* Coluna Soluções */}
          <div>
            <h4 className={styles.colTitle}>Soluções</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/wms" className={styles.link}>
                  WMS Dextar++
                </Link>
              </li>
              <li>
                <Link href="/integracoes" className={styles.link}>
                  Integrações ERP
                </Link>
              </li>
              <li>
                <Link href="/intelligence" className={styles.link}>
                  Dextar Intelligence++
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className={styles.link}>
                  Todas as Soluções
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna Empresa */}
          <div>
            <h4 className={styles.colTitle}>Empresa</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/sobre" className={styles.link}>
                  Sobre a Dextar
                </Link>
              </li>
              <li>
                <Link href="/cases" className={styles.link}>
                  Cases & Resultados
                </Link>
              </li>
              <li>
                <Link href="/conteudos" className={styles.link}>
                  Conteúdos & Artigos
                </Link>
              </li>
              <li>
                <Link href="/contato" className={styles.link}>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna Legal & Governança */}
          <div>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacidade" className={styles.link}>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <span className={styles.legalNotice}>
                  Governança LGPD
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Dextar Soluções em Tecnologia. Todos os direitos reservados.</p>
          <p className={styles.legalNotice}>
            Tecnologia para operações mais inteligentes ++
          </p>
        </div>
      </div>
    </footer>
  );
}
