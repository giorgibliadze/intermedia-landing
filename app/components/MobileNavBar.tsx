"use client";

import { ChevronDown } from "lucide-react";

const navLinks = [
    "პოლიტიკა",
    "მოდა",
    "სპორტი",
    "სპორტი",
];

export default function MobileNavBar() {
    return (
        <nav className="md:hidden px-4 py-2 border-y bg-white border-[#E5E5E5] whitespace-nowrap flex items-center gap-4">
            {/* Category Title with Chevron */}
            <div className="flex items-center gap-1 text-[#202020] font-medium text-[12px] font-inter shrink-0">
                <span>კატეგორიები</span>
                <ChevronDown className="w-4 h-4 text-[#202020]" />
            </div>

            {/* Scrollable Nav Links */}
            {navLinks.map((link, index) => (
                <a
                    key={index}
                    href="#"
                    className="text-[#636363] font-medium text-[14px] hover:text-black transition-colors shrink-0"
                >
                    {link}
                </a>
            ))}
        </nav>
    );
}