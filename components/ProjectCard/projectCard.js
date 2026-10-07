import React from 'react'

// Accent colors for tags — rotate through them so tags don't all look the same
const tagColors = ['text-coral border-coral/40', 'text-mint border-mint/40', 'text-violet border-violet/40']

const projectCard = ({ project }) => {
  return (
    <article className='group flex flex-col bg-surface border border-line rounded-xl p-6 transition-colors hover:border-skyblue'>
      <h3 className='text-xl font-semibold group-hover:text-skyblue transition-colors'>{project.title}</h3>
      <p className='mt-2 text-muted flex-1'>{project.description}</p>

      <ul className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag, i) => (
          <li key={tag} className={`font-mono text-xs border rounded-full px-3 py-1 ${tagColors[i % tagColors.length]}`}>
            {tag}
          </li>
        ))}
      </ul>

      <div className='mt-6 flex gap-4 text-sm font-medium'>
        {project.liveUrl && <a href={project.liveUrl} className='text-sun hover:underline' target='_blank' rel='noopener noreferrer'>Live site →</a>}
        {project.repoUrl && <a href={project.repoUrl} className='text-skyblue hover:underline' target='_blank' rel='noopener noreferrer'>Code →</a>}
      </div>
    </article>
  )
}

export default projectCard
