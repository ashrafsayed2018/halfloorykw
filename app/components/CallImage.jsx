import Image from 'next/image'
import React from 'react'
import { siteInfo, formatPhoneNumber } from '../data'

const CallImage = () => {
  const formattedPhone = formatPhoneNumber(siteInfo.phone)
  return (
    <a href={`tel:${siteInfo.phone}`} className="relative">
      <Image
        src="/images/call.png"
        alt="logo"
        width={100}
        height={100}
        className="w-[95%] h-[112px]"
        unoptimized
      />
      <span className="absolute bottom-5 left-1/2 -translate-x-2/4 text-2xl md:text-4xl font-bold text-yellow-900">
        {formattedPhone}
      </span>
    </a>
  )
}

export default CallImage
