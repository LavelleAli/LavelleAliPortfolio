"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading/sectionHeading";
import ProjectCard from "../components/ProjectCard/projectCard";
import projects from "../data/projects";
import skills from "../data/skills";
import FadeIn from "@/components/Fader/FadeIn";
import SplitTextAnimation from "@/components/Animations/SplitText";
import HoverChars from "@/components/Animations/HoverChars";


const landingPage = () => {

  const featured = projects.filter((project) => project.featured);

  return (
    <div className="flex flex-col gap-28">
      {/* Hero */}
      <FadeIn>
        <section className="min-h-[60vh] flex flex-col justify-center gap-6">
          <p className="fade font-mono text-skyblue ">Hi, my name is</p>

          <SplitTextAnimation>
          <HoverChars>

          

          <h1 className="splitText text-5xl md:text-7xl font-bold leading-tight">
            Lavelle Ali<span className="text-sun">.</span>
          </h1>
          </HoverChars>
          </SplitTextAnimation>

          
          <h2 className="fade text-2xl md:text-4xl font-semibold text-muted">
            Welcome! Thank you for visiting my portfolio — a showcase of my work
            and projects.
          </h2>
          <p className="max-w-xl ">
            <span className="fade text-sky-400">Code. </span>
            <span className="fade">Eat. </span> 
            <span className="fade">Sleep. </span> 
            <span className="fade text-sun">Repeat.</span>
          </p>
          <div className="fade flex flex-wrap gap-4 mt-2">
            <Link
              href="/projects"
              className="bg-sun text-ink font-semibold px-6 py-3 rounded-lg hover:bg-snow transition-colors"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="border border-skyblue text-skyblue font-semibold px-6 py-3 rounded-lg hover:bg-skyblue hover:text-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Featured projects */}
      <section>
        <SectionHeading eyebrow="Works" title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block mt-8 text-skyblue hover:text-sun transition-colors"
        >
          See all projects →
        </Link>
      </section>

      {/* Skills */}
      <section>
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-3">
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

      {/* Call to action */}
      <section className="text-center border border-line rounded-2xl p-12 bg-surface">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let&apos;s build something <span className="text-sun">together</span>.
        </h2>
        <p className="mt-4 text-muted">
          I&apos;m open to new opportunities and collaborations.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-skyblue text-ink font-semibold px-6 py-3 rounded-lg hover:bg-snow transition-colors"
        >
          Say hello
        </Link>
      </section>
    </div>
  );
};

export default landingPage;
