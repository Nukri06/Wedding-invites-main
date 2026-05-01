import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import { Divider } from "./decor/Divider";
import { CornerFloral, Ornaments } from "./decor/FloralAccents";
import sprig from "@/assets/sprig.png";

export const Venue = () => {
  const { lang, t } = useLang();
  const venue = lang === "ka" ? weddingConfig.venueKa : weddingConfig.venueEn;
  const address = lang === "ka" ? weddingConfig.addressKa : weddingConfig.addressEn;

  return (
    <section id="venue" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <CornerFloral position="tl" size="md" className="opacity-70" />
      <CornerFloral position="br" size="md" className="opacity-70" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <p className="font-script text-2xl md:text-3xl text-gold">{t.venue.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">{t.venue.title}</h2>
          <div className="mt-3 flex justify-center"><Ornaments /></div>
          <Divider />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-8"
        >
          <img src={sprig} alt="" aria-hidden loading="lazy"
            className="hidden md:block absolute -top-2 left-1/2 -translate-x-[140%] w-32 opacity-80" />
          <img src={sprig} alt="" aria-hidden loading="lazy"
            className="hidden md:block absolute -top-2 left-1/2 translate-x-[40%] w-32 opacity-80 scale-x-[-1]" />
          <p className="font-display text-3xl md:text-4xl text-ink mb-2">{venue}</p>
          <p className="flex items-center justify-center gap-2 text-ink/70 italic">
            <MapPin className="size-4 text-gold" /> {address}
          </p>
        </motion.div>

  
      </div>
    </section>
  );
};