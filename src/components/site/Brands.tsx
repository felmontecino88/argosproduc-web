import { motion } from "motion/react";

const CLIENTS = [
  { name: "COCH", logo: "/logos/coch.png" },
  { name: "Sura", logo: "/logos/sura.png" },
  { name: "Copec", logo: "/logos/copec.png" },
  { name: "MallPlaza", logo: "/logos/mallplaza.png" },
];

export function Brands() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-neon">
            TRAYECTORIA & RESPALDO
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl uppercase sm:text-4xl">
            Hemos trabajado con
          </h2>
        </div>

        {/* Layout horizontal centrado */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex h-52 w-60 items-center justify-center rounded-lg border border-border/50 bg-surface-2/40 px-6 py-4 transition-all duration-300 hover:border-neon/50 hover:bg-surface-2 hover:shadow-lg"
            >
              {/* Si tienes las imágenes en public/logos/, descombina la etiqueta img: */}
              { <img src={client.logo} alt={client.name} className="max-h-20 w-auto object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 sm:max-h-30"/> }
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}