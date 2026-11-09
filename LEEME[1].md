# Carta de cumpleaños interactiva — Snoopy & Peanuts

Proyecto web de siete pantallas hecho con HTML5, CSS3 y JavaScript puro. Está inspirado en el video de referencia: papel color crema, marcos rosa coral, títulos manuscritos, ilustraciones de Peanuts y sorpresas que se revelan progresivamente.

## Cómo abrirlo

1. Descarga y descomprime el ZIP.
2. Abre `index.html` en Chrome, Edge, Firefox o Safari.
3. Para publicarlo en internet, sube juntos `index.html`, `styles.css`, `script.js` y la carpeta `media` a tu alojamiento web.

No necesita instalar bibliotecas ni ejecutar un servidor para la navegación básica. Se recomienda tener conexión a internet para cargar las tipografías y las ilustraciones enlazadas.

## Personalizar los textos y las fotos

Abre `script.js` y edita el objeto `CONFIG` que está al principio del archivo. Ahí puedes cambiar:

- El título y subtítulo de la portada.
- La dedicatoria de la canción.
- El video, la canción con letra y la cuenta regresiva.
- Las seis fotografías, sus textos alternativos y descripciones.
- Los mensajes de la pantalla de flores (los textos están también en el HTML para que sea sencillo modificarlos).
- El título, saludo y contenido de la carta final (`letterParagraphs`: un párrafo por renglón de la lista; los dos primeros se escriben letra por letra).

Para usar fotografías personales, puedes crear una carpeta `images` junto a `index.html` y guardar ahí tus archivos. Después cambia las direcciones de `CONFIG.photos`, por ejemplo:

```js
{ src: "images/nuestra-foto-1.jpg", alt: "Nosotros", caption: "Nuestro primer recuerdo" }
```

Las fotografías de muestra son imágenes remotas de Unsplash. No son fotografías personales; cámbialas por las tuyas antes de compartir la página.

## Reproductor de la canción (pantalla 2)

Es un reproductor animado: foto de portada con un latido suave mientras suena, nombre de la canción, minutos (`1:23 / 5:32`), barra de progreso y volumen. Se configura en `CONFIG.songPlayer`:

- `src`: el audio. Puede ser el MP4 (suena su audio) o un MP3. Por defecto `media/experiencia-religiosa.mp3`.
- `cover`: la foto de portada. Ahora usa `media/dayana.jpg` (puedes reemplazar el archivo o cambiar la ruta). Si no hay foto, muestra un recuadro rosa.
- `title` y `artist`: el nombre que aparece.

## Canción del regalo de Woodstock

Guarda el audio como `media/cancion.mp3`. Al tocar a Woodstock solo suena la canción, sin letra (`CONFIG.giftSong`).

## Cuenta regresiva

Se configura en `CONFIG.countdown` (`script.js`), con la hora del dispositivo. Cada día de `stages` tiene `date`, `kind`, `title` y `text`; `unlock` es el momento en que se abre la página original.

- **Día 1 (9 nov):** cartita con explosión de corazones.
- **Día 2 (10 nov):** ramo de flores con una frase linda.
- **Día 3 (11 nov):** "Hoy será un día especial" + poema, con destellos y corazones, y abajo un mensaje interactivo: cada toque revela una línea (arréglate, que no coma, la paso a ver a las 6, te amo). Se edita en `extra.lines`.
- **Día 4 (12 nov):** corazón latiendo con la frase "Te amo porque eres mi novia…" y explosión de corazones.
- **Día 5 (13 nov):** poema con explosión de gerberas.
- **Día 6 (14 nov, 12:00 pm):** se abre la página original (candado).

El contador de días, horas, minutos y segundos está siempre arriba y cuenta hacia `unlock`, con la hora real del dispositivo. Cada día se abre solo en su fecha y no se puede adelantar. Cuando pasa un día, aparecen botones **Día 1, Día 2…** para volver a ver los días anteriores (los futuros no se muestran). Tocar una tarjeta repite la explosión. `enabled: false` quita el contador.

## Interacciones

- Los botones **Anterior** y **Siguiente** cambian de pantalla con transiciones suaves.
- Los puntos de progreso permiten saltar a una pantalla concreta.
- Las flechas izquierda y derecha del teclado también navegan.
- En la pantalla 6, toca el pastel o pulsa **Apagar las velitas** para apagar las llamas, mostrar el humo y revelar el mensaje.
- El diseño se reorganiza en una sola columna en pantallas pequeñas y respeta la preferencia de movimiento reducido del dispositivo.

## Ilustraciones y atribución

Las ilustraciones de Snoopy y los personajes de Peanuts se cargan desde sitios externos enlazados en el HTML. Algunas fuentes indican uso personal solamente o uso no comercial; los personajes de Peanuts pertenecen a sus titulares de derechos. Este ejemplo está preparado para un regalo personal y no debe utilizarse con fines comerciales sin obtener las autorizaciones correspondientes. Si la fuente cambia la dirección del archivo o deja de permitir el enlace externo, sustituye la URL del `src` de la imagen por un archivo que tengas derecho a utilizar.

Fuentes de las ilustraciones enlazadas: PNGimg (licencia publicada CC BY-NC 4.0 para sus recursos) y StickPNG / PNGWing (sus páginas indican uso personal o no comercial para los recursos consultados). Revisa siempre las condiciones vigentes de cada archivo antes de redistribuir la página.

La pantalla de las velitas usa un dibujo de fan art de Snoopy con un pastel de ColoringPark, que la página fuente marca como gratuito para uso personal y escolar; el recurso no es oficial ni está aprobado por Peanuts Worldwide. La animación de las llamas y el humo se superpone con CSS/JavaScript.

## Pantalla de bienvenida

Al abrir la página aparece un candado que hay que tocar varias veces. Al abrirse, un contador cuenta 1, 2, 3… hasta 16, se suma un +1 y llega a 17; entonces estalla el confeti y comienza la página.

Se ajusta en `CONFIG.intro` (en `script.js`): `age` es la edad final, `lockTaps` son los toques para abrir el candado y `enabled: false` la desactiva.

## Optimización para móvil

Incluye vibración suave al tocar el candado (en los dispositivos que la admiten), deslizamiento lateral para cambiar de pantalla, precarga de imágenes durante la bienvenida, áreas táctiles de 44 px, sin zoom automático en iOS y respeto a las zonas seguras (notch) y a la altura dinámica del navegador.

## Si las ilustraciones no cargan

Algunos sitios (como StickPNG) bloquean que otras páginas usen sus imágenes. Cuando una ilustración no carga, la página dibuja automáticamente una propia (Snoopy, Woodstock, regalo, globo, corazón) y ajusta los textos de la pantalla 3. Para usar tus propias imágenes, guárdalas en `images/` y cambia el `src` en `index.html`; la pantalla 5 ya busca `images/snoopy-rosa.png` y usa el dibujo mientras ese archivo no exista.

## Regalos interactivos (pantalla 3)

Cada regalo abre una sorpresa: **Snoopy** un poema, **Woodstock** pone tu canción (`media/cancion.mp3`), el **regalo** una carta dentro de un sobre, el **globo** a Snoopy soltando globos con frases y el **corazón** un corazón que late y explota en fuegos artificiales (también puedes tocar la pantalla para lanzar más). El poema, la carta y las frases de los globos se editan en `CONFIG` (`giftPoem`, `giftLetter`, `balloonPhrases`).
