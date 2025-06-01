'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'პოლიტიკა', href: '/politics' },
    { label: 'მოდა', href: '/fashion' },
    { label: 'სპორტი', href: '/sports' },
    { label: 'სპორტი', href: '/sports' }, // You can change if needed
];

export default function MobileNavBar() {
    return (
        <nav className="md:hidden px-4 py-2 border-y bg-white border-[#E5E5E5] whitespace-nowrap flex items-center gap-2 overflow-x-auto">
            {/* Category Title with Chevron */}
            <div className="flex items-center gap-1 text-[#202020] font-medium text-[10px] font-inter shrink-0">
                <span>კატეგორიები</span>
                <ChevronDown className="w-4 h-4 text-[#202020]" />
            </div>

            {/* Scrollable Nav Links */}
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="text-[#636363] font-medium text-[11px] hover:text-black transition-colors shrink-0"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
