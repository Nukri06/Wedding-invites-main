import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import vertical from "@/assets/floral-vertical.png";

export const Quote = () => {
  const { t } = useLang();
  return (
    <section className="relative bg-cream/60 py-24 md:py-32 overflow-hidden">
      <img
        src={vertical}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute top-0 bottom-0 left-0 -translate-x-1/3 h-full w-auto opacity-70 hidden md:block"
      />
      <img
        src={vertical}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute top-0 bottom-0 right-0 translate-x-1/3 scale-x-[-1] h-full w-auto opacity-70 hidden md:block"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <span aria-hidden className="font-display text-7xl md:text-8xl text-gold/40 leading-none block">
          “
        </span>
        <p className="font-display italic text-2xl md:text-4xl text-ink/85 leading-snug -mt-6">
          {t.quote.text}
        </p>
        <p className="mt-6 font-body tracking-[0.3em] uppercase text-xs text-gold-deep">
          {t.quote.author}
        </p>
      </motion.div>
    </section>
  );
};