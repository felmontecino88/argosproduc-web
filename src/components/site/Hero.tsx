import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "./QuoteDialog";
import { scrollToSection } from "./nav-config";

export function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] w-full overflow-hidden">
      {/* REEMPLAZAR: coloca tu video en public/assets/hero-video.mp4 y el poster en public/assets/hero-poster.jpg */}
      <video
        className="absolute inset-0 size-full object-cover"
        src="/assets/hero-video.mp4"
        poster="/assets/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="section-shell relative flex h-full flex-col justify-end pb-20 sm:justify-center sm:pb-0">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-neon"
        >
          Audio · Video · Iluminación · Stage
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl leading-[0.95] uppercase sm:text-6xl lg:text-7xl"
        >
          Tecnología & Producción{" "}
          <span className="text-gradient">Audiovisual sin límites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Soluciones integrales en Sonido, Video, Iluminación, Streaming y Producción de Eventos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <QuoteDialog>
            <Button size="lg" className="glow-ring">
              Cotizar Proyecto
            </Button>
          </QuoteDialog>
          <Button variant="ghost" size="lg" onClick={() => scrollToSection("eventos")}>
            Ver servicios <ArrowDown />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
