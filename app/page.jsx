'use client'
import Image from 'next/image'
import { articles } from './articles'
import { siteInfo } from './data'
import { useLanguage } from './providers/LanguageProvider'

const content = {
  ar: {
    langLabel: 'English',
    heroTitle: 'هاف لوري نقل عفش بالكويت',
    heroDesc:
      'نقل سريع وآمن وتغليف احترافي لجميع مناطق الكويت. فريق متخصص، أسعار مناسبة، وخدمة متوفرة طوال الأسبوع.',
    ctaWhatsapp: 'تواصل عبر واتساب',
    ctaCall: 'اتصل الآن',
    features: [
      {
        icon: '⚡',
        title: 'سرعة واستجابة',
        desc: 'وصول سريع وخدمة فورية عند الطلب لنقل عفشك بكل سهولة.',
      },
      {
        icon: '🛡️',
        title: 'أمان وتغليف',
        desc: 'تغليف احترافي وحماية كاملة للأثاث خلال عملية النقل.',
      },
      {
        icon: '💰',
        title: 'أسعار مناسبة',
        desc: 'خطط أسعار تناسب الجميع بدون تكاليف مخفية.',
      },
    ],
    aboutTitle: 'من نحن',
    aboutP1:
      'نحن فريق متخصص في خدمات نقل العفش باستخدام هاف لوري في جميع مناطق الكويت. نعتمد على خبرة عملية، أدوات احترافية للتغليف، وفريق مدرّب على الفك والتركيب لضمان وصول ممتلكاتك بأمان وفي الوقت المناسب.',
    aboutP2:
      'نلتزم بالجودة والسرعة والشفافية في الأسعار، ونسعى لتقديم تجربة نقل مريحة وموثوقة لجميع العملاء سواء للأفراد أو الشركات.',
    aboutWhatsapp: 'تواصل معنا الآن',
    aboutCall: 'اتصل بنا',
    servicesTitle: 'خدماتنا',
    services: [
      {
        icon: '🚛',
        title: 'نقل عفش منزلي',
        desc: 'نقل آمن وسريع للمنازل والشقق.',
      },
      {
        icon: '📦',
        title: 'تغليف احترافي',
        desc: 'مواد تغليف عالية الجودة لحماية الأثاث.',
      },
      {
        icon: '🪛',
        title: 'فك وتركيب',
        desc: 'خدمة كاملة للأثاث والمطابخ والأجهزة.',
      },
      {
        icon: '🏢',
        title: 'نقل للمكاتب والشركات',
        desc: 'تنظيم وعناية لنقل المعدات والملفات.',
      },
      {
        icon: '🔁',
        title: 'نقل داخلي بين المناطق',
        desc: 'تغطية لجميع مناطق الكويت بسرعة.',
      },
      {
        icon: '⏱️',
        title: 'خدمة الطوارئ',
        desc: 'استجابة سريعة للحالات العاجلة.',
      },
    ],
    coverageTitle: 'نخدم جميع مناطق الكويت',
    coverageDesc:
      'احجز موعدك الآن عبر الواتساب أو اتصل بنا للحصول على عرض سعر سريع.',
    coverageWhatsapp: 'احجز عبر واتساب',
    coverageCall: 'اتصل بنا',
    articlesTitle: 'أحدث المقالات',
    readMore: 'اقرأ المزيد',
  },
  en: {
    langLabel: 'العربية',
    heroTitle: 'Half Lorry Furniture Moving in Kuwait',
    heroDesc:
      'Fast, safe moving with professional packing across all Kuwait areas. Expert team, fair prices, service available all week.',
    ctaWhatsapp: 'Chat on WhatsApp',
    ctaCall: 'Call Now',
    features: [
      {
        icon: '⚡',
        title: 'Fast Response',
        desc: 'Quick arrival and on-demand service to move your furniture easily.',
      },
      {
        icon: '🛡️',
        title: 'Safe & Packed',
        desc: 'Professional packing and full protection throughout the move.',
      },
      {
        icon: '💰',
        title: 'Fair Prices',
        desc: 'Pricing plans that suit everyone with no hidden fees.',
      },
    ],
    aboutTitle: 'About Us',
    aboutP1:
      'We are a specialized team providing half-lorry furniture moving across Kuwait. We rely on hands-on experience, professional packing tools, and trained staff for disassembly and assembly to ensure your belongings arrive safely and on time.',
    aboutP2:
      'We commit to quality, speed, and transparent pricing, delivering a comfortable and reliable moving experience for individuals and companies.',
    aboutWhatsapp: 'Contact Us on WhatsApp',
    aboutCall: 'Call Us',
    servicesTitle: 'Our Services',
    services: [
      {
        icon: '🚛',
        title: 'Home Moving',
        desc: 'Safe and fast moving for homes and apartments.',
      },
      {
        icon: '📦',
        title: 'Professional Packing',
        desc: 'High-quality packing materials to protect furniture.',
      },
      {
        icon: '🪛',
        title: 'Disassembly & Assembly',
        desc: 'Full service for furniture, kitchens, and appliances.',
      },
      {
        icon: '🏢',
        title: 'Office & Company Moving',
        desc: 'Organized care for equipment and files.',
      },
      {
        icon: '🔁',
        title: 'Inter-area Moving',
        desc: 'Coverage across all Kuwait areas quickly.',
      },
      {
        icon: '⏱️',
        title: 'Emergency Service',
        desc: 'Rapid response for urgent cases.',
      },
    ],
    coverageTitle: 'We Serve All Kuwait Areas',
    coverageDesc: 'Book now via WhatsApp or call us for a fast quote.',
    coverageWhatsapp: 'Book on WhatsApp',
    coverageCall: 'Call Us',
    articlesTitle: 'Latest Articles',
    readMore: 'Read More',
  },
}

