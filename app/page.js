import Hero from './components/Hero'
import Animation from './components/Animation'
import Supervision from './components/Supervision'
import ClicktoContact from './components/ClicktoContact'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ImageSlider from './components/Slider'
import Timing from './components/Timing'
import { siteInfo } from './data'
export default function Home() {
  return (
    <main>
      <Hero />
      <Supervision />
      <ClicktoContact />
      <Experience />
      <div
        className="h-40 w-full bg-red-200 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/whatsappgif.gif')",
          backgroundSize: '100% 200%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <a
          href={`https://wa.me/${siteInfo.phone}`}
          className="text-white/80 text-xl font-bold py-1 px-3 rounded-xl bg-blue-700 hover:bg-white/80 hover:text-blue-700"
        >
          احجز الان{' '}
        </a>
      </div>
      <Contact />
      <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 my-10">
        <ImageSlider />
        <Animation />
      </div>
      <Timing />
    
    </main>
  )
}
