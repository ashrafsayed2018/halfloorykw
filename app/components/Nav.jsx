'use client'
import Image from 'next/image'
import { navLinks, siteInfo } from '../data'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  // Optional useEffect for future side effects
  useEffect(() => {
    // Side effect logic here if needed
    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="fixed top-0 right-0 w-full left-0 z-50">
      {/* Top Navbar */}
      <div className="nav-top bg-[#99E5FF] h-16 flex items-center justify-center p-4 gap-4">
        <p className="text-xl font-bold text-slate-700">
          دائما متواجدون في خدمتكم إدارة \ أبو حسن
        </p>
        <a
          href={`tel:${siteInfo.phone}`}
          className="text-xl border-2 border-slate-700 py-1 px-4 rounded-xl hover:bg-slate-700 hover:text-white"
        >
          اتصل الآن
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-purple-500 h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={100}
            height={100}
            className="w-24 h-14 object-contain"
          />
          <p className="text-xl text-white">{siteInfo.title}</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="lg:text-[16px] xl:text-lg font-bold text-white hover:text-slate-300 flex items-center gap-2"
              >
                <span>{link.title}</span>
                <span>{link.icon}</span>
              </a>
            </li>
          ))}
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            className="flex items-center justify-center gap-2 text-white border-2 border-white py-1 px-4 rounded-xl"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <ul
            className={`${
              open ? 'absolute top-32 left-0 bg-purple-500 w-full' : 'hidden'
            } flex flex-col gap-4 px-6 py-4`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lg font-bold text-white hover:text-slate-300 flex items-center gap-2"
                >
                  <span>{link.title}</span>
                  <span>{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
