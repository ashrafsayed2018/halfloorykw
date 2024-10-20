'use client'
import React, { useEffect, useState } from 'react'

const Timing = () => {
  const [currentDate, setCurrentDate] = useState('')

  // Function to format the date and time in Arabic
  const getFormattedDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    return new Date().toLocaleString('ar-KW', options) // Using Arabic locale
  }

  useEffect(() => {
    // Update current date every minute
    const updateDate = () => {
      setCurrentDate(getFormattedDate())
    }

    updateDate() // Initial call to set date immediately

    const interval = setInterval(updateDate, 60000) // Update every minute

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [])

  return (
    <div
      style={{
        backgroundImage: "url('/images/timing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-screen flex items-center justify-center text-white p-4"
    >
      <div className="bg-black bg-opacity-50 rounded-lg p-8 text-center">
        <p className="text-2xl mb-4">الوقت الحالي في الكويت</p>
        {/* Animated text color */}
        <p className="text-xl md:text-3xl animated-text">{currentDate}</p>
      </div>
    </div>
  )
}

export default Timing
