import { motion } from "motion/react";
import {
  Speaker,
  Lightbulb,
  MonitorPlay,
  Radio,
  Layers,
  Wrench,
  Video,
  Building2,
  Clapperboard,
  Tv,
  Camera,
  ClipboardCheck,
  AudioLines,
  Scissors,
  Footprints,
  SlidersHorizontal,
  Disc3,
  Mic,
  type LucideIcon,
} from "lucide-react";

type Group = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  items: { icon: LucideIcon; label: string }[];
};

const GROUPS: Group[] = [
  {
    id: "eventos",
    index: "01",
    title: "Eventos & Stage",
    blurb:
      "Puesta en escena completa para eventos en vivo: sonido, luces, pantallas y el equipo humano para que todo salga perfecto.",
    items: [
      { icon: Speaker, label: "Amplificación" },
      { icon: Lightbulb, label: "Iluminación" },
      { icon: MonitorPlay, label: "Pantallas LED" },
      { icon: Radio, label: "Streaming en vivo" },
      { icon: Layers, label: "Escenarios" },
      { icon: Wrench, label: "Estructuras" },
    ],
  },
  {
    id: "produccion",
    index: "02",
    title: "Producción General",
    blurb:
      "De tu cabeza a la pantalla: ejecutamos proyectos audiovisuales, diseño y producción técnica con estándar broadcast para hacer despegar tu marca.",
    items: [
      { icon: Video, label: "Video Corporativo" },
      { icon: Building2, label: "Producción Técnica" },
      { icon: Clapperboard, label: "Cine" },
      { icon: Tv, label: "Producción de TV" },
      { icon: Camera, label: "Diseño Web" },
      { icon: ClipboardCheck, label: "Diseño Gráfico" },
    ],
  },
  {
    id: "postproduccion",
    index: "03",
    title: "Postproducción",
    blurb:
      "Salas de post y estudios de audio para terminar tu material con estándar de broadcast, cine y plataformas digitales.",
    items: [
      { icon: Mic, label: "Postproducción AV" },
      { icon: Scissors, label: "Postproducción de Audio" },
      { icon: AudioLines, label: "Diseño Sonoro" },
      { icon: Footprints, label: "Foley" },
      { icon: SlidersHorizontal, label: "Mezcla" },
      { icon: Disc3, label: "Mastering" },
    ],
  },
];

export function Services() {
  return (
    <div className="relative">
      {GROUPS.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={
            groupIndex % 2 === 1
              ? "border-y border-border bg-surface py-20 sm:py-28"
              : "py-20 sm:py-28"
          }
        >
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end"
            >
              <div className="min-w-0">
                <span className="font-display text-xs font-bold tracking-[0.3em] text-neon">
                  {group.index}
                </span>
                <h2 className="mt-3 text-3xl uppercase sm:text-5xl">{group.title}</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {group.blurb}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, i) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-lg border border-border bg-surface-2/60 p-6 transition-colors hover:border-neon/60"
                >
                  <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-primary/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <item.icon className="relative size-6 text-neon" />
                  <h3 className="relative mt-5 text-base font-semibold tracking-tight">
                    {item.label}
                  </h3>
                  <span className="relative mt-4 block h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-neon" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
