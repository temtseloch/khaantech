const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.3 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".headline", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
