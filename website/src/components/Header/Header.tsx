"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Soluções", href: "/solucoes" },
    { label: "WMS", href: "/wms" },
    { label: "Intelligence++", href: "/intelligence" },
    { label: "Integrações", href: "/integracoes" },
    { label: "Cases", href: "/cases" },
    { label: "Conteúdos", href: "/conteudos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {/* Logo Link */}
        <Link href="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/brand/DEXTAR_logo_negativa_escura.png"
            alt="Dextar++ Logística e Tecnologia"
            width={160}
            height={38}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop} aria-label="Navegação principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className={styles.ctaContainer}>
          <Link href="/contato" className={styles.ctaButton}>
            Fale com um especialista
          </Link>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Navegação mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contato"
          className={styles.ctaButton}
          style={{ width: "100%", marginTop: "12px" }}
          onClick={() => setMobileOpen(false)}
        >
          Fale com um especialista
        </Link>
      </nav>
    </header>
  );
}
