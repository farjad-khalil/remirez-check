'use client'
import Link from 'next/link'
import React from 'react'

export const ButtonGreen = ({
  text,
  hover = true,
  border_white = false,
  to = null,
}: {
  text: string
  hover?: boolean
  border_white?: boolean
  to?: string | null
}) => {
  return (
    <Link
      href={`${to ? to : '#'}`}
      className={`bg-neonGreen text-white px-8 py-3 font-medium border-2 border-white transition-all duration-300   ${hover ? (border_white ? 'hover:bg-transparent  hover:text-white' : 'hover:bg-transparent hover:text-neonGreen hover:border-neonGreen') : ''} `}
    >
      {text}
    </Link>
  )
}

export const ButtonLight = ({ text, to }: { text: string; to?: string }) => {
  return (
    <Link
      href={`${to ? to : '#'}`}
      className="bg-white text-neonGreen px-8 py-3 font-medium border-2 border-neonGreen transition-all duration-300 hover:bg-neonGreen hover:text-white hover:border-white"
    >
      {text}
    </Link>
  )
}

export const ButtonGreenBright = ({ text, to }: { text?: string; to?: string }) => {
  return (
    <Link
      href={`${to ? to : '#'}`}
      className="bg-BrightGreen w-60 py-4 font-bold text-black shadow-lg shadow-black "
    >
      {text}
    </Link>
  )
}
type ButtonWhiteProps = {
  text?: string
  to?: string
  onClick?: () => void
}

export const ButtonWhite = ({ text, to, onClick }: ButtonWhiteProps) => {
  return (
    <Link
      href={to ?? '#'}
      onClick={onClick}
      className="bg-white w-60 py-4 font-bold text-black shadow-lg shadow-black"
    >
      {text}
    </Link>
  )
}
