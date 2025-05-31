'use client';

import Image from 'next/image';
import { Eye, Clock } from 'lucide-react';
import { FC } from 'react';
import clsx from 'clsx';

interface FeaturedArticleCardProps {
    imageUrl: string;
    title: string;
    views: string;
    time: string;
    layout?: 'large' | 'small';
}

const FeaturedArticleCard: FC<FeaturedArticleCardProps> = ({
    imageUrl,
    title,
    views,
    time,
    layout = 'large',
}) => {
    return (
        <div
            className={clsx(
                'relative rounded-xl overflow-hidden bg-white text-white',
                layout === 'large' ? 'h-[350px] md:h-[450px]' : 'h-[200px] md:h-[220px] w-full'
            )}
        >
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />

            <div className="absolute inset-0 bg-white to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
                <div className="flex gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {views}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {time}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticleCard;