import Link from 'next/link'
import React from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const mobileNav = () => {
  return (
    <nav className='md:hidden sticky top-0 z-10 flex justify-between items-center px-6 py-4 bg-ink/90 backdrop-blur border-b border-line'>
      <Link href='/' className='font-mono font-bold text-sun'>LA</Link>
      <div className='flex gap-5 text-sm'>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className='hover:text-skyblue transition-colors'>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default mobileNav
