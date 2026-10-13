"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", label: "Home", icon: faHouse },
  { href: "/about", label: "About", icon: faUser },
  { href: "/projects", label: "Projects", icon: faFolderOpen },
];

// App-style tab bar fixed to the bottom of the screen on phones,
// where it's easy to reach with a thumb. Hidden from md (tablets) up,
// where the side nav takes over.
const MobileNav = () => {
  // The current page's path, e.g. "/about", used to highlight its tab
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-10 flex justify-around bg-ink/95 backdrop-blur border-t border-line">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center gap-1 px-6 py-3 text-xs transition-colors ${
              isActive ? "text-sun" : "text-muted hover:text-skyblue"
            }`}
          >
            <FontAwesomeIcon icon={link.icon} className="text-lg" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
