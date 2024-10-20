'use client'
import { useState } from 'react'

import { Alexandria } from 'next/font/google'
const alexandria = Alexandria({ subsets: ['latin'], weight: '400' })
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import Image from 'next/image'
import { siteInfo } from '../data'
const ClicktoContact = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div
      className={`py-8 ${open ? 'h-72' : 'min-h-40'}`}
      style={{
        backgroundImage: "url('/images/background2.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Accordion className="w-4/5 md:w-[50%] mx-auto ">
        <AccordionHeader
          onClick={() => handleOpen()}
          className="flex items-center gap-2"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 md:size-10"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 md:size-10"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className={`font-[900] text-2xl md:text-4xl beiruti`}>
            إضغط هنا للتواصل معنا ومعرفة المزيد....
          </span>
        </AccordionHeader>
        <AccordionBody className={`${open ? 'block' : 'hidden'}`}>
          <ul className="list-disc grid grid-cols-1 gap-2">
            <li className="flex items-center gap-4 beiruti text-lg md:text-xl">
              <span>التواصل عبر الهاتف</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="blue"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <span>{siteInfo.phone}</span>
            </li>
            <li className="flex items-center gap-4 beiruti text-lg md:text-xl">
              <span>التواصل عبر الواتساب</span>
              <Image
                src="/svg/whatsapp.svg"
                alt="phone"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <span>{siteInfo.phone}</span>
            </li>
            <li
              className={`text-[#274e13] font-extrabold text-lg md:text-xl ${alexandria.className}}`}
            >
              تستطيع التواصل معنا خلال الواتس اب والاتصال لتقديم اى ملاحظات خاصة
              بالخدمة قبل التوصيل والاستفسار ونحن دائما فى خدمتكم.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default ClicktoContact
