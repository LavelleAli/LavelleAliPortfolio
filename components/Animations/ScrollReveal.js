"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, className }) => {
  const container = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(container);

    // Skip the animation for visitors who have reduced motion turned on
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray(".reveal").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        });
      });
    });

    // Content above can change height after load (slider setup, fonts, images).
    // Re-measure trigger points when the page height changes, otherwise a
    // section's start can end up past the bottom of the page and never reveal.
    let timer;
    const observer = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    });
    observer.observe(document.body);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mm.revert();
    };
  }, []);

  return <div ref={container} className={className}>
    {children}
  </div>;
};

export default ScrollReveal;
