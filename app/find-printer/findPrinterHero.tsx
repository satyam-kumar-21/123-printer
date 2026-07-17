import Image from "next/image";

export default function FindPrinterHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:py-8">

        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}
          <div className="max-w-2xl">

            <h1 className="text-[24px] font-semibold leading-snug text-gray-800 lg:text-[30px]">
              We&apos;re here to help you set up your HP printer
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-gray-600">
              Let&apos;s connect your printer to a Wi-Fi or wired network or to
              a computer using a USB cable, but first, we need to know your
              printer model.
            </p>

          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">

            <Image
              src="/find-printer.webp"
              alt="HP Printer Setup"
              width={500}
              height={260}
              priority
              className="w-full max-w-[440px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}