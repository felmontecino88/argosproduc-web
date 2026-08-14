import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Menu, X, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_SECTIONS, scrollToSection } from "./nav-config";

function NavButton({ id, label }: { id: string; label: string }) {
  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className="group relative rounded-md px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:text-neon"
    >
      <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:glow-ring" />
      <span className="relative">{label}</span>
      <span className="pointer-events-none absolute bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-neon transition-all duration-300 group-hover:w-4/5" />
    </motion.button>
  );
}

export function SiteHeader({ onQuote }: { onQuote?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b border-border" : "bg-transparent",
      )}
    >
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex min-w-0 items-center gap-2 text-left"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary">
            <Radio className="size-4 text-primary-foreground" />
          </span>
          <span className="truncate font-display text-sm font-extrabold uppercase tracking-[0.22em]">
            Vértice<span className="text-neon">AV</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_SECTIONS.map((section) => (
            <NavButton key={section.id} {...section} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-neon hover:text-neon"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-neon hover:text-neon"
          >
            <Linkedin className="size-4" />
          </a>
          <Button variant="outline" size="sm" onClick={() => scrollToSection("contacto")}>
            Contacto
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-panel border-t border-border lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setOpen(false);
                  scrollToSection(section.id);
                }}
                className="rounded-md px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground active:text-neon"
              >
                {section.label}
              </button>
            ))}
            <Button
              className="mt-2"
              onClick={() => {
                setOpen(false);
                onQuote ? onQuote() : scrollToSection("contacto");
              }}
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
