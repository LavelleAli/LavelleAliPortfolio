"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";

gsap.registerPlugin(SplitText);

const TextCycle = ({ children, className }) => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(container.current, {
        type: "words",
      });

      gsap.to(split.words, {
        scale: 1.15,
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.8,
        stagger: {
          each: 0.6,
          yoyo: true,
          repeat: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={container} className={className}>
        {children}
      </div>
    </>
  );
};

export default TextCycle;
