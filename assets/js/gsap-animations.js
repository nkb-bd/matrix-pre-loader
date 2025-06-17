// assets/js/gsap-animations.js

function presetFadeInZoom(iconElement, textElement, iconColor, textColor, customText) {
    if (!iconElement || !textElement) return;

    // Set text and colors
    textElement.innerHTML = customText;
    gsap.set(iconElement, { color: iconColor }); // Assuming icon is text/font based or SVG fill can be set via color
    gsap.set(textElement, { color: textColor });

    // Animation timeline
    var tl = gsap.timeline();
    tl.fromTo(iconElement,
              { autoAlpha: 0, scale: 0.5 },
              { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power1.out" })
      .fromTo(textElement,
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.6, ease: "power1.out" },
              "-=0.4"); // Start slightly before icon finishes
}

function presetSlideInFromSides(iconElement, textElement, iconColor, textColor, customText) {
    if (!iconElement || !textElement) return;

    textElement.innerHTML = customText;
    gsap.set(iconElement, { color: iconColor });
    gsap.set(textElement, { color: textColor });

    var tl = gsap.timeline();
    tl.from(iconElement, { duration: 0.8, x: "-100%", autoAlpha: 0, ease: "power2.out" })
      .from(textElement, { duration: 0.8, x: "100%", autoAlpha: 0, ease: "power2.out" }, "-=0.5");
}

function presetSpinner(iconElement, textElement, iconColor, textColor, customText) {
    if (!iconElement || !textElement) return;

    textElement.innerHTML = customText;
    // For SVGs, 'fill' is often used instead of 'color'. If the icon is a font icon, 'color' is fine.
    // This might need adjustment based on the actual icon type.
    gsap.set(iconElement, { color: iconColor }); // or fill: iconColor for SVGs
    gsap.set(textElement, { color: textColor });

    var tl = gsap.timeline();
    tl.to(iconElement, { duration: 1, rotation: 360, repeat: -1, ease: "none" }) // Continuous spin
      .from(textElement, { duration: 0.5, autoAlpha: 0, y: 10, ease: "power1.out" }, 0); // Fade in text at the start
}
