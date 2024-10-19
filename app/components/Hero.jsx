import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="mt-32 w-full h-[800px] bg-black opacity-70">
      <Image
        src="/images/hero.gif"
        alt="logo"
        width={100}
        height={100}
        className="w-full h-full"
      />
      dsfds
    </div>
  )
}

export default Hero
