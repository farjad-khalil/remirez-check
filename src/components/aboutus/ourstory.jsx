import React from 'react'
import Image from 'next/image'
import { our_story_text } from '@/constants/constants'
export default function OurStory() {
  return (
    <div>
      <section className="bg-white py-12 ">
        <div className=" ">
          <div className="grid md:grid-cols-2 ">
            <div className="bg-neonGreen p-8 text-white py-20 px-10 max-sm:py-9 max-sm:px-5  md:px-16 ">
              <h2 className="md:text-8xl text-2xl font-bold mb-6">Our Story</h2>

              <div className="mb-4">
                <div className="">
                  <span className="md:text-4xl text-lg font-bold text-white mb-4">
                    {our_story_text.heading}
                  </span>
                  <span className="md:text-4xl text-lg montserrat-light  text-white ">
                    {our_story_text.description}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/assets/aboutus/our_story.png"
                alt="Garden Pergola"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
