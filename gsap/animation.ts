import { gsap } from "gsap";

export const fadeIn = (element: string | Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
};
