

import Image from "next/image";
import { FC } from "react";

interface ArticleCardProps {
    title: string;
    imageUrl: string;
    author: string;
    date: string;
    avatarUrl: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
    title,
    imageUrl,
    author,
    date,
    avatarUrl,
}) => {
    return (
        <div className="rounded-md overflow-hidden shadow-md bg-white">
            <div className="relative w-full h-[200px]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="p-4 text-black">
                <h3 className="text-[15px] leading-[20px] font-semibold mb-2">
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-black">
                    <Image
                        src={avatarUrl}
                        alt={author}
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                        priority
                    />
                    <span>{author}</span>
                    <span className="w-[3px] h-[3px] bg-black rounded-full" />
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;