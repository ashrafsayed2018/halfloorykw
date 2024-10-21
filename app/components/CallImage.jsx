import Image from 'next/image'
import React from 'react'

const CallImage = () => {
  return (
    <div className="relative">
                <Image
                  src="/images/call.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-[95%] h-[112px]"
                  unoptimized
                />
                <span className="absolute bottom-5 left-1/2 -translate-x-2/4 text-2xl md:text-4xl font-bold text-yellow-900">
                  555-379-74
                </span>
              </div>
  )
}

export default CallImage
