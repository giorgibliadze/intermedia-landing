

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Login from './Login';
import MobileNavBar from './MobileNavBar';

export default function Header() {
    return (
        <header className="w-full h-[79px] md:h-[64px] border-b border-[#E5E5E5] bg-white items-center justify-center">

            <div className="w-[100%] max-w-[100%] px-[0px] md:px-[44px] pb-[24px] flex flex-col isolate relative">

                {/* Header Row */}
                <div className="flex justify-between md:items-start px-[15px] md:px-[0px] gap-[20px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="w-[70px] md:w-[150px] h-[64px] flex justify-center items-center bg-[#2E2E2E] rounded-b-md shrink-0"
                    >
                        <Image
                            src="/image 2.svg"
                            alt="Intermedia Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </Link>
                    {/* Center Navigation */}
                    <NavBar />
                    {/* Right: Search, Login, CTA */}
                    <div className="right-[4px] mt-[12px] flex items-center gap-4">
                        <SearchBar />
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
                <MobileNavBar />
            </div>

        </header>
    );
}