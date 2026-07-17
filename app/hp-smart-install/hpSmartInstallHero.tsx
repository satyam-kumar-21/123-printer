"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import SetupProgressModal from './../components/SetupProgressModal';

export default function HpSmartInstallHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter(); // Initialize the router

    const handleSetupError = () => {
        // Automatically redirect to the error page when the modal triggers an error
        router.push('/printer-driver-installation-error');
    };

    return (
        <section className="bg-gray-100 py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4">

                <div className="overflow-hidden rounded-lg lg:grid lg:grid-cols-[420px_1fr]">

                    {/* Left Column */}
                    <div className="flex flex-col items-center justify-center border-r border-gray-200 px-8 py-8">

                        <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                            <Image
                                src="/smarthpinstallicon.png"
                                alt="HP Smart"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>

                        <h1 className="mt-5 text-2xl font-medium text-gray-900">
                            HP Smart
                        </h1>

                        {/* Interactive Button to Open Modal */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-6 flex h-14 w-full max-w-xs items-center justify-center rounded bg-[#024AD8] text-2xl font-normal text-white transition hover:bg-[#0138ab] cursor-pointer"
                        >
                            Install Now
                        </button>

                        <p className="mt-5 text-center text-[17px] text-gray-600">
                            Connects seamlessly with your HP printer
                        </p>

                    </div>

                    {/* Right Column */}
                    <div className="relative h-[200px] md:h-[280px] lg:h-[320px]">
                        <Image
                            src="/hp-smart-hero-image.webp"
                            alt="HP Smart Install"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>

            {/* Modal instance with navigation trigger */}
            <SetupProgressModal 
                open={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onError={handleSetupError} // Triggers the automatic redirect
            />
        </section>
    );
}