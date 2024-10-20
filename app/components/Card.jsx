import Image from 'next/image'
import React from 'react'

const Card = ({ imageSrc, title, linkText, linkUrl, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-none">
      {/* Image - takes full width and half height of the card */}
      <Image
        className="w-full h-48 object-cover"
        src={imageSrc}
        width={100}
        height={100}
        alt={title}
      />

      {/* Card Content */}
      <div className="p-4 text-center">
        {/* Card Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {/* Link */}
        <a
          href={linkUrl}
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md w-full"
        >
          {linkText}
        </a>

        {/* Paragraph (limited to 3 lines) */}
        <p className="text-gray-700 mt-4 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

export default Card
