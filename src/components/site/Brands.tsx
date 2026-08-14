import { motion } from "motion/react";

const BRANDS = [
  "SHURE",
  "L-ACOUSTICS",
  "BLACKMAGIC",
  "SENNHEISER",
  "ROBE",
  "MARTIN AUDIO",
  "AVID",
  "YAMAHA",
  "SONY",
  "DiGiCo",
  "ARRI",
  "MA LIGHTING",
];

export function Brands() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-neon">
            CONFIANZA & EQUIPAMIENTO
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl uppercase sm:text-4xl">
            Marcas con las que operamos
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group grid h-24 place-items-center bg-surface transition-colors hover:bg-surface-2"
            >
              <span className="font-display text-sm font-extrabold tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-neon">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
