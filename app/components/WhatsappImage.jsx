import Image from 'next/image'
import React from 'react'
import { formatPhoneNumber, siteInfo } from '../data'

const WhatsappImage = () => {
  const formattedPhone = formatPhoneNumber(siteInfo.phone)
  return (
    <a href={`https://wa.me/${siteInfo.phone}`} className="relative">
      <Image
        src="/images/whatsapp.png"
        alt="logo"
        width={100}
        height={100}
        className="w-[95%] h-[112px]"
        unoptimized
      />
      <span className="absolute bottom-10 left-1/2 -translate-x-2/4 text-2xl md:text-4xl font-bold text-gray-900">
        {formattedPhone}
      </span>
    </a>
  )
}

export default WhatsappImage
