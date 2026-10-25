"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HoverChars = ({ children, className, type = "chars" }) => {
  const el = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(el.current, { type });
      const pieces = type === "words" ? split.words : split.chars;
      const lift =
        type === "words" ? { y: -3, scale: 1.08 } : { y: -6, scale: 1.2 };

      pieces.forEach((piece) => {
        piece.addEventListener("mouseenter", () => {
          gsap.to(piece, {
            ...lift,
            color: "#facc15",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        piece.addEventListener("mouseleave", () => {
          gsap.to(piece, {
            y: 0,
            scale: 1,
            color: getComputedStyle(piece.parentElement).color,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => gsap.set(piece, { clearProps: "color" }),
          });
        });
      });
    }, el);

    return () => ctx.revert();
  }, [type]);

  return (
    <>
      <span ref={el} className={className}>
        {children}
      </span>
    </>
  );
};

export default HoverChars;
