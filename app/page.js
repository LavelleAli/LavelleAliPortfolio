"use client";
import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading/sectionHeading";
import projects from "../data/projects";
import skills from "../data/skills";
import FadeIn from "@/components/Animations/FadeIn";
import SplitTextAnimation from "@/components/Animations/SplitText";
import HoverChars from "@/components/Animations/HoverChars";
import TextCycle from "@/components/Animations/TextCycle";
import SglWrdAnima from "@/components/Animations/SglWrdAnima";
import ContactModals from "@/components/Modals/ContactModals";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import ProjectCard from "@/components/ProjectCard/projectCard";
import gsap from "gsap";


const LandingPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const featured = projects.filter((project) => project.featured);
  const visibleProjects = featured.slice(0, visibleCount);
  const grid = useRef(null);
  const shownBefore = useRef(visibleCount);

 useLayoutEffect(() => {
  const newCards = Array.from(grid.current.children).slice(shownBefore.current);
  shownBefore.current = visibleCount;
  if (newCards.length === 0) return;

  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(newCards, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.0,
    })
  })
  return () => mm.revert();
 },[visibleCount]);

  

  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <FadeIn>
        <section className="min-h-[60vh] flex flex-col justify-center gap-6">
          <p className="fade font-mono text-skyblue ">Hi, my name is</p>

          <SplitTextAnimation>
            <HoverChars>
              <h1 className="splitText text-[clamp(2.25rem,7vw,6rem)] font-bold leading-tight">
                Lavelle Ali<span className="text-sun">.</span>
              </h1>
            </HoverChars>
          </SplitTextAnimation>

          <SglWrdAnima
            delay={1.7}
            className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <h2 className="fade text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-muted [text-shadow:0_1px_8px_var(--ink)]">
              <span className="grow-word inline-block">Welcome!</span> Thank you
              for visiting my portfolio — a showcase of my projects and
              passions.
            </h2>
            <div className="max-w-2xl border border-sky-300/0  rounded-md p-4 hover:border-sky-300 transition-all duration-500">
              <HoverChars type="words">
                <p className="fade text-left text-muted text-lg [text-shadow:0_1px_8px_var(--ink)]">
                  I build responsive, mobile-first web applications in React and
                  Next.js, written in JavaScript and styled with Tailwind CSS. I
                  connect the frontend to real services: Firebase for
                  authentication, Stripe for subscription payments, and REST
                  APIs for data. Every project is deployed on Vercel.
                </p>
              </HoverChars>
            </div>
          </SglWrdAnima>
          <TextCycle>
            <p className="fade max-w-xl ">
              <span className=" text-sky-400">Code. </span>
              <span>Eat. </span>
              <span>Sleep. </span>
              <span className="text-sun">Repeat.</span>
            </p>
          </TextCycle>
          <div className="fade flex flex-wrap gap-4 mt-2">
            <Link
              href="/projects"
              className="bg-sun text-ink font-semibold px-6 py-3 rounded-lg hover:bg-snow transition-colors"
            >
              View my work
            </Link>

            <button
              onClick={() => setIsContactOpen(true)}
              className="border border-skyblue text-skyblue font-semibold px-6 py-3 rounded-lg hover:bg-skyblue hover:text-ink transition-colors duration-500"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </FadeIn>

      <ScrollReveal className="flex flex-col gap-20 md:gap-28">
        <section className="reveal">
          <SectionHeading eyebrow="Works" title="Featured Projects" center />

          <div ref={grid} className="grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {visibleCount < featured.length && (
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 2)}
              className="border border-skyblue hover:text-sun transition-all duration-500 rounded-md p-2 mt-8 hover:scale-95 block mx-auto"
            >
              Load More
            </button>
          )}

          <Link
            href="/projects"
            className="block w-fit mx-auto mt-8 text-skyblue hover:text-sun transition-colors"
          >
            See all projects →
          </Link>
        </section>

        {/* Skills */}
        <section className="reveal">
          <SectionHeading eyebrow="Toolkit" title="Skills" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.group}
                className="bg-surface border border-line rounded-xl p-6"
              >
                <h3 className="font-mono text-sun mb-3">{skill.group}</h3>
                <ul className="flex flex-col gap-1 text-muted">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal text-center border border-line rounded-2xl p-8 md:p-12 bg-surface">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let&apos;s build something <span className="text-sun">amazing</span>
            .
          </h2>
          <p className="mt-4 text-muted">
            I&apos;m open to new opportunities and collaborations.
          </p>

          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-block mt-8 bg-skyblue text-ink font-semibold px-6 py-3 rounded-lg hover:bg-snow transition-colors duration-500"
          >
            Say Hello
          </button>
        </section>
      </ScrollReveal>

      <ContactModals
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
