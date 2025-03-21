"use client"
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from "next/image"
import Link from "next/link"
import { Phone, Instagram, Facebook, PhoneCall } from "lucide-react"
import { usePathname } from "next/navigation";
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Navbar/footer';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">

      <body className='flex flex-col min-h-screen montserrat-regular'>

        <div className="bg-white py-1 px-2 md:px-16 flex justify-between items-center text-sm ">
          <div className='flex'>

            <Link href="#" aria-label="Instagram" className="md:hidden">
              <Instagram size={30} strokeWidth={1.5} className="text-neonGreen" />
            </Link>
            <Link href="#" aria-label="Facebook" className="md:hidden">
              <Facebook size={30} strokeWidth={0.75} className="text-neonGreen fill-white" />
            </Link>
          </div>
          <div className='text-[#65991d] flex flex-row gap-4 text-2xl items-center'>
            <span className="mr-2  ">Call Us  </span><img src="/assets/home/phone.png" alt="phone_icon" />
            <Link href="tel:(516) 270-7024" className="text-[#65991d] font-medium">
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
  );
}
