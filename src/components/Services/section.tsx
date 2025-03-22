import React from 'react'
import { ButtonGreen, ButtonLight } from '../Button/button'
import Image from 'next/image'

export default function Section({ index, title, h1, h2, h3, desc_1, desc_2, desc_3, img, icon }: any) {

  return (
    <section className='p-14 max-md:p-10 max-sm:p-6 bg-lightGreen mb-24'>

      <div className="flex flex-col md:flex-row items-center justify-center ">
        {/* Left Image Section (Shows first on larger screens, second on mobile) */}
        <div className={`relative w-full md:w-5/12 mt-14 max-md:p-3 max-md:pl-14 md:mt-0 order-2 ${index % 2 == 0 ? "md:order-1" : "md:order-2"} `}>
          {/* Border Container */}
          <div className="border-4 border-[#65991d] relative">
            {/* Image with Offset */}
            <Image
              src={img} // Replace with actual image path
              alt="Landscape Design"
              width={600}
              height={400}
              className="relative w-full h-auto -top-9 -left-9"
              priority
            />
          </div>
        </div>

        {/* Right Content Section (Appears first on mobile, right side on larger screens) */}
        <div className={`w-full md:w-1/2  md:px-16 order-1 ${index % 2 == 0 ? "md:order-2" : "md:order-1"} `}>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#65991d] flex items-center gap-3">
            <Image
              src={icon} // Replace with actual icon path
              alt="Icon"
              width={80}
              height={80}
              priority
            />
            {title}
          </h2>

          {/* Features List */}
          <div className="mt-6 space-y-6 px-4 md:px-10 md:text-lg">

            <div className="flex items-start gap-3">
              <div className="text-3xl text-neonGreen font-bold">✔</div>
              <div>
                <h3 className="md:text-lg font-bold">{h1}</h3>
                <p className="text-gray-700">{desc_1}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-3xl text-neonGreen font-bold">✔</div>
              <div>
                <h3 className="md:text-lg font-bold">{h2}</h3>
                <p className="text-gray-700">{desc_2}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-3xl text-neonGreen font-bold">✔</div>
              <div>
                <h3 className="md:text-lg font-bold">{h3}</h3>
                <p className="text-gray-700">{desc_3}</p>
              </div>
            </div>
            <div className="flex p-10 max-md:justify-center max-md:hidden">
              {index % 2 == 0 ? <ButtonGreen text={"Book Service"} /> : <ButtonLight text={"Book Service"} />}

            </div>
          </div>
        </div>
        <div className="flex p-10 max-md:justify-center order-3 md:hidden">
          {index % 2 == 0 ? <ButtonGreen text={"Book Service"} /> : <ButtonLight text={"Book Service"} />}

        </div>
      </div>

    </section>
  )
}
