# Visionary Stage

Actua como un Diseñador Web Senior y Desarrollador Frontend experto en React, Tailwind CSS y Framer Motion. Quiero que crees una Landing Page ultra moderna, inmersiva y de alto impacto para una empresa de servicios audiovisuales integrales (Audio, Video, Iluminación, Cine, TV, Stage y Eventos). 



Toma como referencia la potencia visual de Panam Sports (estilo broadcast/deportivo/eventos en vivo, video hero full screen) y la sofisticación corporativa de Elefan.cl (diseño limpio, tarjetas interactivas, enfoque comercial claro).

https://www.panamsports.org/

https://elefan.cl/



---



### 1. HERO SECTION (100vh - PANTALLA COMPLETA)

- Fondo: Video HTML5 nativo en pantalla completa (`width: 100%`, `height: 100vh`, `object-fit: cover`), configurado con `autoplay`, `muted`, `loop`, `playsinline`.

- Ruta del video: Usa un tag `<video src="/assets/hero-video.mp4" poster="/assets/hero-poster.jpg">` con un marcador de posición claro para reemplazar fácilmente la URL.

- Overlay: Agrega una capa semitransparente oscura (degradado negro al 60% de opacidad) sobre el video para garantizar la máxima legibilidad del texto.

- Contenido en el Hero:

  - Titular Principal (H1): Grande, tipografía Sans-serif audaz y moderna (ej. Inter o Montserrat Bold). Texto: "TECNOLOGÍA & PRODUCCIÓN AUDIOVISUAL SIN LÍMITES".

  - Subtítulo: "Soluciones integrales en Sonido, Video, Iluminación, Streaming y Producción de Eventos."

  - Botón CTA Principal: "Cotizar Proyecto" (Abre un Modal de contacto rápido).



---



### 2. BARRA DE NAVEGACIÓN (STICKY / FIXED HEADER)

- Comportamiento: Inicialmente transparente sobre el Hero Video. Al hacer scroll hacia abajo, cambia a un fondo oscuro tipo Glassmorphism (`backdrop-blur-md bg-black/80 border-b border-white/10`).

- Elementos del Header:

  - Izquierda: Logo de la empresa (Placeholder o texto elegante).

  - Centro: Botones principales de servicios:

    1. [ EVENTOS & STAGE ]

    2. [ PRODUCCIÓN AV & TV ]

    3. [ POSTPRODUCCIÓN & AUDIO ]

  - Derecha: Botón de CTA secundario "Contacto" e Íconos de redes sociales (Instagram, LinkedIn) usando Lucide Icons.



- EFECTOS INTERACTIVOS EN BOTONES DEL HEADER (Framer Motion / Tailwind):

  - Hover: Al pasar el puntero por encima, el botón debe tener una animación sutil de escala (`scale-105`), un brillo/glow sutil en los bordes con color neón/azul, y un indicador de línea que se expande desde el centro hacia afuera en la parte inferior.

  - Click / Active: Al hacer click, efecto de pulsación/presión (`scale-95`), seguido de un cambio de color brillante temporal y un scroll suave (smooth scroll) hacia la sección correspondiente.



---



### 3. SECCIONES DE CONTENIDO (AL HACER SCROLL)



#### Secciones de Servicios (Ancladas a la navegación):

Agrupa la oferta masiva en estas 3 categorías principales usando Layouts de Grids elegantes:

1. Eventos & Stage:

   - Servicios: Amplificación, Iluminación, Pantallas LED, Streaming en vivo, Escenarios, Estructuras.

2. Producción AV & TV:

   - Servicios: Video Corporativo, Institucional, Cine, Producción de TV, Registro Multicámara, Ejecución de proyectos.

3. Postproducción & Audio:

   - Servicios: Producción General de Sonido, Postproducción AV, Edición de Audio, Foley, Mezcla & Mastering.



#### Sección de Portafolio / Showreel Grid:

- Tarjetas interactivas con efecto de zoom en la imagen al hacer hover, mostrando proyectos realizados, categorías y un reproductor modal de muestra.



#### Sección de Confianza & Marcas:

- Carousel o Grid con logos de clientes y marcas de equipamiento técnico utilizado (Shure, L-Acoustics, Blackmagic, etc.).



---



### 4. FORMULARIO DE CONTACTO (SIMPLE & EFICIENTE)

- Diseña una sección al final de la página con un formulario ultra limpio y directo:

  - Campos: Nombre completo, Email, Teléfono, Tipo de Servicio (Dropdown con las 3 categorías) y Mensaje.

  - Botón: "Enviar Cotización" con estado de envío interactivo.

- Integra también este mismo formulario en un componente `Dialog / Modal` reutilizable que se abra al hacer click en el botón "Cotizar Proyecto" del Hero.



---



### 5. BOTÓN FLOTANTE DE WHATSAPP

- Posición: Fijo en la esquina inferior derecha (`fixed bottom-6 right-6 z-50`).

- Estilo: Icono oficial de WhatsApp verde redondo con sombra proyectada (`shadow-lg hover:shadow-green-500/50`).

- Animación: Ligero pulso/animación de atención (ping o respiración sutil) cada ciertos segundos.

- Enlace: Conexión directa a `https://wa.me/XXXXXXXXX?text=Hola,%20quisiera%20cotizar%20un%20servicio%20audiovisual`.



---



### 6. FOOTER Y ESTILO GENERAL

- Paleta de Colores: Mantenlo con un tema oscuro "Dark Mode Premium" (Fondo principal `#0A0A0B`, acentos en azul eléctrico `#0066FF` o cian neón, y texto blanco/gris claro).

- Footer: Íconos de redes sociales (Instagram, LinkedIn, Facebook), copyright, políticas de privacidad y accesos rápidos.

- Asegúrate de que el sitio sea 100% Responsive (Mobile First), totalmente adaptable a Smartphones, Tablets y Desktop.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/511a449a-3cc2-4916-98d5-1363a12657e0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
