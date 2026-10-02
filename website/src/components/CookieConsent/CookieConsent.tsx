"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true); // Default true until mounted to prevent SSR flash

  useEffect(() => {
    const consent = localStorage.getItem("dextar_cookie_consent");
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dextar_cookie_consent", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Consentimento de Cookies e Privacidade">
      <p className={styles.text}>
        <strong>Respeito à sua privacidade:</strong> Utilizamos cookies essenciais para garantir o funcionamento do site e aprimorar sua experiência. Para saber mais, consulte nossa{" "}
        <Link href="/privacidade" className={styles.privacyLink}>
          Política de Privacidade
        </Link>.
      </p>
      <div className={styles.actions}>
        <button onClick={handleAccept} className={styles.acceptBtn}>
          Aceitar e Prosseguir
        </button>
      </div>
    </div>
  );
}
