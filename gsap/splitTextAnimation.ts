import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const animateSplitText = (element: Element) => {
  const split = new SplitText(element, { type: "words" });

  gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7, 
    ease: "back",
    stagger: 0.15
  });

  return () => split.revert();
};
