/* =========================================================
   PERSONALIZACIÓN RÁPIDA
   Cambia los textos, enlaces, fotografías y canción aquí.
   Las imágenes de Peanuts se cargan desde sus sitios de origen.
   ========================================================= */
const CONFIG = {
  // Portada
  coverTitle: "Te amo mi amor!!!",
  coverSubtitle: "Este sitio web es solo para ti",

  // Pantalla de bienvenida: candado, contador y confeti.
  // enabled: false la desactiva · age: edad final · lockTaps: toques para abrir el candado
  intro: { enabled: true, age: 17, lockTaps: 7 },

  // Pantalla "Regalos para ti": Snoopy (poema), regalo (carta), globo (frases).
  // Separa los párrafos y estrofas con una línea en blanco (\n\n).
  giftPoemTitle: "Para ti, mi amor",
  giftPoem: "Hoy el cielo se vistió de fiesta\nporque llegaste al mundo, mi amor,\ny desde entonces mis días tienen\nun poquito más de luz y color.\n\nTu risa es mi canción favorita,\ntu abrazo, mi lugar ideal;\ncontigo hasta lo más sencillo\nse vuelve especial.\n\nQue este nuevo año te abrace\ncon sueños por cumplir,\ny que yo esté a tu lado\npara verte sonreír.\n\nFeliz cumpleaños, mi vida. ♡",
  giftLetter: "Hola Day,\n\nHoy el día ha sido un poco extraño, las nubes parecían seguirme y el sol me hacía querer desear estar muerto, en general fue un día muy detestable.\n\nHasta que llegó la tarde, el atardecer parecía saber tu nombre y el viento cantaba para nosotros, era como si por un momento el día terrible que había tenido cambiara a un día especial, esos días especiales que se quedan impregnados en las memorias y llenan de felicidad al recordarlos.\n\nEn general nuestra tarde juntos fue bella, tú y yo caminando por el zócalo, y sentados en las bancas del zócalo, solo quiero que estos momentos duren más y no se acaben en un cerrar y abrir los ojos, pero no puedo pedir más, ya que cuando mi mano se encuentra con la tuya, se entrelazan tan perfectamente que pienso que nacieron para estar juntas.\n\nAdmito que me sigues poniendo nervioso cuando me miras, con esa mirada que tú solo tienes, es como si tu mirada fuera un tipo de encanto al cual me has embrujado y no pienso querer escapar de este encanto por un largo tiempo.",
  balloonPhrases: ["Te amo", "Eres mi sueño", "Gracias por ti", "Tu sonrisa", "Siempre juntos"],

  // Pantalla 2 · "Te dedico esta canción": reproductor animado con portada, nombre, minutos y volumen.
  // src puede ser el MP4 (suena su audio) o un MP3. La portada es una foto que tú guardas en media/.
  songPlayer: {
    src: "media/experiencia-religiosa.mp3",
    cover: "media/dayana.jpg",
    title: "Experiencia religiosa",
    artist: "Enrique Iglesias"
  },

  // Pantalla 3 · regalo "Una canción" (Woodstock): solo suena el MP3.
  giftSong: { src: "media/cancion.mp3", title: "Una canción para ti" },

  // Cuenta regresiva de 5 días con fechas reales (hora del dispositivo, "AAAA-MM-DDTHH:MM:SS").
  // stages: una sorpresa por día, en orden. Cada día muestra solo la suya.
  //   kind "letter"  → cartita con explosión de corazones
  //   kind "flowers" → ramo de flores con una frase linda
  //   kind "special" → título + poema, con destellos y corazones (admite "extra": mensaje interactivo, un toque por línea)
  //   kind "poem"    → poema con explosión de gerberas
  // unlock: el día 5. El contador cuenta hacia esta fecha y entonces se abre la página original (candado).
  // Los días ya abiertos quedan en los botones "Día 1, Día 2…" para volver a verlos; los futuros no se pueden adelantar.
  // enabled: false quita todo el contador.
  countdown: {
    enabled: true,
    unlock: "2026-11-14T12:00:00",
    stages: [
      { date: "2026-11-09T00:00:00", kind: "letter", title: "Una cartita para empezar",
        text: "Mi corazón:\n\nYa casi es tu cumpleaños y ese día es muy especial, quiero que lo sientas desde antes. Por eso te he preparado una cuenta regresiva con diferentes detalles.\n\nEsto es solo el comienzo. Faltan pocos días para tu cumpleaños y quise empezar a darte detalles desde horita.\n\nTe amo mucho." },
      { date: "2026-11-10T00:00:00", kind: "flowers", title: "Flores para ti",
        text: "Si pudiera, te regalaría un jardín entero, porque contigo todo florece. ♡" },
      { date: "2026-11-11T00:00:00", kind: "special", title: "Hoy será un día especial",
        text: "Hoy amaneció distinto,\nel sol se asomó a sonreír;\nes que el mundo ya lo sabe:\nfalta poquito para ti.\n\nHoy se siente en el aire\nalgo bonito por venir;\ny aunque faltan unos días,\nya te empiezo a celebrar a ti. ♡",
        extra: {
          button: "Toca aquí, mi amor ♡", next: "Sigue ♡",
          lines: [
            "Hoy arréglate, mi amor.",
            "Ponte más guapa de lo normal: súper bella.",
            "Y no comas nada, porque te voy a llevar a cenar.",
            "Paso por ti a las 6:00 pm.",
            "Te amo ♡"
          ]
        } },
      { date: "2026-11-12T00:00:00", kind: "heart", title: "Un corazón para ti",
        text: "Te amo porque eres mi novia y eres súper kawaii y pro.\n\nAdemás de hermosa. ♡" },
      { date: "2026-11-13T00:00:00", kind: "poem", title: "Un poema para ti",
        text: "Como gerberas en primavera\nasí florece mi cariño por ti;\ncada día contigo es una fiesta\ny cada abrazo, mi lugar feliz.\n\nYa casi llega tu gran día,\nel corazón me late sin parar;\npaciencia, mi amor, que mañana\nel mejor regalo va a llegar. ♡" }
    ]
  },
  songDedication: "Quiero dedicarte esta canción porque, de alguna manera, cada nota me recuerda a ti. Gracias por llenar mis días de alegría y por hacer que hasta los momentos más sencillos se vuelvan especiales.",

  // Galería de recuerdos (máximo 6 fotos). Las fotos están en la carpeta media/.
  // Para cambiar una, reemplaza el archivo o cambia su ruta; caption es el texto debajo de la foto.
  photos: [
    { src: "media/day11.jpg", alt: "Un recuerdo juntos", caption: "Mi lugar favorito" },
    { src: "media/dayis2.jpg", alt: "Un momento de cariño", caption: "Tú y yo" },
    { src: "media/day6_1.jpg", alt: "Un abrazo", caption: "Ganamos juntos" },
    { src: "media/day1.jpg", alt: "De la mano", caption: "De la mano, siempre" },
    { src: "media/day7.jpg", alt: "Un recuerdo con corazón", caption: "Mi amor, mi todo" },
    { src: "media/day9.jpg", alt: "Un momento feliz", caption: "Siempre ganamos" }
  ],

  // Mensajes de la pantalla de flores.
  flowerMessages: [
    "Tu sonrisa es de mis lugares favoritos.",
    "Qué bonito es coincidir contigo.",
    "Gracias por hacer especial lo cotidiano.",
    "Admiro la persona tan maravillosa que eres.",
    "Te elegiría una y mil veces.",
    "Deseo que la vida te regale tanta alegría como tú das."
  ],

  // Carta de cumpleaños: modifica el nombre y el contenido a tu gusto.
  finalTitle: "Feliz cumpleaños",
  finalSubtitle: "mi bella novia",
  letterGreeting: "Feliz cumpleaños, mi vida ❤️",
  // Cada elemento es un párrafo. Los dos primeros se escriben letra por letra; los demás aparecen suavemente.
  letterParagraphs: [
    "Hoy es tu cumpleaños, corazón.",
    "Muchos dicen que la primavera empieza en marzo, pero lo raro es que el 14 de noviembre las flores florecieron, los pájaros cantaron y el cielo se pintó de rosa, donde el viento daba paz.",
    "Hoy es un día especial para ti y también para mí, porque hoy, hace unos años, naciste y, con el paso de los años, te convertiste en la niña que hoy en día amo. Eres una persona maravillosa y quiero que sepas que quiero todo lo más increíble para ti, ya que no puedo pedir menos para ti, porque tú eres demasiado y que recibas poco me parece algo injusto.",
    "Ahorita ya es de noche. Esta carta la hago antes de tiempo, pero, por más que pase el tiempo, dudo que cambie lo que siento y pienso. En esta noche, donde la luna parece haberse ido de vacaciones y un frío que sopla soledad, tu recuerdo y la foto tuya en mi pantalla son mi vela, la que me da ese calor que hace que no me quede solo congelado.",
    "Y basta con recordar cada momento contigo para que se me escape una sonrisa y, por un momento, cierre los ojos y me lleve a aquel momento donde tú y yo estábamos felices.",
    "Solo quiero recordarte lo valiosa que eres para mí. Eres como mi dama en mi tablero de ajedrez, como los números en matemáticas. Y si te vuelvo a decir «te amo», parecerá algo normal porque siempre te lo digo, pero quiero que interpretes este «te amo» como un rayito de sol en un día friolento, ya que es lo que me haces sentir tú a mí.",
    "¿Sabes algo? Desde que te conozco, me has hecho ver el mundo de otra manera. Por alguna rara razón, cada vez que veo algo bonito es inevitable pensar en ti: ver tus ojos en los atardeceres naranjas, sentir tus labios al comer algo rico; en cada canción de amor está el recuerdo de tu rostro.",
    "Por último, quiero decirte que te la pases muy bien. Te deseo lo mejor, que tus sueños se cumplan y pueda ver a mi corazón montada en un avión, y que este año te traiga mucha salud, alegría y aventuras. Espero que pueda acompañarte en muchos más cumpleaños."
  ],
  letterClosing: "Te amo muchísimo. Feliz cumpleaños, mi vida.",
  letterSignature: "Con cariño, siempre."
};

