import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function hpSmartInstallWeProvide() {
  return (
    <section className="bg-white py-12 lg:py-16" >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#024bd8]">
            We Provide Solution's for
          </h2>
          <p className="mt-3 text-sm font-medium text-gray-600 tracking-wide">
            Storage | Software Download | Installation Issues | Network Connectivity Related Issues
          </p>
        </div>

        {/* 2-Column Grid Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          
          {/* Card 1: Laptop & Desktop Support */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-md aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/Support-for-Laptop.png" 
                alt="Laptop and Desktop Support"
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Get Instant Support for Laptop & Desktop
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-sm">
              If the all-in-one, elite, premium, pavilions or any other HP desktop is not working properly due to an error then connect to one of our technicians at customer service number.
            </p>
            
            <Link
              href="#"
              className="mt-6 inline-flex h-11 items-center justify-center rounded bg-[#024bd8] px-6 text-[15px] font-medium text-white transition hover:bg-[#0138ab]"
            >
              Call Technician
            </Link>
          </div>

          {/* Card 2: Driver & Installation Support */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-md aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/Support-for-the-Driver.png" 
                alt="Driver Download and Installation Support"
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Support for the Driver Download & Installation
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-sm">
              Finding and then installing the drivers for laptops, desktops, and printers is a task that requires a lot of attention and time. But our support services can make it so easy.
            </p>
            
            <Link
              href="/fix-printer-scan"
              className="mt-6 inline-flex h-11 items-center justify-center rounded bg-[#024bd8] px-6 text-[15px] font-medium text-white transition hover:bg-[#0138ab]"
            >
              Fix Scan/Print
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default hpSmartInstallWeProvide;