"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  index?: number;
  as?: never;
};

const EASE = [0.2, 0.7, 0.2, 1] as const;

/** Fades + slides an element in once, the first time it enters the viewport. */
export function Reveal({ index = 0, children, className, ...rest }: RevealProps) {
  const delay = (index % 4) * 0.08;
  return (
    <motion.div
      data-reveal=""
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
