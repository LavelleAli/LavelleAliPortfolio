"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseAnimation = ({ children }) => {
  const chaser = useRef(null);
  
  useEffect(() => {
    const html = document.documentElement;

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
      if (e.pointerType === "touch") return;
      moveTo(e.clientX, e.clientY);
    }
    function followTouch(e) {
      const touch = e.touches[0];
      if ( touch ) moveTo(touch.clientX, touch.clientY)
    }

    function moveTo(x, y) {
      if (!visible) {
        xTo(x, x);
        yTo(y, y);
        visible = true;
        gsap.to(chaser.current, {
          opacity: 1,
          duration: 0.3,
          overwrite: "auto",
        });
      } else {
        xTo(x);
        yTo(y);
      }
    }

    function hideChaser() {
      visible = false;
      gsap.to(chaser.current, {
        opacity: 0,
        duration: 0.3,
        overwrite: "auto",
      });
    }

    
    window.addEventListener("pointermove", followMouse);
    html.addEventListener("mouseleave", hideChaser);

    window.addEventListener("touchstart", followTouch, { passive: true });
    window.addEventListener("touchmove", followTouch, { passive: true });
    window.addEventListener("touchend", hideChaser);
    window.addEventListener("touchcancel", hideChaser);

    return () => {
      window.removeEventListener("pointermove", followMouse);
      html.removeEventListener("mouseleave", hideChaser);
      window.removeEventListener("touchstart", followTouch);
      window.removeEventListener("touchmove", followTouch);
      window.removeEventListener("touchend", hideChaser);
      window.removeEventListener("touchcancel", hideChaser);
    };
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
