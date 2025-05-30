'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Login from './Login';

export default function Header() {
    return (
        <header className="w-full h-[79px] md:h-[64px] border-b border-[#E5E5E5] bg-white items-center">
            <div className="mx-auto max-w-[100%] px-[15px] md:px-[64px] pb-[24px] flex flex-col gap-[20px] isolate relative">

                {/* Header Row */}
                <div className="flex justify-between md:items-start gap-[20px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="w-[76px] h-[64px] flex justify-center items-center bg-[#2E2E2E] rounded-b-md shrink-0"
                    >
                        <Image
                            src="/image 2.svg"
                            alt="Intermedia Logo"
                            width={64}
                            height={64}
                            priority
                        />
                    </Link>

                    {/* Center Navigation */}
                    <NavBar />

                    {/* Right: Search, Login, CTA */}
                    <div className="right-[4px] mt-[12px] flex items-center gap-4">
                        {/* Search */}
                        <SearchBar />

                        {/* Login */}
                        <Login />

                        {/* CTA */}
                        <Link
                            href="/create-status"
                            className="hidden md:flex items-center justify-center bg-[#2E2E2E] text-white text-[13px] leading-[14px] font-medium font-['Noto Sans Georgian'] rounded-lg px-4 py-2 min-w-[141px] h-[40px] transition hover:bg-[#1c1c1c]"
                        >
                            დაწერე სტატუსი
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}