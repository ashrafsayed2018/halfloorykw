'use client'
import React, { useState } from 'react'
import { siteInfo } from '../data'

const Contact = () => {
  // State to store input values
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // Function to handle WhatsApp redirection
  const handleWhatsAppRedirect = () => {
    const url = `https://api.whatsapp.com/send?phone=${siteInfo.phone}&&text=الاسم: ${name}%0Aالرسالة: ${message}`
    window.open(url, '_blank')
  }

  return (
    <div
      style={{
        backgroundImage: "url('/images/contactgif.gif')",
        backgroundSize: '100% 200%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault() // Prevent form submission refresh
            handleWhatsAppRedirect()
          }}
        >
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-right text-gray-700 mb-2"
            >
              ادخل الاسم
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-right text-gray-700 mb-2"
            >
              اكتب الرسالة
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* WhatsApp Redirect Button */}
          <a
            onClick={handleWhatsAppRedirect}
            className={`block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer ${
              !name || !message ? 'opacity-50 pointer-events-none' : ''
            }`}
            role="button"
          >
            ارسال الى الواتساب
          </a>
        </form>
      </div>
    </div>
  )
}

export default Contact
