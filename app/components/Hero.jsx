import { Inter } from 'next/font/google'
import Image from 'next/image'
import { formatPhoneNumber, siteInfo } from '../data'
import CallImage from './CallImage'
import WhatsappImage from './WhatsappImage'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const Hero = () => {
  const formattedPhone = formatPhoneNumber(siteInfo.phone)

  return (
    <section
      className={`relative w-full h-[1400px] bg-black opacity-70 ${inter.className}`}
    >
      {/* Optimized Video */}
      <video
        src='/videos/hero.mp4'
        playsInline
        autoPlay
        loop
        muted
        loading='lazy'
        poster='/images/hero-placeholder.jpg' // Lightweight poster image
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-40'></div>

      {/* Content Grid */}
      <div className='absolute inset-0 flex flex-col justify-center items-center z-10 w-[90%] md:w-[60%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {/* Left Section - Calls & Content */}
          <div className='flex flex-col items-center space-y-4'>
            {/* Call Images */}
            <div className='grid grid-cols-1 gap-4'>
              <CallImage />
              <WhatsappImage />
              <Image
                src='/images/suggestions.png'
                alt='Suggestions'
                width={150}
                height={150}
                className='w-[95%] h-[112px] object-contain'
                priority
              />
              <Image
                src='/images/half-lorry.png'
                alt='Half Lorry'
                width={150}
                height={150}
                className='w-[95%] h-[112px] object-contain'
                priority
              />
            </div>

            {/* Hero Content */}
            <div className='text-center text-white space-y-4'>
              <h1 className='text-yellow-400 text-3xl font-extrabold leading-tight drop-shadow-lg min-h-[64px]'>
                هاف لورى &nbsp; نقل عفش – هاف لورى نقل اغراض لجميع مناطق الكويت
                بأفضل الأسعار
              </h1>
              <p className='font-bold'>
                فريق عمل محترف لديه الخبرة في التعامل مع مختلف أنواع الأثاث
                وضمان تقديم خدمة عملاء متميزة.
              </p>
              <p className='text-cyan-400 font-bold'>
                دائما متواجدون في خدمتكم على مدار 24 ساعة
              </p>
              <p className='text-cyan-400 font-bold'>لا تتردد في الاتصال</p>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className='w-full h-[400px] relative'>
            <Image
              src='/images/hero.webp'
              alt='Hero'
              width={600}
              height={400}
              className='w-full h-full object-contain'
              priority
            />
            <span className='absolute bottom-3 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-extrabold text-red-400 drop-shadow-lg'>
              {formattedPhone}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
