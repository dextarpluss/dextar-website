"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    areaInteresse: "WMS Dextar++",
    mensagem: "",
    privacidade: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacidade) {
      alert("Por favor, aceite os termos de privacidade para enviar o formulário.");
      return;
    }
    setStatus("submitting");

    // Simulação de envio seguro com sanitização
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className={styles.formCard}>
        <div className={styles.successAlert}>
          ✓ Mensagem enviada com sucesso! Um especialista da Dextar++ entrará em contato em breve.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label htmlFor="nome" className={styles.label}>
            Nome completo *
          </label>
          <input
            id="nome"
            type="text"
            required
            className={styles.input}
            placeholder="Seu nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="empresa" className={styles.label}>
            Empresa *
          </label>
          <input
            id="empresa"
            type="text"
            required
            className={styles.input}
            placeholder="Nome da sua empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>
            E-mail corporativo *
          </label>
          <input
            id="email"
            type="email"
            required
            className={styles.input}
            placeholder="seu.nome@empresa.com.br"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="telefone" className={styles.label}>
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            type="tel"
            className={styles.input}
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="areaInteresse" className={styles.label}>
            Área de maior interesse *
          </label>
          <select
            id="areaInteresse"
            className={styles.select}
            value={formData.areaInteresse}
            onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
          >
            <option value="WMS Dextar++">WMS Dextar++ (Gestão de Armazéns)</option>
            <option value="Integrações ERP">Integrações ERP & APIs</option>
            <option value="Dextar Intelligence++">Dextar Intelligence++ (IA Aplicada)</option>
            <option value="Agendamento de Docas">Agendamento de Docas</option>
            <option value="Gestão de Entregas">Gestão de Entregas</option>
            <option value="Projeto Especial">Projeto Especial Sob Medida</option>
            <option value="Outro">Outro assunto</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="mensagem" className={styles.label}>
            Conte brevemente sobre o seu desafio operacional
          </label>
          <textarea
            id="mensagem"
            className={styles.textarea}
            placeholder="Descreva seu volume de expedição, ERP atual ou gargalos operacionais..."
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          />
        </div>

        <div className={styles.checkboxRow}>
          <input
            id="privacidade"
            type="checkbox"
            required
            checked={formData.privacidade}
            onChange={(e) => setFormData({ ...formData, privacidade: e.target.checked })}
          />
          <label htmlFor="privacidade">
            Concordo com o tratamento de dados pessoais de acordo com a Política de Privacidade para fins de contato comercial.
          </label>
        </div>

        <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
          {status === "submitting" ? "Enviando dados..." : "Enviar Mensagem ao Especialista"}
        </button>
      </form>
    </div>
  );
}
