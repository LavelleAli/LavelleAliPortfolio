import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNav from "../components/MobileNav/mobileNav";
import Footer from "../components/Footer/footer";
import ToggleTheme from "@/components/ThemeToggle/ToggleTheme";
import MouseAnimation from "@/components/Animations/MouseAnimation";
import Space3d from "@/components/threejs/Space3d";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.getItem("theme") === "light") document.documentElement.dataset.theme = "light";`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-snow">
        <aside className="hidden md:block fixed left-0 top-0 h-full w-48">
          <Navbar />
        </aside>
        <MobileNav />
        <ToggleTheme />
        <MouseAnimation />
        <Space3d  />

        <div className="flex-1 flex flex-col pb-20 md:pb-0 md:pl-48">
          <main className="flex-1 w-full max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
