import React from "react";
import SectionHeading from "../../components/SectionHeading/sectionHeading";
import Image from "next/image";
import FadeIn from "@/components/Animations/FadeIn";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

export const metadata = {
  title: "About | Lavelle Ali",
};

const aboutPage = () => {
  return (
    <FadeIn>
      <section className="fade">
        <SectionHeading eyebrow="A few things" title="About Me" />

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-4 text-muted leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-skyblue">Frontend Web Developer</span> who
              enjoys turning designs into fast, accessible, and responsive
              websites.
            </p>
            <p>
              I have spent more than eight years fixing things that
              couldn&apos;t stay broken: heavy equipment operation in the U.S.
              Air Force, HVAC systems across Atlanta, and wind turbines in the
              field. Now, I bring that same troubleshooting mindset to frontend
              development. I first got hooked on code in my mid teens, building
              a simple music site on my first laptop. Watching something
              I&apos;d imagined come to life stuck with me through the military
              and the trades, and it eventually pulled me back. Today I build
              with JavaScript, TypeScript, and Tailwind, and I&apos;m expanding
              into Python and PostgreSQL on the way to full-stack. When I hit a
              bug, I map it with a fishbone diagram, a root-cause habit from the
              field, and work backward until I find what broke. Outside of code,
              I produce music, snowboard, box, garden, and fish. Mixing tracks
              sharpens my attention to detail; gardening and fishing keep me
              patient. Every job I&apos;ve had, from military crews to install
              teams, has taught me the same thing: people build the world we
              live in, and people are what make the work worthwhile.
            </p>
          </div>

          {/* Photo placeholder — swap for <Image src="/me.jpg" ... /> from next/image */}
          <div className="flex flex-col gap-6">
            <div className="aspect-square rounded-2xl border-2 border-skyblue bg-surface flex items-center justify-center text-muted font-mono text-sm">
              <Image
                src="/Me.png"
                alt="ME"
                width={410}
                height={300}
                className="rounded-2xl"
              />
            </div>

            <AudioPlayer
              src="/Palace Life.wav"
              title="Palace Life"
              artist="Prod. by Lavelle Ali"
              loop
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default aboutPage;
