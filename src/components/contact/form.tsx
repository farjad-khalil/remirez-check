"use client"

import Image from "next/image";
import Link from "next/link";
import {  ButtonLight } from "../Button/button";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    })
    
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "error" | "warning" | "info" | "success" }>({
        open: false,
        message: "",
        severity: "success",
    });
    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);
        setSnackbar({ open: false, message: "", severity: "success" });

        try {
            const response = await fetch("https://email-service-20kt.onrender.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "general",
                    clientName: "Excilify",
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });
            
            const result = await response.json();
            if (response.ok && result.success) {
                setSnackbar({ open: true, message: "Email sent successfully!", severity: "success" });
                setFormData({ fullName: "", email: "", phone: "", message: "" });
            } else {
                setSnackbar({ open: true, message: result.error || "Failed to send email.", severity: "error" });
            }
        } catch (err) {
            setSnackbar({ open: true, message: "Something went wrong. Please try again later.", severity: "error" });
        }
        
        setLoading(false);
    }
    
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center bg-[#f5f8f1] min-h-screen p-10 md:px-24 max-sm:p-4 gap-6">
            {/* Left - Form Section */}
            <div className="relative h-[650px] max-sm:h-auto bg-[#65991d] p-10 max-sm:p-4 w-full md:w-1/2 text-white px-8 md:px-20 overflow-hidden flex flex-col">
                {/* Leaves Image Positioned at Bottom Right */}
                <div className="absolute bottom-0 -right-20 w-[450px]  ">
                    <Image
                        src="/assets/contact/leaves.png" // Replace with actual path
                        alt="Decorative Leaves"
                        width={550}
                        height={550}
                        className="w-[450px] h-auto"
                        priority
                    />
                </div>

                <h2 className="md:text-3xl text-xl font-bold mb-4  ">
                    Want a Free Estimate?
                </h2>
                <p className="mb-6 text-center md:text-left">
                    We're here to bring your outdoor vision to life! Whether you need landscape design, tree trimming,
                    sod installation, or seasonal cleanup, our expert team is ready to assist.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName} 
                        onChange={handleChange}
                        className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <textarea
                        placeholder="Enter Message"
                        className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    {/* Submit Button */}
                    <div className="py-2 flex justify-end">
                        {/* <ButtonLight text="Contact Us" /> */}
                        <button 
                            type="submit" 
                            className="bg-white text-neonGreen px-8 py-3 font-medium border-2 border-neonGreen transition-all duration-300 hover:bg-neonGreen hover:text-white hover:border-white"
                            >
                            {loading ? "Sending..." : "Contact us"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Right - Image Section (Hidden on small screens, centered on large) */}
            <div className="w-full   h-[650px] md:w-1/2 flex justify-center md:justify-end max-md:hidden">
                <Image
                    src="/assets/contact/form.png" // Replace with actual path
                    alt="Person Working"
                    width={650}
                    height={550}
                    className="object-cover max-w-full"
                    priority
                />
            </div>

            {/* Snackbar */}
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </section>

    );
};

export default ContactForm;
