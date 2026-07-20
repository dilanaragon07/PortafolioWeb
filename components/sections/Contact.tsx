"use client";

import { motion } from "framer-motion";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { CONTACTS } from "@/lib/content";

function ContactPill({ href, glyph, labelKey }: { href: string; glyph: string; labelKey: string }) {
  const label = useScrambleText(labelKey);
  const isExternal = href.startsWith("http");
  const isDownload = href.endsWith(".pdf");
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={isDownload}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 500, damping: 30 } }}
      className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.035] px-7 py-[15px] text-[14.5px] font-bold text-text1 backdrop-blur-md transition-colors duration-300 hover:border-beige/60 hover:text-white hover:shadow-[0_14px_40px_rgba(0,0,0,.5),0_0_24px_rgba(216,196,160,.1)]"
    >
      <span className="font-mono text-beige2">{glyph}</span>
      <span>{label}</span>
    </motion.a>
  );
}

export function Contact() {
  const label = useScrambleText("contact.label");
  const h1a = useScrambleText("contact.h1a");
  const h1b = useScrambleText("contact.h1b");
  const p = useScrambleText("contact.p");
  const rights = useScrambleText("footer.rights");
  const footerRight = useScrambleText("footer.right");

  return (
    <section id="contact" className="relative z-[1] mx-auto max-w-[1200px] px-10 pb-20 pt-[100px]">
      <Reveal
        index={0}
        className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] px-[60px] py-20 text-center backdrop-blur-xl max-[640px]:px-6 max-[640px]:py-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[40px]"
          style={{ background: "radial-gradient(ellipse, rgba(216,196,160,.14), transparent 65%)" }}
        />
        <div className="relative">
          <div className="mb-[18px] font-mono text-xs tracking-[.22em] text-beige2">{label}</div>
          <h2 className="font-display m-0 mb-[18px] text-[clamp(36px,4.4vw,58px)] font-bold tracking-[-.025em] text-white">
            {h1a}
            <br />
            <span className="text-gradient-beige">{h1b}</span>
          </h2>
          <p className="mx-auto mb-11 max-w-[480px] text-[16.5px] leading-[1.7] text-text2">{p}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {CONTACTS.map((contact) => (
              <ContactPill key={contact.labelKey} href={contact.href} glyph={contact.glyph} labelKey={contact.labelKey} />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-[60px] flex flex-wrap items-center justify-between gap-5 font-mono text-xs text-muted">
        <span>{rights}</span>
        <span>{footerRight}</span>
      </div>
    </section>
  );
}
