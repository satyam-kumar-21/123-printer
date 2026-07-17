"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const printerImages = [
  "/Deskjet.png",
  "/Envy.jpg",
  "/NSLaser.jpg",
];

const slides = [...printerImages, ...printerImages];

export default function FindPrinterSearch() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Infinite Loop
  useEffect(() => {
    if (current === printerImages.length) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setCurrent(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        });
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current]);

  const handleSearch = () => {
    if (!search.trim()) return;

    // Save the search input value in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("printerModel", search.trim());
    }

    router.push("/hp-smart-install/");
  };

  return (
    <section className="bg-[#f7f8fa] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Side */}
          <div className="max-w-2xl">

            {/* Radio Buttons */}
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 text-[17px] text-gray-800">
                <input
                  type="radio"
                  name="printer-option"
                  value="setup"
                  checked={option === "setup"}
                  onChange={(e) => setOption(e.target.value)}
                  className="h-4 w-4 accent-[#024AD8]"
                />
                <span>Unpack, Setup New Printer</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 text-[17px] text-gray-800">
                <input
                  type="radio"
                  name="printer-option"
                  value="troubleshoot"
                  checked={option === "troubleshoot"}
                  onChange={(e) => setOption(e.target.value)}
                  className="h-4 w-4 accent-[#024AD8]"
                />
                <span>Troubleshoot printer issues</span>
              </label>
            </div>

            {/* Input Element */}
            <p className="mt-8 mb-3 text-[17px] text-gray-700">
              Enter your serial number, product number or product name
            </p>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="Example: HP DeskJet 2632 All-in-One Printer"
              className="w-full max-w-[560px] rounded border border-gray-300 bg-white px-5 py-4 text-[17px] outline-none transition focus:border-[#024AD8]"
            />

            {/* Submit Button */}
            <div className="mt-5">
              <button
                onClick={handleSearch}
                className="cursor-pointer rounded bg-[#024AD8] px-8 py-3 text-[17px] font-medium text-white transition hover:bg-[#0138ab]"
              >
                Submit
              </button>
            </div>

          </div>

          {/* Right Slider */}
          <div className="border-l border-gray-300 pl-10">
            <div className="relative h-[300px] overflow-hidden">
              <div
                className={`flex h-full ${
                  animate ? "transition-transform duration-700 ease-in-out" : ""
                }`}
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${
                    current * (100 / slides.length)
                  }%)`,
                }}
              >
                {slides.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-full flex-shrink-0"
                    style={{
                      width: `${100 / slides.length}%`,
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Printer ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}