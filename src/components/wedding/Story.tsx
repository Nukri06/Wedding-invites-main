import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import goldFrame from "@/assets/gold-frame.png";
import peony from "@/assets/peony.png";
import { Divider } from "./decor/Divider";
import { CornerFloral, Ornaments } from "./decor/FloralAccents";

export const Story = () => {
  const { t, lang } = useLang();
  const initials = lang === "ka"
    ? `${weddingConfig.brideKa[0]} & ${weddingConfig.groomKa[0]}`
    : `${weddingConfig.brideEn[0]} & ${weddingConfig.groomEn[0]}`;

  return (
    <section className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <CornerFloral position="tl" size="md" className="opacity-70" />
      <CornerFloral position="br" size="md" className="opacity-70" />

      <img
        src={peony}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute top-1/3 -left-16 w-48 opacity-60 hidden md:block"
      />
      <img
        src={peony}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute bottom-1/4 -right-16 w-48 opacity-60 hidden md:block scale-x-[-1]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-2xl md:text-3xl text-gold mb-2">{t.story.kicker}</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">{t.story.title}</h2>
        <Ornaments />

        {/* Monogram inside gold frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto my-10 w-56 md:w-64 aspect-square flex items-center justify-center"
        >
          <img
            src={goldFrame}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full"
          />
          <span className="font-script text-5xl md:text-6xl gradient-gold-text relative">
            {initials}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-lg md:text-xl leading-relaxed text-ink/80 italic"
        >
          {t.story.body}
        </motion.p>

        <Divider />

        <p className="font-script text-2xl text-gold">{t.story.signature}</p>
      </div>
    </section>
  );
};