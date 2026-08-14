import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Brands } from "@/components/site/Brands";
import { ContactSection } from "@/components/site/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const TITLE = "VérticeAV | Producción Audiovisual, Audio, Video e Iluminación";
const DESCRIPTION =
  "Servicios audiovisuales integrales: sonido, iluminación, pantallas LED, streaming, producción de TV, cine y postproducción de audio para eventos en Chile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Brands />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
