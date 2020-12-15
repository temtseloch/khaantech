const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const first = gsap.fromTo(
  hero,
  { height: "0%" },
  { height: "100%", duration: 1, ease: Power2.easeInOut }
);
const second = gsap.fromTo(
  hero,
  { width: "80%" },
  { width: "100%", duration: 1.2, ease: Power2.easeInOut, delay: 1 }
);
const third = gsap.fromTo(
  slider,
  { x: "-100%" },
  { x: "0%", duration: 1.2, ease: Power2.easeInOut, delay: 1.2 }
);

const fourth = gsap.fromTo(
  logo,
  { opacity: 0, x: 30 },
  { opacity: 0.9, x: 0, duration: 0.5, delay: 2.2 }
);
const fifth = gsap.fromTo(
  hamburger,
  { opacity: 0, x: 30 },
  { opacity: 0.9, x: 0, duration: 0.5, delay: 2.2 }
);

const sixth = gsap.fromTo(
  headline,
  { opacity: 0, x: 30 },
  { opacity: 1, x: 0, duration: 0.5, delay: 2.2 }
);
