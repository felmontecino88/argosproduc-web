export const NAV_SECTIONS = [
  { id: "eventos", label: "Eventos & Stage" },
  { id: "produccion", label: "Producción AV & TV" },
  { id: "postproduccion", label: "Postproducción & Audio" },
] as const;

export const SERVICE_OPTIONS = NAV_SECTIONS.map((s) => s.label);

export const WHATSAPP_URL =
  "https://wa.me/XXXXXXXXX?text=Hola,%20quisiera%20cotizar%20un%20servicio%20audiovisual";

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
