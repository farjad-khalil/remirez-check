'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Facebook, Instagram, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  // Calculate navbar height and apply padding to body only on mobile
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768 // md breakpoint is 768px
      const navbar = document.getElementById('navbar')

      if (isMobile && navbar) {
        const height = navbar.offsetHeight
        document.body.style.paddingTop = `${height}px`
      } else {
        document.body.style.paddingTop = '0'
      }
    }

    // Initial call
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.paddingTop = '0'
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header
      id="navbar"
      className="w-full md:static max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 max-md:z-40 max-md:shadow-md"
    >
      <div className="bg-white py-1 px-2 md:px-16 flex justify-between items-center text-sm">
        <div className="flex">
          <Link href="#" aria-label="Instagram" className="md:hidden">
            <Instagram size={30} strokeWidth={1.5} className="text-neonGreen max-sm:w-6" />
          </Link>
          <Link href="#" aria-label="Facebook" className="md:hidden">
            <Facebook
              size={30}
              strokeWidth={0.75}
              className="text-neonGreen max-sm:w-6 fill-white"
            />
          </Link>
        </div>
        <div className="text-neonGreen flex flex-row gap-4 max-sm:gap-0 text-2xl items-center">
          <span className="mr-2 max-sm:text-sm">Call Us </span>
          <Image
            src="/assets/home/phone.png"
            alt="phone_icon"
            width={24}
            height={24}
            className="max-sm:w-4 h-auto"
          />
          <Link href="tel:+1 (516) 270-7024" className="text-neonGreen font-medium max-sm:text-sm">
            (516) 270-7024
          </Link>
        </div>
      </div>
      <div className="px-8 custom-1170:px-16 py-5 max-sm:px-2 flex justify-between items-center bg-neonGreen">
        {/* Left - Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
          <Image
            src="/assets/main_logo.svg"
            alt="M. Ramirez Logo"
            width={180}
            height={180}
            className="mr-2"
            priority
          />
        </div>

        {/* Center - Navigation (Visible on `md+`) */}
        <nav className="hidden md:flex items-center custom-1170:space-x-10 space-x-5 text-xl text-white">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact Us', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative py-2 transition-all duration-300 ${
                pathname === link.path ? 'font-bold' : ''
              }`}
            >
              {link.name}
              {/* Underline effect */}
              <span
                className={`absolute left-0 -bottom-1 w-full h-[2px] bg-white transition-transform duration-300 origin-left ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Right - Social Icons & Hamburger Menu */}
        <div className="flex items-center space-x-6 md:space-x-8">
          {/* Social Links (Always visible) */}
          <Link href="#" aria-label="Instagram" className="max-md:hidden">
            <Instagram size={30} strokeWidth={1.5} className="text-white" />
          </Link>
          <Link href="#" aria-label="Facebook" className="max-md:hidden">
            <Facebook size={30} strokeWidth={0.75} className="text-white fill-white" />
          </Link>

          {/* Mobile Menu Toggle (Visible on `sm` screens) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={35} />
          </button>
        </div>

        {/* Full-Screen Mobile Menu (With Transition) */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setMenuOpen(false)} // Clicking outside closes menu
        ></div>

        <div
          className={`fixed inset-0 bg-neonGreen text-white flex flex-col items-center justify-center space-y-8 text-2xl font-bold z-50 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={35} />
          </button>

          {/* Logo */}
          <Image
            src="/assets/main_logo.svg"
            alt="M. Ramirez Logo"
            width={200}
            height={200}
            className="mb-6"
            priority
          />

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6 text-center">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block transition-all duration-300 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
