import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ClipboardCheck,
  Headset,
  MessageCircleMore,
} from "lucide-react";

const items = [
  {
    title: "Download Drivers",
    href: "/hp-smart-install",
    icon: Download,
  },
  {
    title: "Check Warranty Status",
    href: "/check-warranty",
    icon: ClipboardCheck,
  },
  {
    title: "Contact Us",
    href: "/hp-smart-install",
    icon: Headset,
  },
  {
    title: "Diagnose & Fix",
    href: "/hp-smart-install",
    icon: MessageCircleMore,
  },
];

export default function HowSetup() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Top Section */}
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/how-to-setup.jpg"
              alt="Printer Setup"
              width={700}
              height={450}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <h2 className="text-3xl font-light leading-tight text-gray-900 sm:text-4xl lg:text-[42px]">
              How to setup your printer
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Click Printer Setup for step by step guidance on how to setup,
              configure and register your printer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="/find-printer"
                className="rounded bg-[#024AD8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0138ab]"
              >
                Printer Setup
              </Link>

              <Link
                href="/find-printer"
                className="text-sm font-medium text-[#024AD8] underline underline-offset-4"
              >
                Get Instant Support
              </Link>

            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">

              <h3 className="text-xl font-semibold text-gray-900">
                More support
              </h3>

              <p className="mt-2 text-gray-600">
                Download drivers, check warranty, contact support or diagnose
                printer issues with a single click.
              </p>

            </div>

          </div>
        </div>

        {/* Bottom Support Links */}
        <div className="mt-14 border-t border-b border-gray-200">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex min-h-[170px] flex-col items-center justify-center px-4 text-center ${
                    index !== items.length - 1
                      ? "border-r border-gray-200"
                      : ""
                  }`}
                >
                  <Icon
                    size={42}
                    strokeWidth={1.5}
                    className="mb-5 text-[#024AD8]"
                  />

                  <span className="text-base font-medium text-[#024AD8]">
                    {item.title}
                  </span>
                </Link>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}