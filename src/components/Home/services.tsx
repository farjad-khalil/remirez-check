"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { services_data } from "@/constants/constants"
import { ButtonGreen } from "../Button/button"

export default function ServiceCards() {
    const [mobileActiveIndex, setMobileActiveIndex] = useState(2); // Start at 3rd card (index 2)
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const hasScrolledToInitial = useRef(false); // Prevents resetting on updates

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer || hasScrolledToInitial.current) return;

        const cardWidth = 280 + 16; // card width + gap
        scrollContainer.scrollLeft = 2 * cardWidth; // Move to 3rd card

        hasScrolledToInitial.current = true; // Prevent future resets

        const handleScroll = () => {
            const scrollPosition = scrollContainer.scrollLeft;
            const newActiveIndex = Math.round(scrollPosition / cardWidth);
            if (newActiveIndex !== mobileActiveIndex) {
                setMobileActiveIndex(newActiveIndex);
            }
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []); // Runs only on mount


    return (
        <section className="py-16 px-4 bg-lightGreen">
            <div className="max-w-7xl mx-auto">

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-3 gap-14">
                    {services_data.map((service, index) => (
                        <div
                            key={index}
                            className={`p-8 py-16 rounded-sm shadow-md transition-all duration-500 text-center cursor-pointer hover:bg-neonGreen group bg-white text-black`}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={service.iconSrc || "/placeholder.svg"}
                                        alt={service.title}
                                        fill
                                        className={`object-contain group-hover:filter group-hover:brightness-0 group-hover:invert`}
                                        priority
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl group-hover:text-white font-semibold mb-3">{service.title}</h3>
                            <p className="group-hover:text-white text-neutral-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Horizontal Scroll */}
                <div
                    ref={scrollContainerRef}
                    className="md:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {services_data.map((service, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-[280px] p-6 rounded-sm shadow-md snap-center ${index === mobileActiveIndex ? "bg-neonGreen text-white" : "bg-white"
                                }`}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={service.iconSrc || "/placeholder.svg"}
                                        alt={service.title}
                                        fill
                                        className={`object-contain ${index === mobileActiveIndex ? "filter brightness-0 invert" : ""}`}
                                        priority
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                            <p className={`text-center ${index === mobileActiveIndex ? "text-white" : "text-gray-600"}`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {services_data.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all ${index === mobileActiveIndex ? "w-6 bg-neonGreen" : "w-2 bg-gray-300"
                                }`}
                            onClick={() => {
                                // Scroll to this card when indicator is clicked
                                if (scrollContainerRef.current) {
                                    const cardWidth = 280 + 16 // card width + gap
                                    scrollContainerRef.current.scrollTo({
                                        left: index * cardWidth,
                                        behavior: 'smooth'
                                    })
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="my-8 flex justify-center">

                <ButtonGreen text="See All Services" to="/services"  hover={false} />
            </div>
        </section>
    )
}