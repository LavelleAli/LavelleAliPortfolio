import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNav from "../components/MobileNav/mobileNav";
import Footer from "../components/Footer/footer";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lavelle Ali's Portfolio",
  description:
    "Front-end web developer portfolio — projects, skills, and contact.",
};

/*
  Screen sizes (Tailwind breakpoints) used across the site.
  Classes with no prefix apply to every screen; a prefix means
  "from this width and up".

    (no prefix)  phones          0px and up
    sm:          large phones    640px and up
    md:          tablets         768px and up
    lg:          laptops         1024px and up
    2xl:         large desktops  1536px and up
*/
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-snow">
        <aside className="hidden md:block fixed left-0 top-0 h-full w-48">
          <Navbar />
        </aside>
        <MobileNav />

        <div className="flex-1 flex flex-col md:pl-48">
          <main className="flex-1 w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
