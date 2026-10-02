import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "120px 0" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <span className="badge badge-cyan" style={{ fontSize: "1rem" }}>ERRO 404</span>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
          Página não encontrada
        </h1>
        <p style={{ color: "var(--dx-text-muted)", fontSize: "1.0625rem", marginBottom: "32px" }}>
          A rota que você tentou acessar não existe ou foi movida.
        </p>
        <Link href="/" className="btn-primary" style={{ padding: "14px 28px", background: "var(--dx-cyan-500)", color: "#fff", borderRadius: "8px", fontWeight: 600 }}>
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
