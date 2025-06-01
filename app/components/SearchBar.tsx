

import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const SearchBar = () => {
    return (
        <>
            {/* Mobile version: visible only on small screens */}
            <Link href="/search" aria-label="Go to login">
                <div className="md:hidden flex items-center gap-2 px-4 h-8 border border-white rounded-full text-black text-sm font-normal">
                    <Search className="w-4 h-4 text-black" />
                    <span>მოძებნე</span>
                </div>
            </Link>

            {/* Desktop version: visible from md and up */}
            <Link href="/search" aria-label="Go to login">
                <button aria-label="Open search" className="hidden md:flex w-10 h-10 justify-center items-center rounded-full hover:bg-gray-100 transition">
                    <Search className="w-5 h-5 text-gray-700" />
                </button>
            </Link>
        </>
    );
};

export default SearchBar;