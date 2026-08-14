import { Facebook, Instagram, Linkedin, Radio } from "lucide-react";
import { NAV_SECTIONS, scrollToSection } from "./nav-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary">
              <Radio className="size-4 text-primary-foreground" />
            </span>
            <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em]">
              Vértice<span className="text-neon">AV</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Servicios audiovisuales integrales: audio, video, iluminación, cine, TV, stage y
            eventos.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Servicios</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className="transition-colors hover:text-neon"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Accesos rápidos</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("portafolio")}
                className="transition-colors hover:text-neon"
              >
                Portafolio
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("contacto")}
                className="transition-colors hover:text-neon"
              >
                Cotizar proyecto
              </button>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-neon">
                Políticas de privacidad
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Síguenos</h3>
          <div className="mt-4 flex gap-2">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-neon hover:text-neon"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} VérticeAV. Todos los derechos reservados.
      </div>
    </footer>
  );
}
