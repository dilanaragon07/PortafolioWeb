"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useScrambleText } from "@/hooks/useScramble";
import { NAV_LINKS } from "@/lib/content";

function NavLink({ href, k, children }: { href: string; k?: string; children?: React.ReactNode }) {
  const label = useScrambleText(k ?? "");
  return (
    <a
      href={href}
      className="whitespace-nowrap text-[13.5px] font-semibold text-text2 transition-colors duration-300 hover:text-white"
    >
      {k ? label : children}
    </a>
  );
}

export function Nav() {
  const { lang, toggleLang, isAnimating } = useLanguage();
  const ctaLabel = useScrambleText("nav.cta");

  return (
    <nav className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-9 whitespace-nowrap rounded-full border border-white/[0.08] bg-[rgba(10,10,10,.55)] px-5 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-2xl max-[640px]:gap-4 max-[640px]:px-4">
      <a
        href="#top"
        className="font-display text-[17px] font-bold tracking-[.02em] text-white"
        aria-label="dilan.dev — home"
      >
        dilan<span className="text-beige2">.dev</span>
      </a>

      <div className="hidden items-center gap-6 sm:flex">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.key} href={link.href} k={link.key} />
        ))}
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 22 } }}
        whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 30 } }}
        className="rounded-full bg-beige px-5 py-2.5 text-[13px] font-extrabold text-ink shadow-[0_0_24px_rgba(216,196,160,.25)] transition-colors duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(236,224,203,.45)] max-sm:hidden"
      >
        {ctaLabel}
      </motion.a>

      <motion.button
        type="button"
        onClick={toggleLang}
        disabled={isAnimating}
        whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 22 } }}
        whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 500, damping: 30 } }}
        aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
        className="min-h-[36px] rounded-full border border-white/[0.16] bg-white/5 px-3.5 py-2 font-mono text-xs font-bold tracking-[.08em] text-beige transition-colors duration-300 hover:border-beige/60 disabled:cursor-wait disabled:opacity-70"
      >
        {lang === "en" ? "ES" : "EN"}
      </motion.button>
    </nav>
  );
}
