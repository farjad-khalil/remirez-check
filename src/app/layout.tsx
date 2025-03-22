'use client'
import './globals.css'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Navbar/footer'
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen montserrat-regular">
        <div className="bg-white py-1 px-2 md:px-16  flex justify-between items-center text-sm ">
          <div className="flex">
            <Link href="#" aria-label="Instagram" className="md:hidden ">
              <Instagram size={30} strokeWidth={1.5} className="text-neonGreen max-sm:w-6" />
            </Link>
            <Link href="#" aria-label="Facebook" className="md:hidden ">
              <Facebook
                size={30}
                strokeWidth={0.75}
                className="text-neonGreen max-sm:w-6 fill-white"
              />
            </Link>
          </div>
          <div className="text-[#65991d] flex flex-row gap-4 max-sm:gap-0 text-2xl items-center ">
            <span className="mr-2  max-sm:text-sm">Call Us </span>
            <Image
              src="/assets/home/phone.png"
              alt="phone_icon"
              width={16} // 👈 1rem = 16px (Tailwind's w-4 = 1rem)
              height={16}
              className="max-sm:w-4 h-auto"
            />
            <Link href="tel:(516) 270-7024" className="text-[#65991d] font-medium max-sm:text-sm">
              (516) 270-7024
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <header className="bg-[#65991d] text-white ">
          <Navbar />
        </header>
        {children}

        <Footer />
      </body>
    </html>
  )
}
