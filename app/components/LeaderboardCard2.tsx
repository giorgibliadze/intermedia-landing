"use client";

import Image from "next/image";
import { FC } from "react";
import { FileText } from "lucide-react";

interface LeaderboardCard2Props {
    name: string;
    stats: number;
    imageUrl: string;
}

const LeaderboardCard2: FC<LeaderboardCard2Props> = ({ name, stats, imageUrl }) => {
    return (
        <div className="relative w-full mt-[3opx] h-full max-w-[300px] bg-white rounded-xl pt-10 pb-6 flex flex-col items-center text-[#4E5B76]">
            {/* Avatar */}
            <div className="absolute -top-6">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-white object-cover"
                />
            </div>

            {/* Name */}
            <div className="mt-6 text-[18px] font-medium leading-[20px]">{name}</div>

            {/* Stats */}
            <div className="flex items-center gap-2 mt-2 text-sm">
                <div className="bg-white rounded-full p-[2px]">
                    <FileText className="w-4 h-4 text-[#4E5B76]" />
                </div>
                <span>{stats} სტატია</span>
            </div>
        </div>
    );
};

export default LeaderboardCard2;