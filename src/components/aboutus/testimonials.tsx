'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { testimonialsData } from '@/constants/constants'

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update visible count and card width based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let newVisibleCount = 3

      if (width < 768) {
        newVisibleCount = 1
      } else if (width < 1200) {
        newVisibleCount = 2
      } else {
        newVisibleCount = 3
      }

      setVisibleCount(newVisibleCount)

      // Ensure currentIndex doesn't exceed maximum allowed
      const maxAllowedIndex = Math.max(0, testimonialsData.length - newVisibleCount)
      if (currentIndex > maxAllowedIndex) {
        setCurrentIndex(maxAllowedIndex)
      }

      // Calculate card width based on container width and visible count
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setCardWidth(containerWidth / newVisibleCount)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount)

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <div className="p-10 px-20 max-sm:px-4 flex flex-col items-center">
      {/* Heading */}

      {/* Testimonials Slider Container */}
      <div ref={containerRef} className="w-full mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              style={{
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
                padding: '0 12px',
              }}
            >
              <div className="p-6 max-sm:p-3 rounded-lg shadow-lg h-full bg-offWhite hover:bg-neonGreen group">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-2 border-2 border-white">
                    <Image
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h4 className="font-bold text-2xl text-black group-hover:text-white">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow text-2xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-center font-bold text-neonGreen group-hover:text-white mb-2">
                  {testimonial.title}
                </p>
                <p className="text-lg max-sm:text-sm text-center text-gray-700 group-hover:text-white mb-4">
                  {testimonial.review}
                </p>

                <div className="flex mt-10 justify-between items-start">
                  <p className="text-center text-lg font-bold text-black group-hover:text-white">
                    {testimonial.designation}
                  </p>
                  <div className="text-8xl text-neonGreen group-hover:text-white">
                    <Quote fill="#65991d" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex mt-6 gap-4">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50 transition-opacity"
        >
          ◀ Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50 transition-opacity"
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default Testimonial
