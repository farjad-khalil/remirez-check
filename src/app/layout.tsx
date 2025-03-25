'use client'
import './globals.css'
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Navbar/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen montserrat-regular  ">
        {/* Navigation */}
        <header className="bg-neonGreen text-white ">
          <Navbar />
        </header>
        <div className="">{children}</div>

        <Footer />
      </body>
    </html>
  )
}
