import Image from 'next/image'

const FixedButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 left-4 flex justify-between items-center p-4 rounded-lg shadow-lg z-50">
      <a
        href="https://wa.me/1234567890"
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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0 0 2.08 18.39L1 23l4.66-1.23a11.77 11.77 0 0 0 5.82 1.49H12a11.77 11.77 0 0 0 8.53-20.52zm-8.42 18.4a10.09 10.09 0 0 1-5.1-1.4L3.69 21l1.41-4.21A10.09 10.09 0 1 1 12.1 21.88zm5.69-6.27a4.66 4.66 0 0 1-3.35-1.5l-.8-.82a.7.7 0 0 1 .03-1l1.24-1.22a.69.69 0 0 1 1 0l.41.41a.3.3 0 0 0 .42 0 .3.3 0 0 0 .08-.25c0-.09 0-.21-.07-.33a8.7 8.7 0 0 0-1.58-2.29 8.47 8.47 0 0 0-2.32-1.61c-.11 0-.24-.04-.33-.04a.3.3 0 0 0-.33.25c-.04.13-.07.28-.08.42 0 .17-.04.3-.11.42L10 8.82a.7.7 0 0 1-1 0l-.82-.82a4.66 4.66 0 0 1-1.5-3.35.69.69 0 0 1 .7-.7h.1A7.91 7.91 0 0 1 14 16.27z" />
        </svg> */}
      </a>

      <a
        href="tel:+1234567890"
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
