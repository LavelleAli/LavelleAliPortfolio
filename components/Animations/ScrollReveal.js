"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, className }) => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, container);

    return () =>  ctx.revert();
  }, []);

  return <div ref={container} className={className}>
    {children}
  </div>;
};

export default ScrollReveal;
