import { useLang } from "@/contexts/LanguageContext";
import { weddingConfig } from "@/config/wedding";
import { Divider } from "./decor/Divider";
import crown from "@/assets/floral-crown.png";
import { weddingConfig as cfg } from "@/config/wedding";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative bg-gradient-soft pt-20 pb-12 text-center overflow-hidden">
      <img
        src={crown}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none mx-auto w-72 md:w-[26rem] opacity-90 mb-2 scale-y-[-1]"
      />
      <Divider />
      <p className="font-script text-3xl md:text-4xl gradient-gold-text">
        {weddingConfig.monogram}
      </p>
      <p className="mt-4 font-display tracking-[0.4em] text-xs uppercase text-ink/60">
        {t.footer.withLove}
      </p>
      <p className="mt-2 font-script text-xl text-gold">{t.footer.seeYou}</p>
      <p className="mt-6 font-display tracking-[0.3em] text-xs uppercase text-gold-deep/70">
        {cfg.dateLabelKa} · {cfg.dateLabelEn}
      </p>
    </footer>
  );
};