const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
tl1.fromTo(".header", { y: "200%" }, { y: "0%", duration: 1.5 });
tl1.fromTo(
  ".navbar",
  { y: "25", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
tl1.fromTo(
  ".brand",
  { y: "25", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "-=1"
);

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const tl2 = gsap.timeline({
      defaults: { ease: "power1.out" },
      delay: 0.5,
    });
    tl2.fromTo(
      ".ani",
      { y: "25", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  },
});
