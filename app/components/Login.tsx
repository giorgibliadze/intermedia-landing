import React from 'react';
import { User } from 'lucide-react';

const MobileUserIcon = () => {
    return (
        <>
            <div className="flex md:hidden justify-center items-center w-[36px] h-[36px] border border-[#E5E5E5] rounded-full relative">
                <User className="w-[15px] h-[15px] text-black" />
            </div>
            <User className="hidden md:flex w-[15px] h-[15px] text-black" />
        </>
    );
};

export default MobileUserIcon;