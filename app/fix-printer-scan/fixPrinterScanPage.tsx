"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TabId = 'print' | 'scan' | 'fax';

export default function fixPrinterScanPage() {
  const [activeTab, setActiveTab] = useState<TabId>('print');

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Tab Buttons Navigation */}
        <div className="flex border-b border-gray-200 mb-10 max-w-6xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveTab('print')}
            className={`px-6 py-3 text-[15px] transition font-normal rounded-t-md -mb-[1px] ${
              activeTab === 'print'
                ? 'border border-b-white border-gray-200 text-gray-900 bg-white'
                : 'text-[#024AD8] hover:text-[#0138ab]'
            }`}
          >
            How to Print
          </button>
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-6 py-3 text-[15px] transition font-normal rounded-t-md -mb-[1px] ${
              activeTab === 'scan'
                ? 'border border-b-white border-gray-200 text-gray-900 bg-white'
                : 'text-[#024AD8] hover:text-[#0138ab]'
            }`}
          >
            How to Scan
          </button>
          <button
            onClick={() => setActiveTab('fax')}
            className={`px-6 py-3 text-[15px] transition font-normal rounded-t-md -mb-[1px] ${
              activeTab === 'fax'
                ? 'border border-b-white border-gray-200 text-gray-900 bg-white'
                : 'text-[#024AD8] hover:text-[#0138ab]'
            }`}
          >
            How to Fax
          </button>
        </div>

        {/* Dynamic Tab Content Panel */}
        <div className="max-w-6xl mx-auto min-h-[360px] grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 items-center mb-16">
          
          {/* Left Side: Centered Dynamic Image Wrapper */}
          <div className="flex items-center justify-center w-full h-full min-h-[240px]">
            <div className="relative w-full aspect-[4/3] max-w-[300px]">
              {activeTab === 'print' && (
                <Image
                  src="/howtoprint.jpg" 
                  alt="How to Print"
                  fill
                  priority
                  className="object-contain"
                />
              )}
              {activeTab === 'scan' && (
                <Image
                  src="/howtoscan.jpg" 
                  alt="How to Scan"
                  fill
                  priority
                  className="object-contain"
                />
              )}
              {activeTab === 'fax' && (
                <Image
                  src="/howtofax.jpg" 
                  alt="How to Fax"
                  fill
                  priority
                  className="object-contain"
                />
              )}
            </div>
          </div>

          {/* Right Side: Enhanced Content Text */}
          <div className="text-gray-700 text-[15px] leading-relaxed">
            {activeTab === 'print' && (
              <div>
                <h2 className="text-3xl text-gray-900 mb-3 font-normal">How to Print</h2>
                <p className="mb-4 text-gray-600">You can learn how to print from a USB or wirelessly-connected HP printer by following the steps below.</p>
                <ol className="list-decimal pl-5 space-y-2.5">
                  <li>Select the file you want to print and open the file so it appears on your computer screen.</li>
                  <li>Press the <span className="font-medium">Ctrl</span> and <span className="font-medium">P</span> buttons on your keyboard at the same time.</li>
                  <li>
                    Once the printing pop-up menu appears on your computer screen, select the printer you intend to send the job to.
                    <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                      <li>If the printer is not connected, get help setting it up through the <Link href="#" className="text-[#024AD8] underline hover:text-[#0138ab]">Technical Assistance</Link>.</li>
                      <li>For wireless printer setup and connection, get help <Link href="#" className="text-[#024AD8] underline hover:text-[#0138ab]">Technical Support</Link>.</li>
                    </ul>
                  </li>
                  <li>If needed, modify your print settings. This step is optional.</li>
                  <li>Click the Print button on screen to send the job into the printer print queue and wait for the job to complete.</li>
                </ol>
              </div>
            )}

            {activeTab === 'scan' && (
              <div>
                <h2 className="text-3xl text-gray-900 mb-3 font-normal">How to Scan on a Windows Computer</h2>
                <p className="mb-4 text-gray-600">You can learn how to scan documents or photos from a USB or wirelessly-connected multifunction HP printer to a Windows computer by using the steps below.</p>
                <ol className="list-decimal pl-5 space-y-2.5">
                  <li>Software is required to scan a document. Make sure the latest Full Feature Software and Drivers for the printer is downloaded and installed. Start by going to Customer Support <Link href="/hp-smart-install" className="text-[#024AD8] underline hover:text-[#0138ab]">Software and Driver Downloads</Link></li>
                  <li>Load the item on the scanner glass or in the automatic document feeder (ADF), depending on your printer type and features.</li>
                  <li>
                    Depending on the printer, open HP Scan (printers released 2011 and later) or HP Solution Center (printers released 2010 and earlier).
                    <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                      <li>Open <Link href="#" className="text-[#024AD8] underline hover:text-[#0138ab]">HP Solution Center software</Link> and follow the on-screen prompts to scan.</li>
                    </ul>
                  </li>
                  <li>
                    Scan the file and save to the desired destination on the computer.
                    <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                      <li>In HP Scan you can change the scan destination folder by clicking on Advanced Settings or More.</li>
                      <li>In HP Solution Center you can change the scan destination folder by clicking on Save to File Save Options.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            )}

            {activeTab === 'fax' && (
              <div>
                <h2 className="text-3xl text-gray-900 mb-3 font-normal">HP Printers - Sending and receiving fax</h2>
                <p className="mb-4 text-gray-600">You can learn how to fax from a fax-enabled HP printer by following the steps below.</p>
                <ol className="list-decimal pl-5 space-y-2.5">
                  <li>Ensure the printer is connected and set up properly.</li>
                  <li>Load the sheets you are intending to fax into the input tray and adjust the width guides so that they rest against the edges of the paper. The printer should indicate whether the printed side of the page(s) should face up or down.</li>
                  <li>For multifunction HP printers, there may be an option to select Fax. Complete this step before moving on.</li>
                  <li>If needed, modify the fax settings. This step is optional.</li>
                  <li>Dial the fax number you are wanting to send the fax to. Be sure to include any dial codes and extensions necessary to route the call correctly.</li>
                  <li>Press Start, Send, Go, or a start fax-equivalent button.</li>
                </ol>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Bottom Light Gray Banner: Centered Support Layout */}
      <div className="w-full bg-[#f8f9fa] border-y border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 items-center">
          
          {/* Left Side: Centered Assistant Graphic */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full aspect-[16/10] max-w-[280px]">
              <Image
                src="/errorprinter.jpg" 
                alt="HP Printer Panel"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Virtual Agent Details */}
          <div className="text-gray-800 text-center md:text-left">
            <h3 className="text-3xl font-light tracking-wide text-gray-900">
              Facing problem with your printer?
            </h3>
            <h4 className="text-xl font-medium text-gray-700 mt-1">
              HP Virtual Agent
            </h4>
            <p className="text-[15px] text-gray-500 mt-2 mb-6 max-w-xl mx-auto md:mx-0">
              Use our HP's automated Virtual Agent to try and find a resolution for your issue.
            </p>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded bg-[#024bd8] px-6 text-sm font-medium text-white transition hover:bg-[#006699]"
            >
              Chat with Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}