export default function Home() {
  const { lang, toggleLang } = useLanguage()
  const t = content[lang]
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 10)

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr)
      return new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(date)
    } catch (e) {
      return dateStr
    }
  }

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className='relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white pt-28'>
        <div className='relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24'>
          {/* Language toggle */}
          <div className='flex justify-end'>
            <button
              onClick={toggleLang}
              className='rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20'
              aria-label='Change language'
            >
              {t.langLabel}
            </button>
          </div>

          <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight'>
            {t.heroTitle}
          </h1>
          <p className='mt-4 max-w-2xl text-white/85'>{t.heroDesc}</p>

          <div className='mt-8 flex flex-wrap gap-3'>
            <a
              href={`https://wa.me/${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'
            >
              {t.ctaWhatsapp}
            </a>
            <a
              href={`tel:${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-white/90 px-5 py-3 text-blue-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-white'
            >
              {t.ctaCall} {siteInfo.phone}
            </a>
          </div>
        </div>

        {/* Background visual */}
        <div className='absolute inset-0 -z-0 opacity-15'>
          <Image
            src='/images/hero.webp'
            alt='نقل عفش الكويت'
            fill
            className='object-cover'
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {t.features.map((f) => (
            <div
              key={f.title}
              className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'
            >
              <div className='text-2xl'>{f.icon}</div>
              <h3 className='mt-3 text-lg font-semibold'>{f.title}</h3>
              <p className='mt-2 text-gray-600'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <div className='rounded-2xl bg-white p-8 shadow-sm border border-gray-200'>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-900'>
            {t.aboutTitle}
          </h2>
          <p className='mt-4 text-gray-700 leading-8'>{t.aboutP1}</p>
          <p className='mt-2 text-gray-700 leading-8'>{t.aboutP2}</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href={`https://wa.me/${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-white shadow hover:bg-green-600'
            >
              {t.aboutWhatsapp}
            </a>
            <a
              href={`tel:${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-white shadow hover:bg-blue-800'
            >
              {t.aboutCall}
            </a>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-blue-900'>
          {t.servicesTitle}
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {t.services.map((s) => (
            <div
              key={s.title}
              className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'
            >
              <div className='text-2xl'>{s.icon}</div>
              <h3 className='mt-3 text-lg font-semibold'>{s.title}</h3>
              <p className='mt-2 text-gray-600'>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-blue-900'>
          {t.articlesTitle}
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {latestArticles.map((a) => (
            <a
              key={a.id}
              href={`/articles/${encodeURIComponent(a.slug)}`}
              className='group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='absolute bottom-2 left-2 right-2 flex items-center justify-between text-white'>
                  <span className='text-xs md:text-sm bg-black/40 px-2 py-1 rounded-md'>
                    {formatDate(a.created_at)}
                  </span>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900 line-clamp-2'>
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p className='mt-2 text-sm text-gray-600 line-clamp-3'>
                    {a.excerpt}
                  </p>
                )}
                <div className='mt-4 flex items-center justify-between'>
                  <span className='text-sm text-blue-700 group-hover:text-blue-900'>
                    {t.readMore}
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-4 text-blue-700 group-hover:text-blue-900'
                  >
                    <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75v-3.75Z' />
                    <path d='M5.5 5.5A4.5 4.5 0 0 1 10 1h2a7 7 0 1 1-7 7V6a.5.5 0 0 1 1 0v1a6 6 0 1 0 6-6h-2a3.5 3.5 0 0 0-3.5 3.5v2a.5.5 0 0 1-1 0v-2Z' />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className='mx-auto max-w-6xl px-4 pb-16'>
        <div className='rounded-2xl bg-blue-50 p-8 text-center'>
          <h3 className='text-xl font-semibold text-blue-900'>
            {t.coverageTitle}
          </h3>
          <p className='mt-2 text-blue-800/80'>{t.coverageDesc}</p>
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <a
              href={`https://wa.me/${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-white shadow hover:bg-green-600'
            >
              {t.coverageWhatsapp}
            </a>
            <a
              href={`tel:${siteInfo.phone}`}
              className='inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-white shadow hover:bg-blue-800'
            >
              {t.coverageCall}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
