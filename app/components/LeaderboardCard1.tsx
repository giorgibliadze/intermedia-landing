'use client';

import Image from "next/image";
import { FC } from "react";
import { FileText } from "lucide-react";

interface LeaderboardCardProps {
  name: string;
  stats: number;
  imageUrl: string;
  rank?: number; // optional for mobile
}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ name, stats, imageUrl }) => {
  return (
    <div className="w-full bg-white rounded-2xl text-black text-center p-4 flex flex-col items-center gap-3 border border-[#4E5B76]">
      {/* Avatar */}
      <Image
        src={imageUrl}
        alt={name}
        width={64}
        height={64}
        className="rounded-full object-cover"
      />

      {/* Name */}
      <div className="text-black text-[18px] leading-[22px] font-medium">
        {name}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 text-black text-sm">
        <FileText className="w-4 h-4" />
        <span>{stats} სტატია</span>

      </div>
      <div className="hidden md:flex gap-3">
        <button className="px-4 py-[6px] text-[#2E2E2E] border border-[#E5E5E5] rounded-full text-sm">
          პროფილი
        </button>
        <button className="px-4 py-[6px] text-[#2E2E2E] border border-[#E5E5E5] rounded-full text-sm">
          შეტყობინება
        </button>
      </div>
    </div>
  );
};

export default LeaderboardCard;