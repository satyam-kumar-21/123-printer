import React from 'react';
import Image from 'next/image';

function hpSmartInstallHero2() {
  return (
    <section className="bg-[#f7f8fa] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_480px]">
          
          {/* Left Side: Content & Features */}
          <div className="flex flex-col text-gray-700">
            <p className="text-[15px] leading-relaxed mb-4">
              Print, scan, and share files by using HP Smart with your HP Printer. HP Smart makes it easy to get started and keeps you going with features like Print Anywhere or Mobile Fax! <span className="font-semibold">NOTE:</span> Disconnect from a Virtual Private Network (VPN) connection before downloading.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed mb-5">
              <li>
                Start with a hassle-free set up, then print, scan, copy, and share files directly from your computer to your friends, co-workers, or a linked cloud account
              </li>
              <li>
                Manage or print to your printer using any network connection
              </li>
              <li>
                Order supplies, get support, and manage your HP account straight from the app
              </li>
              <li>
                Create high-quality scans by importing existing files or scanning from your printer, and improve them by cropping the file, adding filters and text, or adjusting saturation, contrast, and brightness
              </li>
              <li>
                It's easy to send secure faxes from the app with Mobile Fax
              </li>
              <li>
                Be more productive with customizable one-touch Shortcuts (formally Smart Tasks)
              </li>
              <li>
                Access hundreds of printable crafts, cards, and learning activities for free with Printables! Get involved and get your family creating together!
              </li>
            </ul>

            <p className="text-[14px] text-gray-500 italic">
              Some HP Smart features require a network connection and an HP account for full functionality. Certain features/software are available in English language only.
            </p>
          </div>

          {/* Right Side: Dashboard Preview Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm border border-gray-100">
            <Image
              src="/hp-install-app-img2.webp" 
              alt="HP Smart App Dashboard"
              fill
              priority
              className="object-contain bg-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default hpSmartInstallHero2;