import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

export function QuoteDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border-border bg-surface sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Cotizar Proyecto</DialogTitle>
          <DialogDescription>
            Completa el formulario y armamos una propuesta técnica a tu medida.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm compact />
      </DialogContent>
    </Dialog>
  );
}
