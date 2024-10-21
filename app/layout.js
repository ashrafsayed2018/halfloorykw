import localFont from 'next/font/local'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

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
  title: 'هاف لوري الكويت ',
  description: 'هاف لورى نقل العفش بالكويت · هاف لورى نقل عفش: خدمة مثالية لنقل الأثاث بسهولة وفعالية · تجربة مميزة في تغليف ونقل بمدينة الشويخ-الجودة والاهتمام في كل تفصيلة.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
