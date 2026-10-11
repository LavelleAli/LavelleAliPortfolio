import React from 'react';
import SectionHeading from '../../components/SectionHeading/sectionHeading';
import ProjectCard from '../../components/ProjectCard/projectCard';
import projects from '../../data/projects';
import FadeIn from '@/components/Fader/FadeIn';

export const metadata = {
  title: "Projects | Lavelle Ali",
};

const projectsPage = () => {
  return (
    <FadeIn>
    <section className='fade'>
      <SectionHeading eyebrow='Work' title='Projects'>
        A collection of things I&apos;ve built. Add new ones in data/projects.js.
      </SectionHeading>

      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
    </FadeIn>
  )
}

export default projectsPage;