const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepCount = document.getElementById("stepCount");
const dots = Array.from(document.querySelectorAll(".progress-dot"));
let currentSlide = 0;
let navigationLocked = false;
let typewriterRun = 0;

const sleep = (ms) => new Promise(resolve => window.setTimeout(resolve, ms));

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && typeof value === "string") element.textContent = value;
}

function applyPersonalization() {
  setText("coverTitle", CONFIG.coverTitle);
  setText("coverSubtitle", CONFIG.coverSubtitle);
  setText("songDedication", CONFIG.songDedication);
  setText("finalTitle", CONFIG.finalTitle);
  setText("finalSubtitle", CONFIG.finalSubtitle);
  setText("letterGreeting", CONFIG.letterGreeting);
  const closing = document.getElementById("letterClosing");
  (CONFIG.letterParagraphs || []).forEach((text, i) => {
    const p = document.createElement("p");
    p.className = "letter-message reveal"; p.dataset.reveal = "";
    if (i < 2) p.setAttribute("data-typewriter", "");
    p.textContent = text;
    closing.before(p);
  });
  setText("letterClosing", CONFIG.letterClosing);
  setText("letterSignature", CONFIG.letterSignature);
  document.querySelectorAll(".love-note p").forEach((paragraph, index) => {
    if (CONFIG.flowerMessages[index]) paragraph.textContent = CONFIG.flowerMessages[index];
  });

  renderPhotoGallery();
}

function renderPhotoGallery() {
  const wall = document.getElementById("photoWall");
  if (!wall) return;
  wall.innerHTML = "";
  CONFIG.photos.slice(0, 6).forEach((photo, index) => {
    const figure = document.createElement("figure");
    figure.className = "polaroid reveal";
    figure.dataset.reveal = index % 2 === 0 ? "left" : "right";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt || `Fotografía de recuerdo ${index + 1}`;
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("error", () => {
      // Si una fotografía externa deja de estar disponible, se muestra una
      // tarjeta ilustrada en tonos pastel en vez de dejar un recuadro vacío.
      image.remove();
      figure.classList.add("photo-fallback");
      const fallback = document.createElement("div");
      fallback.className = "photo-fallback-art";
      fallback.innerHTML = "<span>♡</span><small>Un recuerdo por guardar</small>";
      figure.insertBefore(fallback, figure.querySelector("figcaption"));
    }, { once: true });

    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption || "Un recuerdo bonito";
    figure.append(image, caption);
    wall.appendChild(figure);
  });
}

function updateNavigation() {
  prevBtn.disabled = currentSlide === 0;
  prevBtn.style.visibility = currentSlide === 0 ? "hidden" : "visible";
  nextBtn.innerHTML = currentSlide === slides.length - 1
    ? 'Volver al inicio <span aria-hidden="true">♡</span>'
    : 'Siguiente <span aria-hidden="true">♡</span>';
  stepCount.textContent = `${currentSlide + 1} / ${slides.length}`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-current", index === currentSlide);
    dot.setAttribute("aria-current", index === currentSlide ? "step" : "false");
  });
}

async function revealSlide(slide) {
  typewriterRun += 1;
  const runId = typewriterRun;
  const navigation = document.querySelector(".presentation-nav");
  navigation.classList.remove("is-ready");
  const elements = Array.from(slide.querySelectorAll("[data-reveal]"))
    .map((element, index) => ({
      element,
      index,
      order: element.hasAttribute("data-reveal-order")
        ? Number(element.dataset.revealOrder)
        : index
    }))
    .sort((a, b) => a.order - b.order || a.index - b.index)
    .map(item => item.element);
  elements.forEach(element => element.classList.remove("is-visible"));

  // Los elementos aparecen en el orden del documento; cada pantalla tiene
  // así su propia coreografía y no se adelantan objetos de otras pantallas.
  for (const element of elements) {
    if (runId !== typewriterRun) return;
    await sleep(Number(element.dataset.wait || 260));
    if (element.hasAttribute("data-typewriter")) {
      const fullText = element.dataset.full || (element.dataset.full = element.textContent.trim());
      element.textContent = "";
      element.classList.add("is-visible", "is-typing");
      for (const character of fullText) {
        if (runId !== typewriterRun) return;
        element.textContent += character;
        await sleep(13);
      }
      element.classList.remove("is-typing");
    } else {
      element.classList.add("is-visible");
    }
    if (element.id === "birthdayLetter") element.classList.add("letter-drawn");
  }
  if (runId === typewriterRun) navigation.classList.add("is-ready");
}

