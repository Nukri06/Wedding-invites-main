import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLang } from "@/contexts/LanguageContext";
import { Divider } from "./decor/Divider";
import { CornerFloral, Ornaments } from "./decor/FloralAccents";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";  

const photos = [g1, g2, g3, g4, g5, g6];

export const Gallery = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative bg-cream/40 py-24 md:py-32 overflow-hidden">
      <CornerFloral position="tr" size="md" className="opacity-70" />
      <CornerFloral position="bl" size="md" className="opacity-70" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <p className="font-script text-2xl md:text-3xl text-gold">{t.gallery.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">{t.gallery.title}</h2>
          <div className="mt-3 flex justify-center"><Ornaments /></div>
          <Divider />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((src, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden border border-gold/30 bg-ivory aspect-square shadow-soft"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/60 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl bg-ivory border-gold/40">
          {open && <img src={open} alt="" className="w-full h-auto rounded" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};