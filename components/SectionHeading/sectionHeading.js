import React from 'react'

// eyebrow = small label above the title, e.g. "01 — Work"
// center  = pass `center` to center the heading and its underline (left-aligned by default)
const sectionHeading = ({ eyebrow, title, center = false, children }) => {
  return (
    <div className={`mb-8 md:mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && <p className='font-mono text-sm text-sun mb-2'>{eyebrow}</p>}
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{title}</h2>
      <div className={`mt-3 h-1 w-16 bg-skyblue rounded-full ${center ? 'mx-auto' : ''}`}></div>
      {children && <p className={`mt-4 text-muted max-w-2xl ${center ? 'mx-auto' : ''}`}>{children}</p>}
    </div>
  )
}

export default sectionHeading