async function goToSlide(targetIndex) {
  if (navigationLocked) return;
  if (targetIndex < 0 || targetIndex >= slides.length || targetIndex === currentSlide) return;

  navigationLocked = true;
  document.getElementById("songAudio").pause();
  const outgoing = slides[currentSlide];
  const incoming = slides[targetIndex];
  typewriterRun += 1;
  outgoing.classList.add("is-leaving");
  outgoing.classList.remove("is-active");
  outgoing.setAttribute("aria-hidden", "true");

  await sleep(430);
  outgoing.hidden = true;
  outgoing.classList.remove("is-leaving");

  incoming.hidden = false;
  // Forzar reflujo para que la transición de entrada se dispare siempre.
  void incoming.offsetHeight;
  incoming.classList.add("is-active");
  incoming.setAttribute("aria-hidden", "false");
  currentSlide = targetIndex;
  updateNavigation();

  // Volver al inicio de la nueva pantalla, sin arrastrar el scroll anterior.
  incoming.scrollTop = 0;
  navigationLocked = false;
  revealSlide(incoming);
}

prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) goToSlide(0);
  else goToSlide(currentSlide + 1);
});
dots.forEach(dot => dot.addEventListener("click", () => goToSlide(Number(dot.dataset.go))));

document.addEventListener("keydown", event => {
  if (document.body.matches(".is-intro, .has-modal")) return;
  if (event.key === "ArrowRight" && currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
  if (event.key === "ArrowLeft" && currentSlide > 0) goToSlide(currentSlide - 1);
});

/* Reproductor animado de la pantalla 2: portada que gira, minutos, progreso y volumen */
(function setupSongPlayer() {
  const C = CONFIG.songPlayer || {}, g = id => document.getElementById(id);
  const player = g("songPlayer"), a = g("songAudio"), bar = g("spBar"), time = g("spTime"), vol = g("spVol"), cover = g("spCover");
  g("spTitle").textContent = C.title || "Nuestra canción";
  g("spArtist").textContent = C.artist || "";
  if (C.cover) { cover.addEventListener("error", () => player.classList.add("no-cover")); cover.src = C.cover; } else player.classList.add("no-cover");
  a.src = C.src || "";
  const fmt = s => isFinite(s) ? Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0") : "0:00";
  let seeking = false;
  const paint = () => {
    const d = a.duration || 0;
    time.textContent = `${fmt(a.currentTime)} / ${fmt(d)}`;
    if (!seeking) bar.value = d ? a.currentTime / d * 1000 : 0;
  };
  ["timeupdate", "loadedmetadata", "durationchange"].forEach(ev => a.addEventListener(ev, paint));
  a.addEventListener("play", () => { player.classList.add("is-playing"); g("spPlay").setAttribute("aria-label", "Pausar"); });
  a.addEventListener("pause", () => { player.classList.remove("is-playing"); g("spPlay").setAttribute("aria-label", "Reproducir"); });
  a.addEventListener("error", () => { g("spMsg").textContent = `No encontré el audio. Guárdalo como ${C.src || "media/experiencia-religiosa.mp3"}`; });
  g("spPlay").addEventListener("click", () => { if (a.paused) a.play().catch(() => {}); else a.pause(); });
  bar.addEventListener("input", () => { seeking = true; if (a.duration) a.currentTime = bar.value / 1000 * a.duration; paint(); });
  bar.addEventListener("change", () => { seeking = false; });
  a.volume = vol.value / 100;
  vol.addEventListener("input", () => { a.volume = vol.value / 100; a.muted = a.volume === 0; });
  g("spMute").addEventListener("click", () => { a.muted = !a.muted; });
  a.addEventListener("volumechange", () => player.classList.toggle("is-muted", a.muted || a.volume === 0));
})();

/* Apagar las velitas con el botón o tocando el pastel. */
function blowCandles() {
  const cake = document.getElementById("birthdayCake");
  const wish = document.getElementById("birthdayWish");
  if (cake.classList.contains("is-blown")) return;
  cake.classList.add("is-blown");
  wish.hidden = false;
  document.getElementById("blowCandlesBtn").textContent = "¡Deseo pedido! ♡";
  document.querySelector(".blow-instruction").textContent = "Que se cumpla todo lo que tu corazón desea.";
}
document.getElementById("birthdayCake").addEventListener("click", blowCandles);
document.getElementById("blowCandlesBtn").addEventListener("click", blowCandles);

/* =========================================================
   PANTALLA DE BIENVENIDA: candado → contador → confeti
   ========================================================= */
const INTRO = Object.assign({ enabled: true, age: 17, lockTaps: 7 }, CONFIG.intro);
const $ = id => document.getElementById(id);
const buzz = pattern => { try { navigator.vibrate && navigator.vibrate(pattern); } catch (_) {} };
const LOCK_HINTS = ["Toca el candado para abrirlo", "¡Eso es! Sigue tocando", "Se está aflojando…", "¡Más fuerte!", "Ya casi…", "¡Un poquito más!", "¡Una última vez!"];
const CONFETTI_COLORS = ["#e66d70", "#f5cbd0", "#eea4ad", "#d94b55", "#ffc24c", "#fff3e9", "#a93246", "#9fd3b5", "#c9b6e4"];

const confetti = (() => {
  const canvas = $("confetti"), ctx = canvas.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let parts = [], raf = 0, w = 0, h = 0;
  function resize() {
    const d = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * d; canvas.height = h * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  addEventListener("resize", resize); resize();
  function add(x, y, n, spread, dir, power) {
    n = Math.round(n * (w < 680 ? .6 : 1) * (reduce ? .25 : 1));
    for (let i = 0; i < n; i++) {
      const a = dir + (Math.random() - .5) * spread, s = power * (.45 + Math.random() * .75), k = Math.random();
      parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: Math.random() * 6.28, vr: (Math.random() - .5) * .3,
        s: 6 + Math.random() * 7, c: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        k: k < .2 ? 2 : k < .45 ? 1 : 0, ph: Math.random() * 6.28, t: 0, max: 100 + Math.random() * 60 });
    }
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function loop() {
    ctx.clearRect(0, 0, w, h);
    parts = parts.filter(p => p.t < p.max && p.y < h + 30);
    for (const p of parts) {
      p.vy += .22; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.t++;
      ctx.save();
      ctx.globalAlpha = Math.min(1, (p.max - p.t) / 25);
      ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
      if (p.k === 0) { ctx.scale(1, Math.cos(p.t * .2 + p.ph)); ctx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .66); }
      else if (p.k === 1) { ctx.beginPath(); ctx.arc(0, 0, p.s / 2.4, 0, 6.28); ctx.fill(); }
      else {
        const s = p.s * .7;
        ctx.beginPath(); ctx.moveTo(0, .6 * s);
        ctx.bezierCurveTo(-s, -.1 * s, -.55 * s, -.9 * s, 0, -.3 * s);
        ctx.bezierCurveTo(.55 * s, -.9 * s, s, -.1 * s, 0, .6 * s); ctx.fill();
      }
      ctx.restore();
    }
    raf = parts.length ? requestAnimationFrame(loop) : 0;
  }
  return {
    burst: (x, y) => add(x, y, 130, 6.28, 0, 13),
    cannons: () => { add(0, h, 70, .9, -1.1, 17); add(w, h, 70, .9, -Math.PI + 1.1, 17); }
  };
})();

