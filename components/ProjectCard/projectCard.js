import React from "react";
import Image from "next/image";

const tagColors = [
  "text-coral border-coral/40",
  "text-mint border-mint/40",
  "text-violet border-violet/40",
];

const projectCard = ({ project }) => {
  return (
    
    <article className="group flex flex-col bg-surface border border-line rounded-xl p-6 transition-colors hover:border-skyblue duration-900 w-full max-w-150 min-h-80 h-full text-center">
      {project.image && (
              <Image 
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg border border-line aspect-2/1 object-cover object-top mb-4"

              
              />
            )}
      <h3 className="text-xl font-semibold group-hover:text-skyblue transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-muted flex-1">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <li
            key={tag}
            className={`font-mono text-xs border rounded-full px-3 py-1 ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="text-sun hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site →
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="text-skyblue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code →
          </a>
        )}
      </div>
    </article>
  );
};

export default projectCard;
