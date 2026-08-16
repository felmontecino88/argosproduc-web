export const NAV_SECTIONS = [
  { id: "eventos", label: "Eventos & Stage" },
  { id: "produccion", label: "Producción General" },
  { id: "postproduccion", label: "Postproducción" },
] as const;

export const SERVICE_OPTIONS = NAV_SECTIONS.map((s) => s.label);

export const WHATSAPP_URL =
  "https://wa.me/56996575645?text=Hola,%20quisiera%20cotizar%20un%20servicio%20audiovisual";

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (id === "postproduccion") {
    // Calculamos la posición para que el centro de la sección coincida con el centro de la pantalla
    const elementCenter = rect.top + window.scrollY + rect.height / 2;
    const targetY = elementCenter - viewportHeight / 2;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });
    return;
  }

  // Lógica para las otras dos secciones
  const offset = 50
    rect.height > viewportHeight ? 96 : Math.max(96, (viewportHeight - rect.height) / 2);
  const top = rect.top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}
