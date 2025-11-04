import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { Suspense } from 'react'
import { LanguageProvider } from './providers/LanguageProvider'
import FixedButtons from './components/FixedButtons'
import './globals.css'
import Loading from './loading'

// Dynamically import Nav and Footer to enable Suspense fallback
const Nav = dynamic(() => import('./components/Nav'), { suspense: true })
const Footer = dynamic(() => import('./components/Footer'), { suspense: true })

// Import and configure local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'هاف لوري الكويت',
  description:
    'هاف لورى نقل العفش بالكويت · هاف لورى نقل عفش: خدمة مثالية لنقل الأثاث بسهولة وفعالية · تجربة مميزة في تغليف ونقل بمدينة الشويخ-الجودة والاهتمام في كل تفصيلة.',
  other: {
    'google-site-verification': 'wXAQF4wbqBxWquXWzRa6_z2s2_RvaIbLXz8xmGROYpc',
  },
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Suspense fallback={<Loading />}>
            <Nav />
            {children}
            <FixedButtons />
            <Footer />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
