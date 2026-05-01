import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import { Divider } from "./decor/Divider";
import { CornerFloral, Sprig } from "./decor/FloralAccents";
import sprig from "@/assets/sprig.png";

const calc = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

export const Countdown = () => {
  const { t } = useLang();
  const target = new Date(weddingConfig.date).getTime();
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { v: time.d, l: t.countdown.days },
    { v: time.h, l: t.countdown.hours },
    { v: time.m, l: t.countdown.minutes },
    { v: time.s, l: t.countdown.seconds },
  ];

  return (
    <section className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <CornerFloral position="tr" size="md" className="opacity-60" />
      <CornerFloral position="bl" size="md" className="opacity-60" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative font-display text-3xl md:text-5xl text-ink mb-3"
        >
          {t.countdown.title}
        </motion.h2>
        <p className="font-script text-2xl md:text-3xl text-gold mb-10">
          {t.countdown.quote}
        </p>

        <Divider />

        <div className="relative mt-10 grid grid-cols-4 gap-3 md:gap-6">
          {cells.map((c, i) => (
            <motion.div
              key={c.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded border border-gold/40 bg-ivory px-2 py-5 md:py-8 shadow-soft"
            >
              <span aria-hidden className="absolute inset-1 border border-gold/20 rounded-sm pointer-events-none" />
              <div className="font-display text-3xl md:text-6xl gradient-gold-text leading-none tabular-nums">
                {String(c.v).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-ink/60">
                {c.l}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <img src={sprig} alt="" aria-hidden loading="lazy" className="h-10 md:h-12 opacity-80" />
        </div>
      </div>
    </section>
  );
};