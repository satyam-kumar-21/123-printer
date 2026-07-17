"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const printerImages = [
  "/Deskjet.png",
  "/Envy.jpg",
  "/NSLaser.jpg",
];

// Duplicate images for seamless infinite sliding
const slides = [...printerImages, ...printerImages];

export default function IdentifyPrinter() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [search, setSearch] = useState("");

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Infinite loop
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

    // Set or overwrite the printerModel value in local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("printerModel", search.trim());
    }

    router.push("/hp-smart-install/");
  };

  return (
    <section className="bg-[#f7f8fa] py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Container */}
        <div className="max-w-xl">
          <Search
            size={42}
            strokeWidth={1.7}
            className="mb-5 text-[#024AD8]"
          />

          <h2 className="text-4xl font-light leading-tight text-gray-900">
            Identify your printer for manuals and product information
          </h2>

          <p className="mt-8 mb-2 text-sm text-gray-700">
            Enter your serial number, product number or product name
          </p>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Example: HP DeskJet 2632 All-in-One Printer"
            className="w-full rounded border border-gray-300 bg-white px-5 py-3 outline-none transition focus:border-[#024AD8]"
          />

          <button
            onClick={handleSearch}
            className="mt-5 rounded bg-[#024AD8] cursor-pointer px-7 py-3 font-medium text-white transition hover:bg-[#0138ab]"
          >
            Submit
          </button>
        </div>

        {/* Right Slider */}
        <div className="relative h-[260px] overflow-hidden border-l border-gray-300 pl-8">
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
    </section>
  );
}