import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import floralCorner from "@/assets/floral-corner.png";
import { Divider } from "./decor/Divider";
import peony from "@/assets/peony.png";
import { Ornaments } from "./decor/FloralAccents";

export const Schedule = () => {
  const { lang, t } = useLang();
  return (
    <section id="schedule" className="relative bg-cream/40 py-20 md:py-28 overflow-hidden">
      <img
        src={floralCorner}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute -top-10 -left-10 w-72 md:w-[28rem] opacity-90"
      />
      <img
        src={floralCorner}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute -bottom-10 -right-10 w-72 md:w-[28rem] opacity-90 scale-[-1]"
      />

      {/* Side peonies for richer composition */}
      <img
        src={peony}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none hidden lg:block absolute top-1/3 right-4 w-40 opacity-75"
      />
      <img
        src={peony}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none hidden lg:block absolute bottom-1/4 left-4 w-40 opacity-75 scale-x-[-1]"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <p className="font-script text-2xl md:text-3xl text-gold">{t.schedule.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">{t.schedule.title}</h2>
          <div className="mt-3 flex justify-center"><Ornaments /></div>
          <Divider />
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[60px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent"
          />

          {weddingConfig.schedule.map((item, i) => (
            <motion.li
              key={item.time}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative flex md:grid md:grid-cols-2 items-center gap-4 md:gap-12 py-5"
            >
              {/* Time */}
              <div
                className={`font-display text-xl md:text-3xl text-gold-deep w-[60px] md:w-auto shrink-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"
                }`}
              >
                {item.time}
              </div>

              {/* Dot */}
              <span
                aria-hidden="true"
                className="absolute left-[60px] md:left-1/2 -translate-x-1/2 size-3 rounded-full bg-gold ring-4 ring-ivory"
              />

              {/* Title */}
              <div
                className={`flex-1 pl-6 md:pl-0 ${
                  i % 2 === 0 ? "md:pl-8" : "md:order-1 md:text-right md:pr-8"
                }`}
              >
                <p className="font-display text-lg md:text-2xl text-ink">
                  {lang === "ka" ? item.titleKa : item.titleEn}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};