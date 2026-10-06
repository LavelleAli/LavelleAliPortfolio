import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <>
    <div className='navBar absolute top-70'>

        <div className='rightSideLine absolute top-34 left-35 w-0 h-15 border border-sky-400'></div>

        <div className='topSideLine absolute top-5 left-10 w-15 h-0 border border-sky-400'></div>

        <div className='bottomSideLine absolute bottom-0 left-10 w-15 h-0 border border-sky-400'></div>

        <div className='navLinks w-30 h-80 flex flex-col justify-center ml-10 gap-8 text-white'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
        
    </div>
      
    </>
  )
}

export default navbar