function popHearts(x, y, n, far, glyph = "♥") {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "heart-pop"; s.textContent = glyph;
    s.style.cssText = `left:${x}px;top:${y}px;--dx:${(Math.random() - .5) * far * 2}px;--dy:${-30 - Math.random() * far}px;font-size:${14 + Math.random() * 14}px;color:${Math.random() < .5 ? "#e75f6a" : "#f09aa4"}`;
    document.body.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  }
}

async function startIntro() {
  const intro = $("intro");
  if (!INTRO.enabled) {
    intro.remove(); $("confetti").remove();
    document.body.classList.remove("is-intro");
    revealSlide(slides[0]);
    return;
  }
  const locked = [document.querySelector(".presentation"), document.querySelector(".presentation-nav")];
  locked.forEach(el => { el.inert = true; });

  // 1) Candado: hay que tocarlo varias veces
  const pad = $("padlock"), hearts = $("lockHearts"), hint = $("lockHint");
  hearts.innerHTML = "<span>♥</span>".repeat(INTRO.lockTaps);
  let taps = 0;
  await new Promise(done => pad.addEventListener("click", e => {
    if (taps >= INTRO.lockTaps) return;
    taps++;
    const r = pad.getBoundingClientRect();
    const x = e.detail ? e.clientX : r.left + r.width / 2, y = e.detail ? e.clientY : r.top + r.height / 2;
    pad.classList.add("is-tapped");
    pad.classList.remove("is-shake"); void pad.offsetWidth; pad.classList.add("is-shake");
    pad.style.setProperty("--lift", taps);
    hearts.children[taps - 1].classList.add("on");
    if (taps < INTRO.lockTaps) {
      popHearts(x, y, 2, 50); buzz(12);
      hint.textContent = LOCK_HINTS[taps === INTRO.lockTaps - 1 ? LOCK_HINTS.length - 1 : Math.min(taps, LOCK_HINTS.length - 2)];
    } else {
      pad.classList.add("is-open");
      hint.textContent = "¡Abierto! ♡";
      popHearts(r.left + r.width / 2, r.top + r.height / 2, 16, 110); buzz([30, 40, 70]);
      setTimeout(done, 1000);
    }
  }));

  // 2) Contador: 1, 2, 3… hasta la edad anterior, luego +1
  $("stageLock").classList.add("is-hidden");
  await sleep(450);
  $("stageCount").classList.remove("is-hidden");
  const num = $("ageNumber"), badge = $("ageBadge"), chip = $("plusOne"), kicker = $("countKicker"), cap = $("ageCaption");
  const setNum = (n, cls) => { num.textContent = n; num.className = "age-number"; void num.offsetWidth; num.classList.add(cls); };
  await sleep(400);
  for (let n = 1; n < INTRO.age; n++) { setNum(n, "is-pop"); await sleep(Math.max(80, 170 - n * 5)); }
  await sleep(350);
  kicker.textContent = "¡y sumamos uno más!";
  chip.classList.add("is-in"); buzz(20);
  await sleep(900);
  const b = badge.getBoundingClientRect(), c = chip.getBoundingClientRect();
  chip.style.setProperty("--mx", `${b.left + b.width / 2 - (c.left + c.width / 2)}px`);
  chip.style.setProperty("--my", `${b.top + b.height / 2 - (c.top + c.height / 2)}px`);
  chip.classList.add("is-merge");
  await sleep(380);

  // 3) Explosión de confeti y entrada a la página
  setNum(INTRO.age, "is-big");
  badge.classList.add("is-done");
  kicker.textContent = "hoy cumples";
  cap.innerHTML = `¡Feliz cumpleaños, mi amor!<span class="visually-hidden"> Ya tienes ${INTRO.age} años.</span>`;
  buzz([60, 40, 60, 40, 140]);
  confetti.burst(b.left + b.width / 2, b.top + b.height / 2);
  await sleep(350); confetti.cannons();
  await sleep(800); confetti.burst(innerWidth / 2, innerHeight * .35);
  await sleep(1800);
  intro.classList.add("is-leaving");
  document.body.classList.remove("is-intro");
  locked.forEach(el => { el.inert = false; });
  await sleep(300);
  revealSlide(slides[0]);
  await sleep(450);
  intro.remove();
}

/* Móvil: precarga las imágenes mientras dura la bienvenida, para que las pantallas aparezcan al instante. */
function preloadImages() {
  const seen = new Set();
  document.querySelectorAll("img[src]").forEach(img => seen.add(img.src));
  seen.forEach(src => { new Image().src = src; });
  CONFIG.photos.forEach(p => { const i = new Image(); i.referrerPolicy = "no-referrer"; i.src = p.src; });
}

/* Móvil: deslizar a los lados cambia de pantalla. */
let swipe = null;
document.addEventListener("touchstart", e => {
  swipe = e.touches.length === 1 && !document.body.matches(".is-intro, .has-modal")
    ? { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now(), el: e.target } : null;
}, { passive: true });
document.addEventListener("touchend", e => {
  if (!swipe) return;
  const s = swipe; swipe = null;
  if (s.el.closest && s.el.closest("input, video, iframe, label")) return;
  const dx = e.changedTouches[0].clientX - s.x, dy = e.changedTouches[0].clientY - s.y;
  if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.6 || Date.now() - s.t > 700) return;
  if (dx < 0 && currentSlide < slides.length - 1 && document.querySelector(".presentation-nav.is-ready")) goToSlide(currentSlide + 1);
  else if (dx > 0 && currentSlide > 0) goToSlide(currentSlide - 1);
}, { passive: true });

/* Respaldo de ilustraciones: si una imagen remota no carga (hotlinking bloqueado) o trae
   fondo cuadriculado, se dibuja una ilustración propia. Para usar tus imágenes, guárdalas
   en la carpeta images/ y cambia el src correspondiente en index.html. */
