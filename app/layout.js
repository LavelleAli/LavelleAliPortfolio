import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNav from "../components/MobileNav/mobileNav";
import Footer from "../components/Footer/footer";

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
  description: "Front-end web developer portfolio — projects, skills, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-snow">
        {/* Side nav on desktop, top bar on mobile */}
        <aside className="hidden md:block fixed left-0 top-0 h-full w-48">
          <Navbar />
        </aside>
        <MobileNav />

        <div className="flex-1 flex flex-col md:pl-48">
          <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
