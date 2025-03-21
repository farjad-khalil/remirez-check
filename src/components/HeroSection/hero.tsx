"use client"
import Image from "next/image";
import { ButtonGreenBright, ButtonWhite } from "../Button/button";

export default function Hero({ t1, t2, description, src, extra_class, buttons=false,btn_1 , btn_2 ,to_1 , to_2}: any) {
    const scrollToSection = (id : any) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`relative w-full h-[600px] ${extra_class} `}>
            {/* Background Image */}
            <Image
                src={src} // Now it works
                alt="Hero"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority
            />

            {/* Overlay Text */}
            <div className="absolute md:px-44  inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-10 text-center">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 px-10">
                        {t1} <span className="text-[#94f312]">{t2}</span>
                    </h1>
                    {description}
                    {buttons ?
                        <div className="py-20 flex gap-10 justify-center max-md:flex-col items-center">
                            {
                                btn_1 && btn_1 === "Get a Free Quote" ? (
                                    <button 
                                        onClick={() => scrollToSection("contact-section")} 
                                        className="bg-white w-60  py-4 font-bold text-black shadow-lg shadow-black "
                                    >
                                        {btn_1}
                                    </button>
                                ) : (
                                    <ButtonWhite text={btn_1} to={to_1} onClick={() => scrollToSection("contact-section")}/>
                                )
                            }
                            <ButtonGreenBright text={btn_2} to={to_2} />
                        </div>
                        : <div className="hidden"></div>}

                </div>
            </div>
        </div>
    );
}