const ART_LINE = 'stroke="#4a3a3a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
const ART_SNOOPY = `<path d="M72 118C46 148 44 196 78 208H130C158 198 156 148 130 118Z" fill="#fff" ${ART_LINE}/><path d="M60 204C50 204 48 214 62 214H92C98 208 92 202 84 204Z" fill="#fff" ${ART_LINE}/><path d="M116 204H146C158 206 156 214 144 214H118C110 212 110 206 116 204Z" fill="#fff" ${ART_LINE}/><path d="M70 114Q100 134 132 114L134 126Q100 146 68 126Z" fill="#d94b55" ${ART_LINE}/><path d="M56 72C54 38 86 22 114 34C128 40 136 52 138 62L170 68C188 72 188 94 172 98L140 102C128 120 100 124 82 114C64 106 57 92 56 72Z" fill="#fff" ${ART_LINE}/><path d="M62 50C36 50 30 92 48 114C64 120 74 100 72 76C72 64 70 56 62 50Z" fill="#1f1a1c" ${ART_LINE}/><ellipse cx="180" cy="80" rx="10" ry="8.5" fill="#1f1a1c"/><ellipse cx="126" cy="64" rx="3.4" ry="5" fill="#1f1a1c"/><path d="M118 52Q127 46 136 54" fill="none" stroke="#4a3a3a" stroke-width="3" stroke-linecap="round"/><path d="M140 100Q154 108 168 96" fill="none" ${ART_LINE}/>`;
const ART_CAKE = `<g ${ART_LINE}><rect x="62" y="150" width="108" height="46" rx="8" fill="#f6c9d0"/><rect x="72" y="128" width="88" height="26" rx="7" fill="#fff3e9"/><path d="M72 140q8 10 16 0t16 0t16 0t16 0t16 0" fill="#f08a92" stroke="none"/></g><g ${ART_LINE}><rect x="92" y="110" width="7" height="20" fill="#ffd84d"/><rect x="121" y="110" width="7" height="20" fill="#ffd84d"/><rect x="145" y="110" width="7" height="20" fill="#ffd84d"/></g>`;
const ART_HEART = `<path d="M100 190C20 130 30 60 72 60C90 60 100 74 100 84C100 74 110 60 128 60C170 60 180 130 100 190Z" fill="#e04f5c" stroke="#a93246" stroke-width="4" stroke-linejoin="round"/>`;
const ART = {
  snoopy: { label: "Snoopy", body: ART_SNOOPY },
  "snoopy-heart": { label: "Snoopy", body: ART_SNOOPY + `<g transform="translate(58 112) scale(.42)">${ART_HEART}</g>` },
  woodstock: { label: "Woodstock", body: `<path d="M90 80Q84 52 98 46M104 78Q108 50 122 52" fill="none" ${ART_LINE}/><ellipse cx="100" cy="122" rx="48" ry="44" fill="#ffd84d" ${ART_LINE}/><ellipse cx="82" cy="128" rx="22" ry="14" transform="rotate(-20 82 128)" fill="#ffc22e" ${ART_LINE}/><circle cx="120" cy="108" r="6" fill="#fff"/><circle cx="121" cy="108" r="3.5" fill="#2b2124"/><path d="M142 118L174 127L142 136Z" fill="#f59a3d" ${ART_LINE}/><path d="M88 164V192M112 164V192M78 194H98M102 194H122" fill="none" stroke="#f59a3d" stroke-width="4" stroke-linecap="round"/>` },
  gift: { label: "Un regalito", body: `<rect x="40" y="98" width="120" height="94" rx="8" fill="#f08a92" ${ART_LINE}/><rect x="32" y="76" width="136" height="28" rx="6" fill="#e66d70" ${ART_LINE}/><rect x="92" y="76" width="16" height="116" fill="#fff3e9" ${ART_LINE}/><ellipse cx="78" cy="64" rx="22" ry="14" transform="rotate(-20 78 64)" fill="#fff3e9" ${ART_LINE}/><ellipse cx="122" cy="64" rx="22" ry="14" transform="rotate(20 122 64)" fill="#fff3e9" ${ART_LINE}/><circle cx="100" cy="72" r="8" fill="#fff3e9" ${ART_LINE}/>` },
  balloon: { label: "Un globo", body: `<path d="M100 152Q88 182 100 212" fill="none" stroke="#b9958f" stroke-width="3" stroke-linecap="round"/><ellipse cx="100" cy="88" rx="52" ry="62" fill="#f2b5c0" ${ART_LINE}/><path d="M100 150L92 162H108Z" fill="#e98d9d" ${ART_LINE}/><ellipse cx="80" cy="64" rx="10" ry="18" transform="rotate(25 80 64)" fill="#fff" opacity=".55"/>` },
  cake: { label: "Snoopy con pastel", body: ART_SNOOPY + ART_CAKE },
  heart: { label: "Mucho amor", body: ART_HEART + `<ellipse cx="68" cy="88" rx="8" ry="14" transform="rotate(35 68 88)" fill="#fff" opacity=".5"/>` }
};
const ART_MAP = [["5853c4adec0c270fc2f62df9", "snoopy"], ["5853c464ec0c270fc2f62df5", "woodstock"], ["5c8b7899", "gift"], ["5c8b7893", "balloon"], ["5853c4b4", "heart"], ["pngimg.com/uploads/snoopy", "snoopy-heart"], ["snoopy-rosa", "snoopy"]];

function artFallback(img) {
  if (img.closest(".polaroid")) return;
  const key = img.dataset.art || (ART_MAP.find(([k]) => img.src.includes(k)) || [])[1];
  if (!key) return;
  const art = ART[key];
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 220");
  svg.innerHTML = art.body;
  [...img.attributes].forEach(a => { if (!["src", "alt", "onerror", "loading", "referrerpolicy", "style"].includes(a.name)) svg.setAttribute(a.name, a.value); });
  svg.setAttribute("class", `${img.className} art`.trim());
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", img.alt);
  img.replaceWith(svg);
  const caption = svg.closest(".character-card")?.querySelector("figcaption");
  if (caption) caption.textContent = art.label;
  svg.closest(".flower-character")?.classList.add("has-art");
}
document.addEventListener("error", e => { if (e.target.tagName === "IMG") artFallback(e.target); }, true);
const sweepImages = () => document.querySelectorAll("img").forEach(img => { if (img.complete && !img.naturalWidth) artFallback(img); });
sweepImages(); addEventListener("load", sweepImages);

/* =========================================================
   REGALOS INTERACTIVOS (pantalla 3)
   ========================================================= */
ART["snoopy-arm"] = { label: "Snoopy", body: ART_SNOOPY + `<path d="M82 138C62 134 52 116 54 94" fill="none" stroke="#4a3a3a" stroke-width="16" stroke-linecap="round"/><path d="M82 138C62 134 52 116 54 94" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>` };
const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const BALLOON_COLORS = ["#e98591", "#d65c6b", "#ef9aa6", "#e0707d", "#f08a92"];
document.querySelectorAll(".gift-art").forEach(el => { el.innerHTML = `<svg class="art" viewBox="0 0 200 220" aria-hidden="true">${ART[el.dataset.art].body}</svg>`; });

