import Image from 'next/image'
import React from 'react'

const Supervision = () => {
  return (
    <div
      className="h-40 flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background1.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative w-52 h-32">
        <span className="absolute bottom-5 left-14 text-xl font-bold text-white">
          ابو حسن
        </span>
        <Image
          src="/images/manager.png"
          alt="supervision"
          className="w-full h-full object-fill"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default Supervision
