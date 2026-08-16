import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import stage from "@/assets/work-stage.jpg";
import tv from "@/assets/work-tv.jpg";
import audio from "@/assets/work-audio.jpg";
import corporate from "@/assets/work-corporate.jpg";
import streaming from "@/assets/work-streaming.jpg";
import cine from "@/assets/work-cine.jpg";

const PROJECTS = [
  { title: "Fonda Típico Chileno", category: "Eventos & Stage", image: stage, span: true },
  { title: "Late Show Nacional", category: "Producción TV", image: tv, span: false },
  { title: "Estudio Mezcla & Mastering", category: "Postproducción", image: audio, span: false },
  { title: "Summit Corporativo 2026", category: "Eventos & Stage", image: corporate, span: false },
  { title: "Streaming Multicámara", category: "Producción AV", image: streaming, span: false },
  { title: "Cortometraje 'Ruido'", category: "Cine", image: cine, span: true },
];

export function Portfolio() {
  const [active, setActive] = useState<(typeof PROJECTS)[number] | null>(null);

  return (
    <section id="portafolio" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <span className="font-display text-xs font-bold tracking-[0.3em] text-neon">
              SHOWREEL
            </span>
            <h2 className="mt-3 text-3xl uppercase sm:text-5xl">Proyectos realizados</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Nos apasiona el detalle técnico y la precisión en terreno. Cada proyecto es un compromiso con la excelencia audiovisual, sin margen de error.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-64 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setActive(project)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-lg border border-border text-left ${
                project.span ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
              <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-border glass-panel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Play className="size-4 text-neon" />
              </span>
              <span className="absolute inset-x-5 bottom-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-neon">
                  {project.category}
                </span>
                <span className="mt-2 block font-display text-lg font-extrabold uppercase">
                  {project.title}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-border bg-surface sm:max-w-3xl">
          <DialogTitle className="text-xl uppercase">{active?.title}</DialogTitle>
          <div className="aspect-video w-full overflow-hidden rounded-md border border-border">
            {/* REEMPLAZAR: video de muestra del proyecto */}
            <video
              className="size-full object-cover"
              poster={active?.image}
              src="/assets/hero-video.mp4"
              controls
              playsInline
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {active?.category} · Producción técnica integral: audio, video, iluminación y dirección
            en terreno.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
