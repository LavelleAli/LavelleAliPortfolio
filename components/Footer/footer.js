import React from 'react'

const footer = () => {
  return (
    <footer className='border-t border-line px-6 py-8 text-sm text-muted'>
      <div className='max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4'>
        <p>© {new Date().getFullYear()} Lavelle Ali</p>
        <div className='flex gap-6'>
          {/* TODO: replace with your real profile links */}
          <a href='https://github.com/' className='hover:text-skyblue transition-colors' target='_blank' rel='noopener noreferrer'>
          GitHub
          </a>
          <a href='https://linkedin.com/' className='hover:text-skyblue transition-colors' target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
          <a href='mailto:LavelleAli7@gmail.com' className='hover:text-sun transition-colors'>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default footer
