'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { siteInfo, navLinks } from '../data'
import { useLanguage } from '../providers/LanguageProvider'

const Footer = () => {
  const year = new Date().getFullYear()
  const { lang } = useLanguage()

  const enTitles = {
    '/': 'Home',
    '/complaint': 'Complaint',
    '/team': 'Team',
    '/whywe': 'Why Us',
    '/halflorry': 'Half Lorry',
    '/whoweare': 'Who We Are',
    '/contact': 'Contact',
  }

  const displayLinks = navLinks.slice(0, 6).map((l) => ({
    ...l,
    title: lang === 'en' ? enTitles[l.href] || l.title : l.title,
  }))

  const brandName = lang === 'en' ? 'Half Lorry Kuwait' : 'هاف لوري الكويت'
  const brandDesc =
    lang === 'en'
      ? 'Professional and safe furniture moving service across Kuwait.'
      : 'خدمة نقل العفش لجميع مناطق الكويت مع تغليف احترافي وفك وتركيب.'
  const whatsappLabel = lang === 'en' ? 'WhatsApp' : 'واتساب'
  const callLabel = lang === 'en' ? 'Call' : 'اتصل'
  const quickLinksLabel = lang === 'en' ? 'Quick Links' : 'روابط سريعة'
  const contactLabel = lang === 'en' ? 'Contact Us' : 'تواصل معنا'
  const phoneLabel = lang === 'en' ? 'Phone' : 'الهاتف'
  const emailLabel = lang === 'en' ? 'Email' : 'البريد'
  const hoursLabel = lang === 'en' ? 'Hours' : 'المواعيد'
  const copyrightText =
    lang === 'en'
      ? `© ${year} All rights reserved · ${brandName}`
      : `© ${year} جميع الحقوق محفوظة · ${brandName}`
  const supportText =
    lang === 'en'
      ? 'Quick support via WhatsApp:'
      : 'دعم سريع عبر واتساب:'

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Top */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="هاف لوري الكويت"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <p className="text-lg font-semibold">{brandName}</p>
                <p className="text-white/70 text-sm">{brandDesc}</p>
              </div>
            </div>
            <p className="mt-4 text-white/80 leading-7">{brandDesc}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://wa.me/${siteInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-600"
              >
                <FaWhatsapp /> {whatsappLabel}
              </a>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center justify-center rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-white"
              >
                {callLabel}: {siteInfo.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">{quickLinksLabel}</h3>
            <ul className="mt-4 space-y-3 text-white/85">
              {displayLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">{contactLabel}</h3>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>{phoneLabel}: {siteInfo.phone}</li>
              <li>{emailLabel}: info@halfloorykw.com</li>
              <li>{hoursLabel}: طوال الأسبوع</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-red-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap items-center justify-between gap-3 text-white/70 text-sm">
          <p>{copyrightText}</p>
          <p>
            {supportText} <a className="underline" href={`https://wa.me/${siteInfo.phone}`}>{siteInfo.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
