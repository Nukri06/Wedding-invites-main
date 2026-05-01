import { useLang } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-1 rounded-full border border-gold/40 bg-ivory/80 px-1 py-1 backdrop-blur-md shadow-soft">
      <button
        onClick={() => setLang("ka")}
        className={`rounded-full px-3 py-1 text-xs font-display tracking-wider transition ${
          lang === "ka" ? "bg-gold text-ivory" : "text-ink/70 hover:text-gold"
        }`}
        aria-pressed={lang === "ka"}
      >
        ქარ
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 text-xs font-display tracking-wider transition ${
          lang === "en" ? "bg-gold text-ivory" : "text-ink/70 hover:text-gold"
        }`}
        aria-pressed={lang === "en"}
      >
        ENG
      </button>
    </div>
  );
};