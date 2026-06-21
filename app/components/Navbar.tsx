"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isMailPage = pathname === "/mail";

  const navItems = [
    { id: "home", name: "Home", href: "/#home" },
    { id: "tech-stack", name: "Tech Stack", href: "/#tech-stack" },
    { id: "projects", name: "Projects", href: "/#projects" },
    { id: "experience", name: "Experience", href: "/#experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isMailPage) return;

      // Active section detection
      const sections = ["home", "tech-stack", "projects", "experience"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMailPage]);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isMailPage) return; // Allow normal navigation on mail page
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/75 backdrop-blur-md  py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2 group">
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#E58C8A] transition-colors">
            Yoga Naden
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-[#E58C8A] ${
                  !isMailPage && activeSection === item.id
                    ? "text-[#E58C8A]"
                    : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/mail"
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              isMailPage
                ? "bg-[#E58C8A] text-white scale-105"
                : "bg-white text-black hover:bg-[#E58C8A] hover:text-white hover:scale-105"
            }`}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-5 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`text-base font-semibold py-2 transition-colors hover:text-[#E58C8A] ${
                !isMailPage && activeSection === item.id
                  ? "text-[#E58C8A]"
                  : "text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/mail"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full bg-[#E58C8A] text-black font-bold text-sm hover:bg-[#d47b79] transition-colors mt-2"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
