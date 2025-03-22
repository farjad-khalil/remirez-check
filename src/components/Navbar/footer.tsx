'use client'

import { Facebook, Globe, Instagram, Mail, MapPin, Phone, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { footer_text, footer_contact } from '@/constants/constants'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer className="bg-[#535355] text-white pt-12">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8 md:px-52">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/main_logo.svg"
                alt="M. Ramirez Logo"
                width={300}
                height={300}
                className="mr-2"
                priority
              />
            </div>
            <p className="text-sm mb-4">{footer_text}</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm cursor-pointer">
              <li className="hover:text-gray-300">Landscape Design & Installation</li>
              <li className="hover:text-gray-300">Tree, Shrub & Lawn Planting</li>
              <li className="hover:text-gray-300">Weekly Lawn Maintenance</li>
              <li className="hover:text-gray-300">Seasonal Property Maintenance</li>
              <li className="hover:text-gray-300">Lawn & Garden Fertilization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-neonGreen" />
                <Link href={`tel:${footer_contact.phone}`}>{footer_contact.phone}</Link>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-neonGreen" />
                <Link href={`mailto:${footer_contact.mail}`}>{footer_contact.mail}</Link>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-neonGreen" />
                <Link href={footer_contact.url}>{footer_contact.url}</Link>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-neonGreen" />
                <Link href="#">{footer_contact.location}</Link>
              </li>
              <li className="mt-4">Follow Us:</li>
              <li className="flex space-x-2">
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-neonGreen" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-neonGreen" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-6">
          {/* Logo and About */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/main_logo.svg"
                alt="M. Ramirez Logo"
                width={300}
                height={300}
                priority
              />
            </div>
            <p className="text-sm mb-6 pb-6 border-b border-gray-600">{footer_text}</p>
          </div>

          {/* Collapsible Services Section */}
          <Collapsible
            open={servicesOpen}
            onOpenChange={setServicesOpen}
            className="border-b border-gray-600 py-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Our Services</h3>
              <CollapsibleTrigger asChild>
                <button className="p-1">
                  <Plus
                    className={`h-6 w-6 text-white transition-transform ${servicesOpen ? 'rotate-45' : ''}`}
                  />
                </button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4">
              <ul className="space-y-3 text-sm cursor-pointer pb-4">
                <li className="hover:text-gray-300">Landscape Design & Installation</li>
                <li className="hover:text-gray-300">Tree, Shrub & Lawn Planting</li>
                <li className="hover:text-gray-300">Weekly Lawn Maintenance</li>
                <li className="hover:text-gray-300">Seasonal Property Maintenance</li>
                <li className="hover:text-gray-300">Lawn & Garden Fertilization</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Collapsible Contact Section */}
          <Collapsible
            open={contactOpen}
            onOpenChange={setContactOpen}
            className="border-b border-gray-600 py-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Contact Us</h3>
              <CollapsibleTrigger asChild>
                <button className="p-1">
                  <Plus
                    className={`h-6 w-6 text-white transition-transform ${contactOpen ? 'rotate-45' : ''}`}
                  />
                </button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4">
              <ul className="space-y-3 text-sm pb-4">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-neonGreen" />
                  <Link href={`tel:${footer_contact.phone}`}>{footer_contact.phone}</Link>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-neonGreen" />
                  <Link href={`mailto:${footer_contact.mail}`}>{footer_contact.mail}</Link>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-neonGreen" />
                  <Link href={footer_contact.url}>{footer_contact.url}</Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-neonGreen" />
                  <Link href="#">{footer_contact.location}</Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 py-6">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-neonGreen" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-neonGreen" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="text-center text-xl max-md:text-xs font-light bg-neonGreen p-2 max-md:px-0">
        COPYRIGHT M.RAMIREZ LANDSCAPING, INC.
      </div>
    </footer>
  )
}
