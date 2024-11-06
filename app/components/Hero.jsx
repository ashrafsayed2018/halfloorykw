import Image from 'next/image'
import React from 'react'
import CallImage from './CallImage'
import WhatsappImage from './WhatsappImage'
import { siteInfo, formatPhoneNumber } from '../data'

const Hero = () => {
  const formattedPhone = formatPhoneNumber(siteInfo.phone)

  return (
    <div className="mt-32 w-full h-[1400px] bg-black opacity-70">
      <Image
        src="/images/hero.gif"
        alt="logo"
        width={100}
        height={100}
        loading="lazy"
        decoding="async"
        className="w-full h-full"
      />

      <div className="absolute inset-0 w-full h-[1400px] pt-40">
        <div className="overlay absolute inset-0 w-full h-full bg-black opacity-20  mt-[112px] z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[90%] md:w-[60%] mx-auto absolute inset-0 top-40 z-50">
          {/* calls and content */}
          <div className="calls w-full ">
            {/* call images */}
            <div className="call-images grid grid-cols-1 gap-4">
              <CallImage />
              <WhatsappImage />
              <Image
                src="/images/suggestions.png"
                alt="logo"
                width={100}
                height={100}
                className="w-[95%] h-[112px]"
                unoptimized
              />
              <Image
                src="/images/half-lorry.png"
                alt="logo"
                width={100}
                height={100}
                className="w-[95%] h-[112px]"
                unoptimized
              />
            </div>
            {/* content */}
            <div className="content mt-6">
              <p
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderTop: 'none',
                  lineHeight: '1.8',
                  marginBottom: '35pt',
                  marginTop: '0pt',
                  paddingBottom: '0pt',
                  paddingLeft: '0pt',
                  paddingRight: '0pt',
                  paddingTop: '0pt',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    color: '#ffff00',
                    fontFamily: 'Alexandria, Arial',
                    fontSize: '26px',
                    fontWeight: 800,
                    verticalAlign: 'baseline',
                  }}
                >
                  هاف لورى &nbsp;
                </span>
                <span
                  style={{
                    color: '#ffff00',
                    fontFamily: 'Alexandria, Arial',
                    fontSize: '26px',
                    fontWeight: 800,
                    verticalAlign: 'baseline',
                  }}
                >
                  نقل عفش –
                </span>
                <span
                  style={{
                    color: '#ffff00',
                    fontFamily: 'Alexandria, Arial',
                    fontSize: '26px',
                    fontWeight: 800,
                    verticalAlign: 'baseline',
                  }}
                >
                  هاف لورى
                </span>
                <span
                  style={{
                    color: '#ffff00',
                    fontFamily: 'Alexandria, Arial',
                    fontSize: '26px',
                    fontWeight: 800,
                    verticalAlign: 'baseline',
                  }}
                >
                  نقل اغراض لجميع مناطق الكويت بافضل الاسعار مع توفير عمالة
                  تحميل وتنزيل الاغراض&nbsp;
                </span>
              </p>
              <p
                style={{
                  textAlign: 'center',
                  color: 'white',
                }}
                dir="rtl"
              >
                <span
                  style={{
                    fontFamily: 'Marhey, Arial',
                    fontWeight: 700,
                    verticalAlign: 'baseline',
                  }}
                >
                  فريق عمل محترف لديه الخبرة في التعامل مع مختلف أنواع الأثاث
                  وضمان تقديم خدمة عملاء متميزة.
                </span>
              </p>
              <p
                style={{
                  textAlign: 'center',
                }}
                dir="rtl"
              >
                <span
                  style={{
                    color: '#00ffff',
                    fontFamily: 'Marhey, Arial',
                    fontWeight: 700,
                    verticalAlign: 'baseline',
                  }}
                >
                  دائما متواجدون فى خدمتكم على مدار ال 24 ساعة&nbsp;
                </span>
              </p>
              <p
                style={{
                  textAlign: 'center',
                }}
                dir="rtl"
              >
                <span
                  style={{
                    color: '#00ffff',
                    fontFamily: 'Marhey, Arial',
                    fontWeight: 700,
                    verticalAlign: 'baseline',
                  }}
                >
                  لا تتردد في الاتصال&nbsp;
                </span>
              </p>
            </div>
          </div>
          {/* image */}

          <div className="w-full md:w-full h-[400px]">
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full"
              />
              <span
                className="absolute bottom-3 left-1/2 -translate-x-2/4 text-3xl md:text-4xl italic font-extrabold text-red-400"
                style={{
                  textShadow: `
      1px 1px 0 white,
      -1px -1px 0 white,
      -1px 1px 0 white,
      1px -1px 0 white
    `,
                }}
              >
                {formattedPhone}

                <span className="absolute inset-0 text-white -z-10 tracking-tight">
                  {formattedPhone}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