let giftRun = 0, giftCleanup = null, giftOpener = null;
const GIFTS = {};
function setPageLocked(on) {
  document.body.classList.toggle("has-modal", on);
  document.querySelector(".presentation").inert = on;
  document.querySelector(".presentation-nav").inert = on;
}
function openGift(type, opener) {
  closeGift(true);
  giftOpener = opener;
  const run = ++giftRun, modal = $("giftModal");
  $("giftBody").innerHTML = "";
  modal.classList.toggle("is-night", type === "fireworks");
  modal.hidden = false; setPageLocked(true);
  $("giftClose").focus();
  GIFTS[type]($("giftBody"), () => run === giftRun);
}
function closeGift(silent) {
  giftRun++;
  if (giftCleanup) { giftCleanup(); giftCleanup = null; }
  const modal = $("giftModal");
  if (modal.hidden) return;
  modal.hidden = true; $("giftBody").innerHTML = ""; setPageLocked(false);
  if (!silent && giftOpener) giftOpener.focus();
}

/* Snoopy → poema */
GIFTS.poem = body => {
  const stanzas = CONFIG.giftPoem.split("\n\n");
  body.innerHTML = `<article class="gift-sheet"><p class="tiny-kicker">de Snoopy para ti</p><h3 class="hand-title">${esc(CONFIG.giftPoemTitle)}</h3>${stanzas.map((s, i) => `<p class="poem-stanza" style="--i:${i}">${esc(s).replace(/\n/g, "<br>")}</p>`).join("")}</article>`;
};

/* Regalo → carta (el sobre se abre y sale la carta) */
GIFTS.letter = async (body, alive) => {
  const paras = CONFIG.giftLetter.split("\n\n"), last = paras.length - 1;
  body.innerHTML = `<div class="env" id="env"><div class="env-back"></div><div class="env-flap"></div><div class="env-front"></div><span class="env-seal">♥</span></div><article class="gift-sheet letter-sheet" id="ltSheet" hidden><p class="tiny-kicker">una cartita para ti</p>${paras.map((p, i) => `<p class="${i === 0 ? "lt-greet" : i === last && p.length < 60 ? "lt-sign" : "lt-p"}">${esc(p)}</p>`).join("")}</article>`;
  await sleep(700); if (!alive()) return;
  $("env").classList.add("is-open"); buzz(15);
  await sleep(1000); if (!alive()) return;
  $("env").hidden = true; $("ltSheet").hidden = false;
};

/* Globo → Snoopy sosteniendo globos que se van soltando, cada uno con una frase */
GIFTS.balloons = (body, alive) => {
  body.innerHTML = `<div class="bl-stage" id="blStage"><p class="bl-title hand-title">Cada globo lleva un mensaje</p><svg class="bl-snoopy art" viewBox="0 0 200 220" aria-hidden="true">${ART["snoopy-arm"].body}</svg><div class="bl-end" id="blEnd" hidden><p class="hand-title">¡Que tus sueños vuelen alto!</p><button class="pink-button" id="blAgain" type="button">Soltar otra vez</button></div></div>`;
  const stage = $("blStage"); let token = 0;
  function release(w) {
    if (w.classList.contains("is-away")) return;
    w.style.setProperty("--dx", `${(Math.random() - .5) * 140}px`);
    w.classList.add("is-away"); buzz(10);
    w.addEventListener("animationend", ev => { if (ev.animationName === "bl-away") w.remove(); });
  }
  async function launch() {
    const my = ++token; $("blEnd").hidden = true;
    stage.querySelectorAll(".bl").forEach(n => n.remove());
    const list = CONFIG.balloonPhrases, n = list.length;
    const els = list.map((text, i) => {
      const w = document.createElement("div");
      w.className = "bl";
      w.style.setProperty("--ang", `${n > 1 ? -34 + i * 68 / (n - 1) : 0}deg`);
      w.style.setProperty("--len", `${140 + (i % 2) * 70}px`);
      w.innerHTML = `<button class="bl-b" type="button" style="background:${BALLOON_COLORS[i % BALLOON_COLORS.length]}">${esc(text)}</button>`;
      w.querySelector(".bl-b").addEventListener("click", () => release(w));
      stage.appendChild(w);
      return w;
    });
    for (const w of els) { await sleep(1800); if (!alive() || my !== token) return; release(w); }
    await sleep(2600); if (!alive() || my !== token) return;
    $("blEnd").hidden = false;
  }
  $("blAgain").addEventListener("click", launch);
  launch();
};

