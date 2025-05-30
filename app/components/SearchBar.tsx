import React from 'react'

const SearchBar = () => {
    return (

        <div className="flex-1 flex justify-start">
            {/* Search Bar */}
            <div className="relative w-full max-w-md hidden md:block">
                <input
                    type="text"
                    placeholder="რას ეძებ?"
                    className="w-full h-10 pl-3 pr-10 rounded-[12px] border border-[#B7B7B7] text-sm text-[#6F6F6F] placeholder-[#6F6F6F]"
                />
                <div className="absolute right-2 top-1.5 w-7 h-7 bg-[#2E2E2E] rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
