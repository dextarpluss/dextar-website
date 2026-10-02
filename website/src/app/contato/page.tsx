import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Fale com um Especialista | Dextar++",
  description:
    "Entre em contato com a equipe da Dextar++ para entender como WMS, Integrações e Inteligência Artificial podem transformar sua operação.",
};

export default function ContatoPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--dx-surface-soft)", padding: "80px 0", borderBottom: "1px solid var(--dx-border)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "680px" }}>
          <span className="badge badge-cyan">CONTATO DIRETO</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Vamos Conversar Sobre a Sua Operação?
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--dx-text-muted)", lineHeight: 1.6 }}>
            Conte como sua empresa trabalha hoje. Vamos entender onde tecnologia, integração de sistemas e inteligência artificial podem gerar valor real.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContactForm />
          
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <span className="validation-notice">
              [VALIDAR e-mail corporativo final, telefone oficial e endereço comercial antes da publicação pública]
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
