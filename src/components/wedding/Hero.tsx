import { motion } from "framer-motion";
import column from "@/assets/column.png";
import crown from "@/assets/floral-crown.png";
import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import { Divider } from "./decor/Divider";
import { CornerFloral, Ornaments } from "./decor/FloralAccents";
import peony from "@/assets/peony.png";

export const Hero = () => {
  const { lang, t } = useLang();
  const bride = lang === "ka" ? weddingConfig.brideKa : weddingConfig.brideEn;
  const groom = lang === "ka" ? weddingConfig.groomKa : weddingConfig.groomEn;
  const dateLabel = lang === "ka" ? weddingConfig.dateLabelKa : weddingConfig.dateLabelEn;
  const time = lang === "ka" ? weddingConfig.timeKa : weddingConfig.timeEn;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-soft pt-24 pb-20">
      {/* Top corner florals */}
      <CornerFloral position="tl" size="lg" className="opacity-90 z-10" />
      <CornerFloral position="tr" size="lg" className="opacity-90 z-10" />

      {/* Columns */}
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 bottom-0 h-[60vh] md:h-[80vh] w-auto opacity-90 z-0"
      />
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 bottom-0 h-[60vh] md:h-[80vh] w-auto opacity-90 scale-x-[-1] z-0"
      />

      {/* Floating peonies for richness */}
      <img
        src={peony}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/3 left-2 md:left-12 w-24 md:w-40 opacity-80 z-0"
      />
      <img
        src={peony}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/2 right-2 md:right-12 w-24 md:w-40 opacity-80 scale-x-[-1] z-0"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.img
          src={crown}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto mb-6 w-72 md:w-[28rem] h-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-script text-3xl md:text-4xl text-gold mb-3"
        >
          {t.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-ink leading-tight"
        >
          <span className="block">{bride}</span>
          <span className="block my-2 text-2xl md:text-4xl font-script gradient-gold-text">
            {t.hero.and}
          </span>
          <span className="block">{groom}</span>
        </motion.h1>

        <Divider />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-2"
        >
          <p className="font-display text-xl md:text-2xl tracking-[0.3em] uppercase text-gold-deep">
            {dateLabel}
          </p>
          <p className="font-body text-base md:text-lg italic text-ink/70">{time}</p>
          <div className="pt-6 flex justify-center"><Ornaments /></div>
          <p className="pt-2 font-script text-2xl md:text-3xl text-gold">
            {t.hero.saveTheDate}
          </p>
        </motion.div>
      </div>
    </section>
  );
};