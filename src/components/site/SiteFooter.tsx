import { useState } from "react";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { NAV_SECTIONS, scrollToSection } from "./nav-config";

export function SiteFooter() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <img src="/assets/argproduc-cube.svg" alt="ARGPRODUC" className="size-9 shrink-0 object-contain" />
            <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em]">
              ARG<span className="text-neon">PRODUC</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Servicios audiovisuales integrales: audio, video, iluminación, cine, TV, diseño, stage y
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
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="transition-colors hover:text-neon"
              >
                Políticas de privacidad
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Síguenos</h3>
          <div className="mt-4 flex gap-2">
            {[
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/argproduc?igsh=MXI5NjVkMXhvZmU1dw%3D%3D&utm_source=qr" },
              { icon: Linkedin, label: "LinkedIn", href: "https://cl.linkedin.com/company/argos-producciones-spa" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1ENNTA3oUH/?mibextid=wwXIfr" },
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

      <div className="section-shell mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} ARGPRODUC. Todos los derechos reservados.</p>
        <p className="sm:pr-6 md:pr-10">
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/felipe-montecino/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-neon hover:underline"
          >
            Felipe Montecino
          </a>
        </p>
      </div>

      {/* MODAL POPUP DE POLÍTICAS DE PRIVACIDAD */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-lg border border-border bg-surface p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
              Políticas de Privacidad
            </h3>

            <div className="mt-4 space-y-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>
                En <strong className="text-foreground">ARGPRODUC</strong> nos tomamos muy en serio la privacidad y protección de los datos personales de nuestros clientes y visitantes.
              </p>
              
              <p className="font-semibold text-foreground">1. Recopilación de Información</p>
              <p>
                Los datos ingresados a través de nuestro formulario de cotización (nombre, correo electrónico, teléfono y mensaje) son utilizados exclusivamente para gestionar la solicitud de servicios audiovisuales y ponernos en contacto contigo.
              </p>

              <p className="font-semibold text-foreground">2. Uso de los Datos</p>
              <p>
                No compartimos, vendemos ni cedemos tu información personal a terceros bajo ninguna circunstancia. La información proporcionada es almacenada de forma confidencial.
              </p>

              <p className="font-semibold text-foreground">3. Contacto y Derechos</p>
              <p>
                Si deseas modificar, actualizar o solicitar la eliminación de tus datos de nuestro registro comercial, puedes contactarnos en cualquier momento a través de nuestro correo: <a href="mailto:argosproduccionyrental@gmail.com" className="text-neon hover:underline">argosproduccionyrental@gmail.com</a>.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="rounded-md bg-neon px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}