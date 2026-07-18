"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Exhaustive list of global countries/regions
const ALL_COUNTRIES = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GR', name: 'Greece' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KP', name: 'Korea (North)' },
    { code: 'KR', name: 'Korea (South)' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macao' },
    { code: 'MK', name: 'Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russian Federation' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SZ', name: 'Swaziland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syrian Arab Republic' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
];

const PRINTER_MODELS = [
  "HP LaserJet M110w Wireless Black & White Printer",
  "HP LaserJet M140w Wireless Black & White Printer",
  "HP LaserJet Enterprise M507dn",
  "HP LaserJet MFP M234dw Printer",
  "HP LaserJet Enterprise M507n",
  "HP LaserJet M209dw Printer",
  "HP LaserJet Pro MFP 3101fdw Wireless",
  "HP LaserJet Pro 3001dw Wireless Printer",
  "HP LaserJet Enterprise M406dn",
  "HP LaserJet Enterprise MFP M430f",
  "HP LaserJet Pro 4001dw Wireless Printer",
  "HP LaserJet MFP M234sdw Printer",
  "HP LaserJet Pro M501dn",
  "HP LaserJet Tank MFP 2604sdw Printer",
  "HP LaserJet Pro MFP 4101fdn Printer",
  "HP LaserJet Pro 4001dn Printer",
  "HP LaserJet Pro MFP 4101fdw Wireless",
  "HP DeskJet 3755 All-in-One Printer",
  "HP Smart Tank 7001 All-in-One Printer",
  "HP Smart Tank 6001 All-in-One",
  "HP ENVY Inspire 7255e All-in-One Printer",
  "HP LaserJet Tank MFP 2604sdw",
  "HP ENVY 6055e All-in-One Printer",
  "HP OfficeJet Pro 9110b Wireless Printer",
  "HP Deskjet 4155e All-in-One Printer",
  "HP OfficeJet 8015e All-in-One Printer",
  "HP Smart Tank Plus 651",
  "HP OfficeJet Pro 8135e Wireless",
  "HP DeskJet 4255e All-in-One Printer",
  "HP DeskJet 2855e All-in-One Printer",
  "HP Smart Tank 5101 All-in-One Printer",
  "HP ENVY 6455e All-in-One Printer",
  "HP Smart Tank 7602 All-in-One",
  "HP Smart Tank 5000 All-in-One Printer",
  "HP OfficeJet Pro 9730e",
  "HP OfficeJet Pro 9125e All-in-One Printer",
  "HP ENVY Inspire 7955e All-in-One Printer",
  "HP Smart Tank 7301 All-in-One Printer",
  "HP OfficeJet Pro 9135e Wireless All-in-One Printer",
  "HP OfficeJet Pro 8034e All-in-One Printer",
  "HP Color LaserJet Pro MFP 3301fdw",
  "HP LaserJet Pro 4001dn",
  "HP DeskJet 1112",
  "HP DeskJet 2130",
  "HP DeskJet 2622",
  "HP DeskJet 3630",
  "HP DeskJet 3755",
  "HP Envy 4500",
  "HP Envy 5055",
  "HP Envy 5530",
  "HP Envy 7640",
  "HP Envy Photo 7855",
  "HP OfficeJet 3830",
  "HP OfficeJet 5255",
  "HP OfficeJet 6978",
  "HP OfficeJet 8025",
  "HP OfficeJet Pro 9015",
  "HP LaserJet Pro M15w",
  "HP LaserJet Pro MFP M29w",
  "HP LaserJet Pro MFP M130fw",
  "HP LaserJet Pro M404dn",
  "HP LaserJet Enterprise MFP M527f",
  "HP Color LaserJet Pro MFP M283fdw",
  "HP Color LaserJet Pro MFP M477fnw",
  "HP Color LaserJet Enterprise MFP M680f",
  "HP Color LaserJet Pro M452dw",
  "HP Color LaserJet Enterprise M751n",
  "HP PageWide Pro 477dw",
  "HP PageWide Pro 577dw",
  "HP PageWide Enterprise Color 556dn",
  "HP PageWide Managed Color MFP P77940dn",
  "HP PageWide Enterprise Color Flow MFP 785zs",
  "HP Tango",
  "HP Tango X",
  "HP DesignJet T120",
  "HP DesignJet T520",
  "HP DesignJet Z9+",
  "HP DesignJet T830",
  "HP DesignJet T2500",
  "HP Neverstop Laser 1000w",
  "HP Neverstop Laser MFP 1202w",
  "Photosmart A310 Printer",
  "Photosmart A430 Portable Photo Studio Series",
  "Officejet 6100 ePrinter series – H6",
  "Officejet 7110 Wide Format ePrinter series – H8",
  "Deskjet 310 / 310 with Sheetfeeder",
  "Deskjet 320 / 320 with Sheetfeeder"
];

export default function CheckWarrantyHero() {
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [country, setCountry] = useState('United States');
    const [serialNumber, setSerialNumber] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [error, setError] = useState('');

    // Handle calculation of matched models based on input text
    useEffect(() => {
        if (!serialNumber.trim()) {
            setFilteredSuggestions([]);
            return;
        }

        const query = serialNumber.toLowerCase();
        const filtered = PRINTER_MODELS.filter((model) =>
            model.toLowerCase().includes(query)
        );
        setFilteredSuggestions(filtered);
    }, [serialNumber]);

    // Close autocomplete overlay dropdown panel when clicking outside elements
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!serialNumber.trim()) {
            setError('Please enter a valid serial number.');
            return;
        }

        setError('');
        
        // Persist data under standard keys for cross-component continuity
        if (typeof window !== 'undefined') {
            localStorage.setItem('printerModel', serialNumber.trim());
            localStorage.setItem('printerCountry', country);
        }

        router.push('/hp-smart-install/');
    };

    return (
        /* Global Flex Layout wrapper guarantees centering and full responsiveness */
        <div className="w-full flex flex-col items-center bg-gray-50">
            
            {/* Form layout shell limited to 60% on larger viewports, scales out beautifully on screens below md break points */}
            <section className="w-full md:w-[60%] bg-white pb-16 shadow-sm mt-4 md:mt-8 overflow-hidden">
                
                {/* Top Blue Header Band */}
                <div className="w-full bg-[#024bd8] py-12 md:py-16 text-center text-white px-4">
                    <h1 className="text-2xl md:text-4xl font-light tracking-wide">
                        Check your warranty or service status
                    </h1> <br />
                </div>

                {/* Form Card Overlay Container */}
                <div className="max-w-4xl mx-auto px-4 -mt-10 md:-mt-12 relative z-10">
                    <div className="bg-white rounded shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-12">
                        
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                            
                            {/* Country Selection Dropdown */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="country" className="text-sm font-normal text-gray-700">
                                    Country/Region of Purchase
                                </label>
                                <div className="relative">
                                    <select
                                        id="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-full h-11 px-3 border border-gray-300 rounded text-sm bg-white text-gray-800 appearance-none focus:outline-none focus:border-[#024AD8] focus:ring-1 focus:ring-[#024AD8] transition-colors cursor-pointer"
                                    >
                                        {ALL_COUNTRIES.map((c) => (
                                            <option key={c.code} value={c.name}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                    
                                    {/* Custom arrow decorator graphic */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Serial Number Text Input Field + Autocomplete Dropdown List */}
                            <div ref={dropdownRef} className="flex flex-col gap-2 relative">
                                <label htmlFor="serialNumber" className="text-sm font-normal text-gray-700">
                                    Serial number
                                </label>
                                <input
                                    id="serialNumber"
                                    type="text"
                                    placeholder="Example: HU265BM18V"
                                    value={serialNumber}
                                    onChange={(e) => {
                                        setSerialNumber(e.target.value);
                                        setShowDropdown(true);
                                        if(error) setError('');
                                    }}
                                    onFocus={() => setShowDropdown(true)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            setShowDropdown(false);
                                        }
                                    }}
                                    className={`w-full h-11 px-3 border rounded text-sm focus:outline-none transition-colors relative z-20 bg-white text-gray-800 ${
                                        error 
                                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                                        : 'border-gray-300 focus:border-[#024AD8] focus:ring-1 focus:ring-[#024AD8]'
                                    }`}
                                />
                                
                                {/* Suggestions Overlay Dropdown Menu */}
                                {showDropdown && filteredSuggestions.length > 0 && (
                                    <ul className="absolute left-0 right-0 top-[74px] max-h-48 overflow-y-auto rounded border border-gray-200 bg-white shadow-xl z-30 divide-y divide-gray-50">
                                        {filteredSuggestions.map((model, idx) => (
                                            <li key={idx}>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSerialNumber(model);    // Populates string configuration state context only
                                                        setShowDropdown(false);    // Safely dismisses the overlay display layout frame
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-xs text-gray-800 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 cursor-pointer"
                                                >
                                                    {model}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {error && (
                                    <p className="text-xs text-red-500 mt-1">{error}</p>
                                )}
                            </div>

                            {/* Privacy Statement Text */}
                            <p className="text-[13px] leading-relaxed text-gray-600 font-light pt-2">
                                By completing and submitting this form you consent to the use of your data in accordance with HP's Privacy statement.
                            </p>

                            {/* Centered Submit Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="h-11 px-12 rounded bg-[#024AD8] hover:bg-[#0138ab] text-white text-base font-medium transition shadow-sm cursor-pointer min-w-[160px]"
                                >
                                    Submit
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
}