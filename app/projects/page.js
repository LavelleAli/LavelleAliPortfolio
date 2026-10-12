import React from "react";
import SectionHeading from "../../components/SectionHeading/sectionHeading";
import ProjectSlider from "@/components/Animations/ProjectSlider";
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

        <ProjectSlider />
      </section>
    </FadeIn>
  );
};

export default projectsPage;
