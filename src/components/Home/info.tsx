import { home_info } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import { ButtonGreen } from '../Button/button'

export default function Info() {
  return (
    <div>
      <section className="bg-white pb-10 mx-8 max-sm:mx-5 md:mx-14">
        <div className=" ">
          <div className="grid md:grid-cols-12 ">
            <div className="col-span-7">
              <Image
                src="/assets/home/who_we_are.png"
                alt="Garden Pergola"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="bg-neonGreen text-white py-4 px-4 md:py-10 md:px-10 col-span-5 ">
              <div className="mb-4">
                <div className="">
                  <span className="md:text-4xl text-2xl font-bold text-white mb-4">
                    {home_info.heading}
                    <br />
                  </span>
                  <span className="md:text-lg  text-sm montserrat-light  text-white ">
                    {home_info.description}
                  </span>
                  <div className="mt-10 max-md:flex max-md:justify-center">
                    <ButtonGreen text="Read More" hover={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
