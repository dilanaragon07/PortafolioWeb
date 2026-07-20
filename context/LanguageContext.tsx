"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/content";

const STORAGE_KEY = "dilan-portfolio-lang";
const TRANSITION_MS = 1050;

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  isAnimating: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLang((prev) => (prev === "en" ? "es" : "en"));
    window.setTimeout(() => setIsAnimating(false), TRANSITION_MS);
  };

  const value = useMemo(() => ({ lang, toggleLang, isAnimating }), [lang, isAnimating]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
