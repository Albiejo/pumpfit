"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Dumbbell } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span  className={cn(
      isScrolled ? "text-gray-800 hover:text-gray-900 font-bold text-xl" : "text-white/80 hover:text-white font-bold text-xl",
      "transition-colors"
    )}>PumpFit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-6",
            isScrolled ? "text-gray-800" : "text-white/80"
          )}
        >
          <Link
            href="#about"
            className={cn(
              isScrolled
                ? "text-gray-800 hover:text-gray-900"
                : "text-white/80 hover:text-white",
              "transition-colors"
            )}
          >
            About
          </Link>
          <Link
            href="#packages"
            className={cn(
              isScrolled
                ? "text-gray-800 hover:text-gray-900"
                : "text-white/80 hover:text-white",
              "transition-colors"
            )}
          >
            Packages
          </Link>

          <Link
            href="#trainers"
            className={cn(
              isScrolled
                ? "text-gray-800 hover:text-gray-900"
                : "text-white/80 hover:text-white",
              "transition-colors"
            )}
          >
            Trainers
          </Link>
          <Link
            href="#testimonials"
            className={cn(
              isScrolled
                ? "text-gray-800 hover:text-gray-900"
                : "text-white/80 hover:text-white",
              "transition-colors"
            )}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className={cn(
              isScrolled
                ? "text-gray-800 hover:text-gray-900"
                : "text-white/80 hover:text-white",
              "transition-colors"
            )}
          >
            Contact
          </Link>
          <Button>Join Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md py-4">
          <nav className="container flex flex-col gap-4">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#packages"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              href="#classes"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Classes
            </Link>
            <Link
              href="#trainers"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Trainers
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full">Join Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

