"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { contact_data } from "@/constants/constants"
import Input from "./Input"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        type: "general", // Default type
        services: [] // Empty array for service type
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("https://email-service-20kt.onrender.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: formData.type,
                    clientName: "Excilify",
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    ...(formData.type === "service" ? { services: formData.services } : {}),
                }),
            });

            const data = await response.json();

            // console.log(data);
            
            if (!response.ok) {
                throw new Error(data?.error || "Failed to submit free estimate request.");
            }

            setSuccess("Request sent successfully!");
            setFormData({ fullName: "", email: "", phone: "", message: "", type: "general", services: [] });
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again later.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto bg-neutral-50 border-4 border-neutral-200 rounded-md shadow-sm overflow-visible relative">
                {/* Background leaves - positioned to match design */}

                <div className="grid md:grid-cols-2 items-center">
                    {/* Person image - desktop on left, mobile on bottom */}
                    <div className="relative order-2 md:order-1 mt-6 md:mt-0 md:h-full flex items-end justify-center md:justify-start">
                        <div className="relative md:absolute md:-left-4 md:-bottom-8 md:h-[110%] ">
                            <Image
                                src="/assets/home/person-2.png"
                                alt="Landscaper with plants and tools"
                                width={660}
                                height={790}
                                className="h-full object-contain md:scale-110"
                                priority
                            />
                        </div>
                    </div>


                    {/* Form - desktop on right, mobile on top */}
                    <div className="p-8 md:p-10 relative order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-neonGreen mb-4">{contact_data.h1}</h2>
                        <p className="text-gray-600 mb-6">{contact_data.desc}</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange}
                            />

                            <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                            />

                            <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                            />
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Enter Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-4 border-2 border-neonGreen rounded-sm focus:outline-none focus:ring-1 focus:ring-neonGreen resize-none placeholder:text-black"
                                />
                            </div>

                            <div className="flex justify-end">
                                {/* <ButtonGreen text="Contact us"/> */}
                                <button
                                    type="submit"
                                    className="bg-neonGreen text-white px-8 py-3 font-medium border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-neonGreen hover:border-neonGreen"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Contact Us"}
                                </button>
                            </div>
                        </form>
                        {success && <p className="text-green-600 mt-4">{success}</p>}
                        {error && <p className="text-red-600 mt-4">{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}



