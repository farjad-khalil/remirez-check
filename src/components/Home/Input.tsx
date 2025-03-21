import React from 'react'

export default function Input({type,name,placeholder, value, onChange,extra_class}:any) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className= {`w-full p-4 border-2 placeholder:text-black border-neonGreen  rounded-sm focus:outline-none focus:ring-1 focus:ring-neonGreen ${extra_class}  `}
      />
    </div>
  )
}
