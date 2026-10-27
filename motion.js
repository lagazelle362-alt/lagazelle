// Scroll animation for the homepage (GSAP + ScrollTrigger + Lenis).
// The page is complete without this file: html.motion is only kept when the
// libraries load and the visitor has not asked for reduced motion.
(function () {
  const root = document.documentElement;
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) {
    root.classList.remove("motion");
    return;
  }
  window.lgMotionReady = true;
  root.classList.add("motion");
  gsap.registerPlugin(ScrollTrigger);

  let lenis = null;
  if (window.Lenis) {
    try {
      lenis = new Lenis({ lerp: 0.09 });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      lenis = null;
    }
  }

  // In-page links scroll smoothly with Lenis (the skip link keeps its native focus jump).
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!lenis || !link || link.classList.contains("skip-link")) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target);
  });

  // Wrap each word of the statement in a span for the reading effect.
  function splitWords(element) {
    const words = element.textContent.trim().split(/\s+/);
    element.textContent = "";
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "w";
      span.textContent = word;
      element.append(span);
      if (i < words.length - 1) element.append(" ");
    });
    return element.querySelectorAll(".w");
  }

  let ctx = null;
  let firstBuild = true;

  function build() {
    if (ctx) ctx.revert();
    // Mirror sideways movement in Arabic so the biscuits fly out towards their own side.
    const side = root.dir === "rtl" ? -1 : 1;

    ctx = gsap.context(() => {
      if (firstBuild) {
        // Page load: the bag rises, the names settle, the gold outline draws itself.
        gsap.from("#bag", { y: 40, opacity: 0, duration: 1.1, ease: "power3.out" });
        gsap.from(".scene-name .ar-name", { y: 24, opacity: 0, duration: 1, delay: 0.15, ease: "power3.out" });
        gsap.from(".scene-name .lat-name", { y: 16, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
        const foil = document.getElementById("foil");
        const length = foil.getTotalLength();
        gsap.fromTo(foil, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut", delay: 0.2 });
      }

      // Pinned hero: biscuits fly out from behind the bag, the glass rises, the name slides away.
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: ".hero-band", start: "top top", end: "+=220%", scrub: 0.8, pin: true, anticipatePin: 1 }
      })
        .to("#hint", { opacity: 0, duration: 0.1 }, 0)
        .fromTo("#b1", { xPercent: 120 * side, yPercent: -120, rotation: -30 * side, scale: 0.7 }, { xPercent: -30 * side, yPercent: -10, rotation: 12 * side, scale: 1, duration: 1 }, 0)
        .fromTo("#b2", { yPercent: -150, rotation: 20 * side, scale: 0.7 }, { yPercent: 10, rotation: -8 * side, scale: 1.05, duration: 1 }, 0.05)
        .fromTo("#b3", { xPercent: -130 * side, yPercent: -120, rotation: 40 * side, scale: 0.7 }, { xPercent: 25 * side, yPercent: -20, rotation: -14 * side, scale: 1, duration: 1 }, 0.1)
        .fromTo("#glass", { yPercent: 60, opacity: 0 }, { yPercent: -6, opacity: 1, duration: 0.9 }, 0.25)
        .to("#bag", { scale: 0.92, rotation: -3 * side, yPercent: -4, duration: 1 }, 0)
        .to(".foil", { rotation: 45, scale: 1.08, transformOrigin: "50% 50%", duration: 1.3 }, 0)
        .to("#sceneName", { yPercent: -40, opacity: 0, duration: 0.5 }, 0.15)
        .to("#stage", { top: "40%", duration: 1 }, 0.4)
        .to("#sceneCta", { opacity: 1, duration: 0.4 }, 0.9)
        .from("#sceneCta .scene-title", { y: 30, duration: 0.4 }, 0.9)
        .to({}, { duration: 0.4 });

      // Statement lights up word by word as it scrolls past.
      const words = splitWords(document.querySelector(".say"));
      ScrollTrigger.create({
        trigger: ".say", start: "top 80%", end: "bottom 45%", scrub: true,
        onUpdate: (self) => {
          const lit = Math.round(self.progress * words.length);
          words.forEach((word, i) => word.classList.toggle("on", i < lit));
        }
      });

      // Biscuits turn beside the three chapters.
      gsap.utils.toArray(".spin").forEach((biscuit, i) => {
        gsap.fromTo(biscuit, { rotation: (i % 2 ? 60 : -60) * side, y: 60 }, {
          rotation: 0, y: -20, ease: "none",
          scrollTrigger: { trigger: biscuit, start: "top bottom", end: "bottom 30%", scrub: true }
        });
      });
    });

    firstBuild = false;
    ScrollTrigger.refresh();
  }

  window.lgMotion = { rebuild: build };
  build();
})();
