// components/FadeIn/fadeIn.js
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FadeIn = ({ children }) => {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade', {
        opacity: 0,
        y: 16,
        duration: 0.8,
        stagger: 0.5,
        ease: 'power2.out',
      })
    }, container)

    return () => ctx.revert() 
  }, [])

  return <div ref={container}>{children}</div>
}

export default FadeIn
