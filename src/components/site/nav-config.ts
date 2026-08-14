export const NAV_SECTIONS = [
  { id: "eventos", label: "Eventos & Stage" },
  { id: "produccion", label: "Producción AV & TV" },
  { id: "postproduccion", label: "Postproducción & Audio" },
] as const;

export const SERVICE_OPTIONS = NAV_SECTIONS.map((s) => s.label);

export const WHATSAPP_URL =
  "https://wa.me/XXXXXXXXX?text=Hola,%20quisiera%20cotizar%20un%20servicio%20audiovisual";

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const viewport = window.innerHeight;
  // Centra la sección; si es más alta que la pantalla, deja un margen superior cómodo.
  const offset =
    rect.height > viewport ? 96 : Math.max(96, (viewport - rect.height) / 2);
  const top = rect.top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}
