import Link from "next/link";
import React from "react";
import FadeIn from "../Fader/FadeIn";


const navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="navBar absolute top-70">
        <div className="rightSideLine absolute top-22 left-30 bg-sky-400 w-1 h-25 border border-sky-400 rounded-2xl"></div>

        <div className="topSideLine absolute top-12 left-10 w-15 h-1 bg-sky-400 border border-sky-400 rounded-2xl"></div>

        <div className="bottomSideLine absolute top-58 left-10 w-15 h-1 bg-sky-400 border border-sky-400 rounded-2xl"></div>

        <FadeIn>
          <div className="fade flex flex-col gap-4 absolute top-20 left-10 text-sm">
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-sun hover:scale-96 duration-300 transition-[scale,color]"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default navbar;
