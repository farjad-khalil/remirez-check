'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { testimonialsData } from '@/constants/constants'
import { Quote } from 'lucide-react'
import { DividerLeft } from '../Divider/divider'

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [cardWidth, setCardWidth] = useState(460) // default for desktop

  const nextTestimonials = () => {
    if (startIndex + visibleCards < testimonialsData.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevTestimonials = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth

      if (screenWidth < 768) {
        setVisibleCards(1)
        setCardWidth(screenWidth - 48) // 24px padding each side
      } else if (screenWidth < 1200) {
        setVisibleCards(2)
        setCardWidth(400)
      } else {
        setVisibleCards(3)
        setCardWidth(460)
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  return (
    <div className="p-10 max-sm:px-4 flex flex-col items-center">
      <DividerLeft t1={'What'} t2={'Our Customer Say'} />

      {/* Outer Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Sliding Inner Wrapper */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * cardWidth}px)`,
            width: `${testimonialsData.length * cardWidth}px`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              style={{ width: `${cardWidth}px`, flexShrink: 0 }}
              className="p-6 max-sm:p-3 rounded-lg shadow-lg transition-all duration-300 bg-offWhite hover:bg-neonGreen group"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-2 border-2 border-white">
                  <Image
                    src={testimonial.image}
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
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 gap-4">
        <button
          onClick={prevTestimonials}
          disabled={startIndex === 0}
          className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <button
          onClick={nextTestimonials}
          disabled={startIndex + visibleCards >= testimonialsData.length}
          className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default Testimonial
