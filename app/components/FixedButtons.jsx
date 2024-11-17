import Image from 'next/image'
import { siteInfo } from '../data'

const FixedButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 left-4 flex justify-between items-center p-4 rounded-lg shadow-lg z-50">
      <a
        href={`https://wa.me/965${siteInfo.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-white p-3 rounded-full shadow-md hover:bg-green-200 transition-all flex items-center justify-center animate-vibrate"
        aria-label="WhatsApp"
      >
        <Image
          src="/svg/whatsapp.svg"
          alt="WhatsApp"
          width={100}
          height={100}
          className="w-8 h-8"
        />
      </a>

      <a
        href={`tel:${siteInfo.phone}`}
        className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-all flex items-center justify-center animate-vibrate"
        aria-label="Call"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )
}

export default FixedButtons
