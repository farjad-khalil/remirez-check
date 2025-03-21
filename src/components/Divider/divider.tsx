import React from 'react'

export function DividerCenter({ t1, t2 }:any) {
    return (
        <div className="flex items-center w-full bg-white md:pt-12 md:px-8 pt-4 px-4">
            <div className="flex-1 h-[1px] md:h-[2.5px] bg-[#65991d]"></div>
            <h2 className="px-4 md:text-6xl text-3xl font-semibold">
                <span className="text-black">{t1}</span>{" "}
                <span className="text-[#65991d]">{t2}</span>
            </h2>
            <div className="flex-1 h-[1px] md:h-[3px] bg-[#65991d]"></div>
        </div>
    )
}
export function DividerLeft({t1,t2}:any) {
    return (
        <div className="flex items-center w-full bg-white pt-12 px-5 pb-8 md:pb-16 md:px-8">
            <h2 className="px-4 md:text-4xl text-lg font-semibold">
                <span className="text-black montserrat-regular">{t1}</span>{" "}
                <span className="text-[#65991d]">{t2}</span>
            </h2>
            <div className="flex-1 h-[2.5px] bg-[#65991d]"></div>
        </div>
    )
}
