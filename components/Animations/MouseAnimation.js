"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseAnimation = ({ children }) => {
  const chaser = useRef(null);

  useEffect(() => {
    gsap.set(chaser.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(chaser.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yTo = gsap.quickTo(chaser.current, "y", {
      duration: 0.5,
      ease: "power3",
    });
    let visible = false;

    function followMouse(e) {
      if (!visible) {
        xTo(e.clientX, e.clientX);
        yTo(e.clientY, e.clientY);
        visible = true;
        gsap.to(chaser.current, {
          opacity: 1,
          duration: 0.3,
          overwrite: "auto",
        });
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    }

    document.documentElement.addEventListener("mouseleave", () => {
      visible = false;
      gsap.to(chaser.current, { opacity: 0, duration: 0.3, overwrite: "auto" });
    });
    window.addEventListener("pointermove", followMouse);
    return () => window.removeEventListener("pointermove", followMouse);
  }, []);

  return (
    <>
      <div
        ref={chaser}
        className="fixed top-0 left-0 opacity-0 border rounded-full shadow-[0_0_40px] shadow-yellow-300 bg-transparent w-8 h-8 pointer-events-none z-10 "
      >
        {children}
      </div>
    </>
  );
};

export default MouseAnimation;
