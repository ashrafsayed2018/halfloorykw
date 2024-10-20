"use client"
import { useState } from "react";
import {Beiruti,Inter}  from 'next/font/google';
const beiruti = Beiruti({
    subsets: ['latin'],
    display: 'swap',
    adjustFontFallback: false,
    weight: '400',
    fallback: {
        fontFamily: 'Geist Sans',
        fontWeight: '400',
    },
})
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
const ClicktoContact = () => {
const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className='min-h-40' style={{backgroundImage:"url('/images/background2.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
       <Accordion>
        <AccordionHeader onClick={() => handleOpen()} className="w-4/5 md:w-1/4 mx-auto flex items-center gap-2">
            {open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
            </svg>: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        }
        <span className={`font-extrabold text-2xl ${beiruti.className}`} >إضغط هنا للتواصل معنا ومعرفة المزيد....</span>
        </AccordionHeader>
        <AccordionBody className={`${open ? 'block': 'hidden'}`}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      
    </div>
  )
}

export default ClicktoContact
