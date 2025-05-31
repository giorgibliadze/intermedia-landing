"use client";

import { ChevronDown } from "lucide-react";

const navLinks = [
    'სამაგიდო',
    'პოლიტიკა',
    'ეკონომიკა',
    'სპორტი',
    'მზესუმზირა',
    'მოდა',
    'კულტურა',
    'გართობა',
    'ბლოგი',
    'ტექ',
    'ვიდეო',
];

export default function NavBar() {
    return (
        <nav className="hidden w-[1212px] h-[19px] mt-[22px] mx-auto md:flex items-center gap-4 z-[1]">
            {/* Main Links */}
            <div className="flex gap-4">
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className="flex items-center text-[#636363] font-medium text-[15px] leading-[18px] font-inter hover:text-black transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>

            {/* More with icon */}
            <div className="flex items-center w-[57px] h-[19px] relative">
                <span className="text-[#202020] font-medium text-[16px] leading-[18px] font-inter">
                    More
                </span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-700" />
            </div>
        </nav>
    );
}