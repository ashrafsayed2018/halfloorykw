import Image from 'next/image'
import React from 'react'

const WhatsappImage = () => {
  return (
    <div className="relative">
    <Image
      src="/images/whatsapp.png"
      alt="logo"
      width={100}
      height={100}
      className="w-[95%] h-[112px]"
      unoptimized
    />
    <span className="absolute bottom-10 left-1/2 -translate-x-2/4 text-2xl md:text-5xl font-bold text-gray-900">
      555-379-74
    </span>
  </div>
  )
}

export default WhatsappImage
