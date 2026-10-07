"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

const SplitTextAnimation = ({ children, className }) => {

    const container = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        const targets = container.current.querySelectorAll(".splitText");

        const split = SplitText.create(targets, {
          type: "lines, words, chars",
          wordsClass: "word",
          charsClass: "char",
          linesClass: "line",
          propIndex: true,
        });

        gsap.from(
          split.chars,
          {
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          });

    }, container);

        return () => ctx.revert();
     
    },[]);
  

  return (
    <>
       <div ref={container} className={className}>
         {children}
       </div>
    </>
  );
};

export default SplitTextAnimation;
