"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SglWrdAnima = ({ children, className, delay = 0 }) => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(".grow-word", {
        y: -10,
        scale: 1.1,
        repeat: 1,
        yoyo: true,
        color: "#facc15",
        delay: delay
      });
    }, container);
    return () => ctx.revert()
  }, []);

  return <div ref={container} className={className}> {children} </div>;
};

export default SglWrdAnima;
