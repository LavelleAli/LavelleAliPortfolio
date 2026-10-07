"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HoverChars = ({ children, className }) => {
  const el = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(el.current, {
        type: "chars",
      });

      split.chars.forEach((char) => {
        const startColor = getComputedStyle(char).color;

        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            y: -6,
            scale: 1.2,
            color: "#facc15",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            y: 0,
            scale: 1,
            color: startColor,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <span ref={el} className={className}>
        {children}
      </span>
    </>
  );
};

export default HoverChars;
