import React from 'react'
import {
  FaFacebook,
  FaFacebookSquare,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* Left Side */}
        <div className="flex items-center justify-start">
          <p className="text-lg md:text-xl">ادارة أبو حسن</p>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex items-center justify-end gap-x-4">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaYoutube className="w-10 h-10 fill-red-500" />
          </a>
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWhatsapp className="w-10 h-10 fill-green-500" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookSquare className="w-10 h-10 fill-blue-500" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-4">
        <p>جميع الحقوق محفوظة</p>
      </div>
    </footer>
  )
}

export default Footer
