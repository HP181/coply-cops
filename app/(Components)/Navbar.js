'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Search, X, Linkedin, Youtube, ShieldCheck, Menu, XIcon } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" },
  ]

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    // Header Component
    <div className='flex flex-col'>
      <div className="bg-primary text-primary-foreground p-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center  gap-2">
              <Phone className="h-4 w-4" color='white'/>
              <Link href="tel:844-COPLYCOPS" className="hover:underline text-white">
                Call us today! 844-COPLYCOPS
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" color='white'/>
              <Link href="#location" className="hover:underline text-white">
                Find our Location
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary-foreground/80">
              <X className="h-4 w-4" color='white'/>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Linkedin className="h-4 w-4" color='white'/>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Youtube className="h-4 w-4" color='white'/>
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="border-b px-2 relative">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="text-primary">COPLY</div>
            COPS
            <div className="text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold hover:text-primary">
                {item.label}
              </Link>
            ))}
            <ThemeToggler />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </nav>
          <Button className="md:hidden" size="icon" variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background border-b md:hidden z-50"
            >
              <div className="container py-4">
                <nav className="flex flex-col gap-4 justify-center items-center">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-semibold hover:text-primary"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex items-center justify-between mt-4">
                    <ThemeToggler />
                    <Button size="icon" variant="ghost">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}

export default Navbar