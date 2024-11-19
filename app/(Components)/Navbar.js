'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation' // Import usePathname
import { MapPin, Phone, Search, X, Linkedin, Youtube, ShieldCheck, Menu, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // Get current pathname

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground p-2">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <Link href="tel:844-COPLYCOPS" className="hover:underline">
                Call us today! 844-COPLYCOPS
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <Link href="#location" className="hover:underline">
                Find our Location
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary-foreground/80">
              <X className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header className={`sticky top-0 z-50 bg-background/60 transition-shadow duration-300 backdrop-blur-md ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="text-primary">COPLY</span>
              <span>COPS</span>
              <ShieldCheck className="h-6 w-6 text-primary" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? 'text-primary' // Highlight current path with text color only
                      : 'hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggler />
              <Button size="icon" variant="ghost" aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
            </nav>
            <Button
              className="md:hidden"
              size="icon"
              variant="ghost"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="container mx-auto px-4 py-4 bg-background border-t">
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-semibold transition-colors ${
                        pathname === item.href
                          ? 'text-primary' // Highlight current path with text color only
                          : 'hover:text-primary'
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex items-center justify-between mt-4">
                    <ThemeToggler />
                    <Button size="icon" variant="ghost" aria-label="Search">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
