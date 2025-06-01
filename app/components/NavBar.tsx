'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'სამაგიდო', href: '/table' },
    { label: 'პოლიტიკა', href: '/politics' },
    { label: 'ეკონომიკა', href: '/economy' },
    { label: 'სპორტი', href: '/sports' },
    { label: 'მზესუმზირა', href: '/sunflower' },
    { label: 'მოდა', href: '/fashion' },
    { label: 'კულტურა', href: '/culture' },
    { label: 'გართობა', href: '/fun' },
    { label: 'ბლოგი', href: '/blog' },
    { label: 'ტექ', href: '/tech' },
    { label: 'ვიდეო', href: '/video' },
];

export default function NavBar() {
    return (
        <nav className="hidden w-[1212px] h-[19px] mt-[22px] mx-auto md:flex items-center gap-4 z-[1]">
            {/* Main Links */}
            <div className="flex gap-4">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="flex items-center text-[#636363] font-medium text-[15px] leading-[18px] font-inter hover:text-black transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* More with icon */}
            <div className="flex items-center w-[57px] h-[19px] relative cursor-pointer">
                <span className="text-[#202020] font-medium text-[16px] leading-[18px] font-inter">
                    More
                </span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-700" />
            </div>
        </nav>
    );
}