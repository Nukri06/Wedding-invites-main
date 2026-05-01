import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/wedding/LanguageToggle";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Story } from "@/components/wedding/Story";
import { Quote } from "@/components/wedding/Quote";
import { Schedule } from "@/components/wedding/Schedule";
import { Venue } from "@/components/wedding/Venue";
import { Gallery } from "@/components/wedding/Gallery";
import { Footer } from "@/components/wedding/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-ivory text-ink overflow-x-hidden">
        <LanguageToggle />
        <Hero />
        <Countdown />
        <Story />
        <Quote />
        <Schedule />
        <Venue />
        <Gallery />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