/* Corazón → late y explota como fuegos artificiales */
GIFTS.fireworks = async (body, alive) => {
  body.innerHTML = `<canvas class="fw-canvas" id="fwCanvas"></canvas><svg class="fw-heart" id="fwHeart" viewBox="0 0 200 200" aria-hidden="true"><path d="M100 185C18 128 24 52 68 52C88 52 100 68 100 80C100 68 112 52 132 52C176 52 182 128 100 185Z" fill="#ff5a78"/><ellipse cx="62" cy="84" rx="9" ry="16" transform="rotate(35 62 84)" fill="#fff" opacity=".45"/></svg><p class="fw-text hand-title" id="fwText" hidden>¡Feliz cumpleaños, mi amor!</p>`;
  const canvas = $("fwCanvas"), ctx = canvas.getContext("2d");
  let w = 0, h = 0, parts = [], raf = 0, on = true;
  const resize = () => {
    const d = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight; canvas.width = w * d; canvas.height = h * d;
    ctx.setTransform(d, 0, 0, d, 0, 0); ctx.fillStyle = "#26101e"; ctx.fillRect(0, 0, w, h);
  };
  resize(); addEventListener("resize", resize);
  const sc = () => Math.max(.55, Math.min(1, Math.min(w, h) / 700));
  const HUES = [345, 350, 330, 40, 25, 0, 300];
  const spark = (x, y, vx, vy, hue, max) => parts.push({ x, y, vx, vy, hue, max, t: 0 });
  function heartBurst(x, y) {
    for (const f of [1, .62]) for (let i = 0; i < 90; i++) {
      const t = i / 90 * 6.2832, k = .2 * sc() * f * (.94 + Math.random() * .12);
      spark(x, y, 16 * Math.sin(t) ** 3 * k, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * k, 335 + Math.random() * 25, 110 + Math.random() * 30);
    }
  }
  function explode(x, y, kind) {
    if (kind === "heart") return heartBurst(x, y);
    const hue = HUES[Math.floor(Math.random() * HUES.length)], n = w < 600 ? 55 : 80;
    for (let i = 0; i < n; i++) {
      const a = i / n * 6.2832 + Math.random() * .1, s = (kind === "ring" ? 3.4 : 1.2 + Math.random() * 3.6) * sc();
      spark(x, y, Math.cos(a) * s, Math.sin(a) * s, hue + Math.random() * 20 - 10, 70 + Math.random() * 40);
    }
  }
  const randomKind = () => { const r = Math.random(); return r < .6 ? "radial" : r < .85 ? "ring" : "heart"; };
  let rockets = [];
  const launch = () => rockets.push({ x: w * (.15 + Math.random() * .7), y: h + 10, ty: h * (.15 + Math.random() * .3), vy: -h / 55, kind: randomKind() });
  function frame() {
    if (!on) return;
    ctx.globalCompositeOperation = "source-over"; ctx.fillStyle = "rgba(38,16,30,.22)"; ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    rockets = rockets.filter(r => {
      r.y += r.vy; spark(r.x, r.y, (Math.random() - .5) * .5, .7, 40, 16);
      if (r.y > r.ty) return true;
      explode(r.x, r.y, r.kind); return false;
    });
    parts = parts.filter(p => p.t < p.max);
    for (const p of parts) {
      p.vy += .035; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.t++;
      const a = 1 - p.t / p.max;
      ctx.fillStyle = `hsla(${p.hue},100%,${55 + a * 20}%,${a})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.2 + 1.6 * a, 0, 6.2832); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  frame();
  canvas.addEventListener("pointerdown", e => { explode(e.clientX, e.clientY, randomKind()); buzz(8); });
  giftCleanup = () => { on = false; cancelAnimationFrame(raf); removeEventListener("resize", resize); };

  await sleep(2700); if (!alive()) return;            // el corazón late 3 veces
  const heart = $("fwHeart"), b = heart.getBoundingClientRect();
  heart.classList.add("is-boom"); buzz([40, 30, 90]);
  heartBurst(b.left + b.width / 2, b.top + b.height / 2);
  explode(b.left + b.width / 2, b.top + b.height / 2, "ring");
  await sleep(700); if (!alive()) return;
  $("fwText").hidden = false;
  while (alive()) { launch(); await sleep(900 + Math.random() * 900); }
};

/* Woodstock → tu canción (MP3), sin letra: solo suena */
GIFTS.music = (body, alive) => {
  const S = CONFIG.giftSong || {};
  body.innerHTML = `<article class="gift-sheet song-sheet" id="giftSheet"><p class="tiny-kicker">de Woodstock para ti</p><h3 class="hand-title">${esc(S.title || "Una canción para ti")}</h3><svg class="song-bird art" viewBox="0 0 200 220" aria-hidden="true">${ART.woodstock.body}</svg><audio id="giftAudio" controls preload="auto"></audio><p class="song-msg" id="giftMsg"></p></article>`;
  const a = $("giftAudio"), sheet = $("giftSheet");
  a.addEventListener("error", () => { $("giftMsg").textContent = `No encontré el audio. Guárdalo como ${S.src || "media/cancion.mp3"}`; });
  a.addEventListener("play", () => sheet.classList.add("is-playing"));
  a.addEventListener("pause", () => sheet.classList.remove("is-playing"));
  a.src = S.src || "";
  giftCleanup = () => { a.pause(); a.removeAttribute("src"); a.load(); };
  if (alive()) a.play().catch(() => {});
};

document.querySelector(".character-row").addEventListener("click", e => {
  const btn = e.target.closest("[data-gift]");
  if (!btn) return;
  openGift(btn.dataset.gift, btn);
});
$("giftClose").addEventListener("click", () => closeGift());
document.addEventListener("keydown", e => { if (e.key === "Escape") closeGift(); });

/* =========================================================
   CUENTA REGRESIVA DE 3 DÍAS · día 1 carta · día 2 poema · día 3 página original
   ========================================================= */
const GATE = Object.assign({ enabled: false, stages: [], unlock: "" }, CONFIG.countdown);
const GERBERA_COLORS = [["#ff7a8a", "#ffd1d6"], ["#ff9a3c", "#ffd9a8"], ["#f45d83", "#ffc2d1"], ["#ffc93c", "#fff0b3"], ["#e8505b", "#ffb3b8"]];
const DAISY_COLORS = [["#ffffff", "#ffc93c"], ["#ffc2d1", "#ffd25a"], ["#fff3f5", "#ffb02e"]];
const pick = a => a[Math.floor(Math.random() * a.length)];
function gerberaSVG(c) {
  let p = "";
  for (let i = 0; i < 18; i++) p += `<ellipse cx="50" cy="22" rx="5.2" ry="19" fill="${c[0]}" transform="rotate(${i * 20} 50 50)"/>`;
  for (let i = 0; i < 18; i++) p += `<ellipse cx="50" cy="29" rx="3.6" ry="13" fill="${c[1]}" opacity=".85" transform="rotate(${i * 20 + 10} 50 50)"/>`;
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${p}<circle cx="50" cy="50" r="10.5" fill="#5a2f2f"/><circle cx="50" cy="50" r="6" fill="#3b1f22"/><circle cx="50" cy="50" r="12.5" fill="none" stroke="#ffd25a" stroke-width="2.5" stroke-dasharray="1.5 3.2"/></svg>`;
}
function daisy(cx, cy, r, petal, center) {
  let p = "";
  for (let i = 0; i < 12; i++) p += `<ellipse cx="${cx}" cy="${cy - r * .55}" rx="${r * .2}" ry="${r * .45}" fill="${petal}" stroke="#eab9bf" stroke-width=".8" transform="rotate(${i * 30} ${cx} ${cy})"/>`;
  return p + `<circle cx="${cx}" cy="${cy}" r="${r * .26}" fill="${center}"/>`;
}
const daisySVG = c => `<svg viewBox="0 0 100 100" aria-hidden="true">${daisy(50, 50, 48, c[0], c[1])}</svg>`;
function bouquetSVG() {
  const xs = [40, 95, 150, 205, 260], ys = [48, 34, 28, 34, 48], rs = [26, 30, 34, 30, 26];
  let s = "";
  xs.forEach((x, i) => { s += `<path d="M${x} ${ys[i] + rs[i] * .6} Q${150 + (x - 150) * .3} 110 150 128" fill="none" stroke="#658c62" stroke-width="3.5" stroke-linecap="round"/>`; });
  xs.forEach((x, i) => { const c = DAISY_COLORS[i % 2 ? 1 : 0]; s += daisy(x, ys[i], rs[i], c[0], c[1]); });
  return `<svg viewBox="0 0 300 130" aria-hidden="true">${s}<path d="M122 108L178 108L150 130Z" fill="#eaa7ad"/></svg>`;
}
const heartMaker = s => { s.textContent = "♥"; s.style.fontSize = 16 + Math.random() * 22 + "px"; s.style.color = Math.random() < .5 ? "#e75f6a" : "#f09aa4"; };
const sparkMaker = s => { s.textContent = pick(["✦", "✧", "♥", "★"]); s.style.fontSize = 16 + Math.random() * 20 + "px"; s.style.color = pick(["#ffc24c", "#f09aa4", "#e75f6a", "#ffd98a"]); };
const flowerMaker = s => { s.style.width = s.style.height = 38 + Math.random() * 42 + "px"; s.innerHTML = gerberaSVG(pick(GERBERA_COLORS)); };
const daisyMaker = s => { s.style.width = s.style.height = 32 + Math.random() * 36 + "px"; s.innerHTML = daisySVG(pick(DAISY_COLORS)); };
function explode(x, y, n, far, make) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"), a = Math.random() * 6.2832, d = far * (.35 + Math.random() * .65);
    s.className = "burst-pop"; make(s);
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(a) * d + "px"); s.style.setProperty("--dy", Math.sin(a) * d + "px");
    s.style.setProperty("--rot", (Math.random() - .5) * 540 + "deg"); s.style.animationDelay = Math.random() * .15 + "s";
    document.body.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  }
}
// icono de la tarjeta y explosión [generador, cantidad en pantalla grande, cantidad en móvil]
const ART_HEART_BIG = '<svg viewBox="0 0 200 200" aria-hidden="true"><path d="M100 185C18 128 24 52 68 52C88 52 100 68 100 80C100 68 112 52 132 52C176 52 182 128 100 185Z" fill="#e04f5c" stroke="#a93246" stroke-width="5" stroke-linejoin="round"/><ellipse cx="62" cy="84" rx="9" ry="16" transform="rotate(35 62 84)" fill="#fff" opacity=".5"/></svg>';
const STAGE_KINDS = {
  letter:  { icon: () => "♥", burst: [heartMaker, 56, 36] },
  flowers: { icon: bouquetSVG, burst: [daisyMaker, 34, 24] },
  special: { icon: () => "✦", burst: [sparkMaker, 60, 40] },
  heart:   { icon: () => ART_HEART_BIG, burst: [heartMaker, 70, 44] },
  poem:    { icon: () => gerberaSVG(GERBERA_COLORS[0]), burst: [flowerMaker, 32, 22] }
};

