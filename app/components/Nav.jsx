import Image from 'next/image'
import { navLinks, siteInfo } from '../data'

const Nav = () => {
  return (
    <div className="fixed top-0 right-0 w-full left-0 z-50">
      {/* top navbar */}
      <div className="nav-top bg-[#99E5FF] h-16 flex items-center justify-center p-4 gap-4">
        <p className="text-xl font-bold text-slate-700">
          دائما متواجودن فى خدمتكم إدارة \ ابو حسن{' '}
        </p>
        <a
          href={`tel:${siteInfo.phone}`}
          className="text-xl border-2 border-slate-700 py-1 px-4 rounded-xl hover:bg-slate-700 hover:text-white"
        >
          اتصل الان
        </a>
      </div>
      <nav className="bg-purple-500 h-16 flex items-center justify-between px-6">
        {/* right logo */}
        <div className="logo flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={100}
            height={100}
            className="w-24 h-14 object-contain"
          />
          <p className="text-xl  text-white">{siteInfo.title}</p>
        </div>
        {/* left menu */}
        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-xl font-bold text-white hover:text-slate-300"
              >
                {link.title}
                {link.icon}
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
      </nav>
    </div>
  )
}

export default Nav
