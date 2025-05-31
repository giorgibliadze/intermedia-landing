

import Image from "next/image";
import { FC } from "react";
import { FileText } from "lucide-react";

interface LeaderboardCardProps {
  name: string;
  stats: number;
  imageUrl: string;
  rank: number;
}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ name, stats, imageUrl, rank }) => {
  return (
    <div className="relative w-full max-w-[300px] bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-3">
      {/* Rank Badge */}
      <div className="absolute top-0 right-0 bg-[#3A3A3A] text-white text-sm w-6 h-6 rounded-br-lg flex items-center justify-center">
        {rank}
      </div>

      {/* Avatar + Name + Stats */}
      <div className="flex items-center gap-3">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <div className="text-[#4E5B76] text-[18px] font-medium leading-[20px]">{name}</div>
          <div className="flex items-center gap-1 text-[#4E5B76] text-sm">
            <FileText className="w-4 h-4" /> {stats} სტატია
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
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