async function startGate() {
  const S = (GATE.stages || []).map(s => ({ ...s, t: new Date(s.date).getTime() }));
  const U = new Date(GATE.unlock).getTime();
  if (!GATE.enabled || !S.length || S.some(s => isNaN(s.t)) || isNaN(U) || Date.now() >= U) return;
  const gate = $("gate"), intro = $("intro"), cards = $("gateCards"), note = $("gateNote"), tabs = $("gateTabs");
  const out = ["cdDays", "cdHours", "cdMins", "cdSecs"].map($);
  const two = n => String(n).padStart(2, "0");
  const day = t => new Date(t).toLocaleDateString("es", { weekday: "long", day: "numeric", month: "long" });
  const full = t => new Date(t).toLocaleString("es", { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit" });
  const noteFor = ph => ph === 0 ? `Tu primera sorpresa se abre el ${day(S[0].t)} ♡`
    : ph < S.length ? `La siguiente sorpresa llega el ${day(S[ph].t)} ♡` : `Y el ${full(U)} te espera lo mejor ♡`;
  intro.inert = true; gate.hidden = false;

  function addCard(stage, silent) {
    const K = STAGE_KINDS[stage.kind] || STAGE_KINDS.letter;
    const card = document.createElement("article");
    card.className = `gate-card is-${stage.kind}`; card.tabIndex = 0;
    card.innerHTML = `<span class="gate-icon" aria-hidden="true">${K.icon()}</span><p class="tiny-kicker">${esc(stage.title || "")}</p>` +
      String(stage.text || "").split("\n\n").map(p => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");
    const boom = () => {
      const r = card.getBoundingClientRect(), big = innerWidth >= 680, far = Math.min(innerWidth, innerHeight) * .7;
      explode(r.left + r.width / 2, (Math.max(r.top, 0) + Math.min(r.bottom, innerHeight)) / 2, big ? K.burst[1] : K.burst[2], far, K.burst[0]);
      buzz([30, 40, 70]);
    };
    card.addEventListener("click", boom);          // tocar la tarjeta repite la explosión
    if (stage.extra) {                             // mensaje interactivo: cada toque revela una línea
      const X = stage.extra, lines = X.lines || [];
      const ex = document.createElement("div"); ex.className = "gate-extra";
      ex.innerHTML = `<div class="gate-lines"></div><button class="pink-button" type="button">${esc(X.button || "Toca aquí ♡")}</button>`;
      card.appendChild(ex);
      const box = ex.firstChild, btn = ex.lastChild; let i = 0;
      btn.addEventListener("click", e => {
        e.stopPropagation();
        if (i >= lines.length) return;
        const p = document.createElement("p"); p.textContent = lines[i++]; box.appendChild(p);
        const r = btn.getBoundingClientRect(); popHearts(r.left + r.width / 2, r.top, 6, 90); buzz(15);
        if (i < lines.length) btn.textContent = X.next || "Sigue ♡";
        else {
          p.classList.add("is-last"); btn.hidden = true;
          const q = p.getBoundingClientRect(); explode(q.left + q.width / 2, q.top + q.height / 2, innerWidth >= 680 ? 50 : 34, Math.min(innerWidth, innerHeight) * .6, heartMaker); buzz([30, 40, 70]);
        }
        p.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    }
    cards.prepend(card);
    if (!silent) setTimeout(boom, 650);
  }

  // Muestra la sorpresa de un día; los botones solo existen para los días que ya se abrieron
  function showDay(n, withBurst) {
    cards.innerHTML = ""; addCard(S[n - 1], !withBurst);
    tabs.querySelectorAll("button").forEach(b => { const on = Number(b.dataset.day) === n; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on); });
  }
  tabs.addEventListener("click", e => { const b = e.target.closest("[data-day]"); if (b) showDay(Number(b.dataset.day), false); });

  let phase = -1, timer = 0, finish;
  const tick = () => {
    const t = Date.now(), s = Math.max(0, Math.floor((U - t) / 1000));
    [Math.floor(s / 86400), two(Math.floor(s % 86400 / 3600)), two(Math.floor(s % 3600 / 60)), two(s % 60)]
      .forEach((v, i) => { if (out[i].textContent !== String(v)) out[i].textContent = v; });
    const ph = S.filter(x => t >= x.t).length;      // cuántos días ya se abrieron (hora real)
    if (ph !== phase) {
      phase = ph; note.textContent = noteFor(ph);
      tabs.hidden = ph < 2;
      tabs.innerHTML = Array.from({ length: ph }, (_, i) => `<button type="button" data-day="${i + 1}" aria-pressed="false">Día ${i + 1}</button>`).join("");
      if (ph > 0) showDay(ph, true); else cards.innerHTML = "";   // al abrirse un día nuevo se muestra el más reciente
    }
    if (s <= 0) finish();
  };

  await new Promise(resolve => {
    finish = () => { clearInterval(timer); resolve(); };
    timer = setInterval(tick, 250); tick();
  });

  explode(innerWidth / 2, innerHeight / 2, 40, Math.min(innerWidth, innerHeight) * .7, heartMaker);
  gate.classList.add("is-leaving");
  await sleep(800);
  gate.remove(); intro.inert = false;
}

/* Inicia la bienvenida; la portada se revela cuando termina. */
applyPersonalization();
updateNavigation();
preloadImages();
startGate().then(startIntro);
