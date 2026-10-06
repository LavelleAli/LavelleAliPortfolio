import React from 'react'

// eyebrow = small label above the title, e.g. "01 — Work"
const sectionHeading = ({ eyebrow, title, children }) => {
  return (
    <div className='mb-10'>
      {eyebrow && <p className='font-mono text-sm text-sun mb-2'>{eyebrow}</p>}
      <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
      <div className='mt-3 h-1 w-16 bg-skyblue rounded-full'></div>
      {children && <p className='mt-4 text-muted max-w-2xl'>{children}</p>}
    </div>
  )
}

export default sectionHeading
