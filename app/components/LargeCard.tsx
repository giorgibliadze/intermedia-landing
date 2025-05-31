"use client";

import Image from "next/image";
import { FC } from "react";

interface FullContentCardProps {
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  author: string;
  date: string;
  avatarUrl: string;
}

const FullContentCard: FC<FullContentCardProps> = ({
  title,
  category,
  imageUrl,
  excerpt,
  author,
  date,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[646px] w-full bg-white rounded-md">
      {/* Title + Category */}
      <div className="flex flex-col gap-2 px-2">
        <h2 className="text-[18px] leading-6 font-semibold text-[#4E4E4E]">
          {title}
        </h2>
        <div className="inline-flex items-center justify-center px-3 py-[3px] border border-[#2E2E2E99] rounded-md w-fit text-[10.5px] text-[#1A1A1A]">
          {category}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-[280px]">
        <Image src={imageUrl} alt={title} fill className="object-cover rounded-md" />
      </div>

      {/* Excerpt */}
      <p className="text-[14px] leading-5 text-[#737373] px-2">
        {excerpt}
      </p>

      {/* Author + Date */}
      <div className="flex items-center gap-2 px-2 pb-4">
        <Image
          src={avatarUrl}
          alt={author}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-[9px] font-medium text-[#2E2E2E]">{author}</span>
        <span className="w-[3px] h-[3px] bg-[#3A3A3A] rounded-full"></span>
        <span className="text-[9px] font-medium text-[#2E2E2E]">{date}</span>
      </div>
    </div>
  );
};

export default FullContentCard;