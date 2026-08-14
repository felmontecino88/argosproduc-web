import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-neon">
            CONTACTO
          </span>
          <h2 className="mt-3 text-3xl uppercase sm:text-5xl">
            Cuéntanos tu <span className="text-gradient">proyecto</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Recibe una propuesta técnica y comercial en menos de 24 horas hábiles. Visitas a terreno
            e ingeniería de escenario incluidas.
          </p>

          <ul className="mt-10 grid gap-4 text-sm">
            <li className="flex items-center gap-3 text-muted-foreground">
              <Phone className="size-4 shrink-0 text-neon" /> +56 9 XXXX XXXX
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Mail className="size-4 shrink-0 text-neon" /> contacto@verticeav.cl
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-neon" /> Santiago, Chile
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
