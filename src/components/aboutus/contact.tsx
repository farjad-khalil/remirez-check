import React from 'react'
import { ButtonGreenBright, ButtonWhite } from '../Button/button'
import { contactus_data } from '@/constants/constants'

export default function Contact() {
  return (
    <section className="relative py-16 text-white">
      <div
        className="absolute inset-0 bg-black opacity-95 "
        style={{
          backgroundImage: "url('/assets/aboutus/contact.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      ></div>
      <div className="container mx-auto px-4 max-md:px-7  relative z-10 text-center">
        <h2 className="text-4xl max-sm:text-2xl font-bold mb-4">
          Elevate Your <span className="text-[#94f312]">Green Space!</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-8 font-semibold">{contactus_data}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <ButtonWhite text={'Contact Us'} to="/contact" />

          {/* Outlined Button - Becomes Filled on Hover */}
          <ButtonGreenBright text={'Call us'} to={'tel:(516) 270-7024'} />
        </div>
      </div>
    </section>
  )
}
