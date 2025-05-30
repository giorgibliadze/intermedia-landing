'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <header className="w-full border-b border-[#E5E5E5] bg-white">
            <div className="mx-auto max-w-[1440px] px-[64px] pr-[64px] pt-[12px] pb-[24px] flex flex-col gap-[20px] isolate">

                {/* Header Content Row */}
                <div className="flex items-center justify-between gap-[20px]">

                    {/* Left: Logo */}
                    <Link
                        href="/"
                        className="w-[76px] h-[130px] flex justify-center items-center bg-[#2E2E2E] rounded-b-md shrink-0"
                    >
                        <Image
                            src="/image 2.svg"
                            alt="Intermedia Logo"
                            width={64}
                            height={64}
                            priority
                        />
                    </Link>

                    {/* Center + Right Content */}
                    <div className="flex-1 flex flex-col gap-[20px]">

                        {/* Top: Search and Auth */}
                        <div className="flex justify-between items-center gap-4 w-full">
                            <SearchBar />

                            <div className="flex items-center gap-3 md:gap-5">
                                <div className="hidden md:flex gap-1 text-sm text-[#2E2E2E]">
                                    <span>შესვლა</span>
                                    <span className="text-opacity-70">/</span>
                                    <span>რეგისტრაცია</span>
                                </div>
                                <button className="bg-[#2E2E2E] text-white text-xs md:text-sm px-3 py-2 rounded-md">
                                    დაწერე სტატია
                                </button>
                                <button className="md:hidden">
                                    <Menu className="h-6 w-6 text-[#2E2E2E]" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom: Navigation */}
                        <div className="hidden md:block">
                            <NavBar />
                        </div>
                        <div className="block md:hidden">
                            <NavBar isMobile />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
