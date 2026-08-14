import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SERVICE_OPTIONS } from "./nav-config";

type Status = "idle" | "sending" | "sent";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1200);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-8 text-center">
        <CheckCircle2 className="size-10 text-neon" />
        <h3 className="text-xl">Cotización enviada</h3>
        <p className="text-sm text-muted-foreground">
          Nuestro equipo te contactará dentro de las próximas 24 horas hábiles.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="qf-name">Nombre completo</Label>
          <Input id="qf-name" name="name" required placeholder="Tu nombre" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="qf-email">Email</Label>
          <Input id="qf-email" name="email" type="email" required placeholder="tu@empresa.cl" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="qf-phone">Teléfono</Label>
          <Input id="qf-phone" name="phone" type="tel" required placeholder="+56 9 1234 5678" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="qf-service">Tipo de servicio</Label>
          <select
            id="qf-service"
            name="service"
            required
            defaultValue=""
            className="h-9 w-full rounded-md border border-input bg-surface-2 px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="qf-message">Mensaje</Label>
        <Textarea
          id="qf-message"
          name="message"
          rows={compact ? 3 : 5}
          required
          placeholder="Cuéntanos fecha, lugar y requerimientos técnicos del proyecto."
        />
      </div>
      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full">
        {status === "sending" ? (
          <>
            <Loader2 className="animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send /> Enviar Cotización
          </>
        )}
      </Button>
    </form>
  );
}
