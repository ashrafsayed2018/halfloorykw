'use client'

import Image from 'next/image'

export default function HalfLorryAnimation({ src = '/images/half-lorry.gif' }) {
  const handleError = (e) => {
    // Fallback to PNG if GIF is missing
    if (e?.target) e.target.src = '/images/half-lorry.png'
  }

  return (
    <div className='relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 p-6 ring-1 ring-slate-800'>
      <div className='flex items-center justify-center'>
        <Image
          src={src}
          width={400}
          height={400}
          alt='Animated half lorry moving furniture'
          className='w-full h-auto max-h-[280px] object-contain'
          onError={handleError}
        />
      </div>
    </div>
  )
}
