import React from "react";
import SectionHeading from "../../components/SectionHeading/sectionHeading";
import ProjectSliderAuto from "@/components/Animations/ProjectSliderAuto";
import FadeIn from "@/components/Animations/FadeIn";

export const metadata = {
  title: "Projects | Lavelle Ali",
};

const projectsPage = () => {
  return (
    <FadeIn>
      <section className="fade">
        <SectionHeading eyebrow="Work" title="Projects">
          A collection of things I&apos;ve built.
        </SectionHeading>

        <ProjectSliderAuto />
      </section>
    </FadeIn>
  );
};

export default projectsPage;
