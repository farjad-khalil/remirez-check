import React from 'react'
import Image from "next/image"
import { DividerCenter } from '../Divider/divider'

export default function OurApproach() {
    return (
        <div>
            <section className="bg-softWhite pb-12 ">
                <div className=" mx-auto ">


                    <DividerCenter t1={"Our"} t2={"Approach"} />





                    <div className="grid md:grid-cols-12 gap-8 mt-8 p-5 px-16">
                        <div className="bg-white p-6 rounded-sm shadow-sm flex md:flex-row flex-col justify-around max-md:items-center md:col-span-7 border border-solid border-primary ">
                            <Image
                                src="/assets/aboutus/our_team.png"
                                alt="Team Members"
                                width={338}
                                height={279}
                                priority
                            />

                            <div className="space-y-6 max-md:pt-10 flex flex-col justify-between">
                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                        priority
                                    /> </span>
                                    <span className="font-bold">Customer-Centric Service</span>
                                </div>

                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame-1.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                        priority
                                    /> </span>
                                    <span className="font-bold">Commitment to Excellence</span>
                                </div>

                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame-2.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                        priority
                                    /> </span>
                                    <span className="font-bold">Long-Term Trust & Care</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#65991d] p-8 text-white md:col-span-5 flex items-center">
                            <h3 className="mb-4 text-2xl montserrat-light ">
                                The <span className="font-bold">testimonies</span> of our customers are our largest asset. From the
                                beginning we've been so very grateful to all our loyal customers. Here we promise to continue our
                                legacy by bringing you superb, outstanding service and care for your home garden and lawn.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
