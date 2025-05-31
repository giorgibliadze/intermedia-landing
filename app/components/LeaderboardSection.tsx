"use client";

import LeaderboardCard from "./LeaderboardCard1";

const leaderboardData = [
    {
        name: "ლურჯი თოლია",
        stats: 180,
        imageUrl: "/avatar.png",
        rank: 1,
    },
    {
        name: "ლურჯი თოლია",
        stats: 180,
        imageUrl: "/avatar.png",
        rank: 2,
    },
    {
        name: "ლურჯი თოლია",
        stats: 180,
        imageUrl: "/avatar.png",
        rank: 3,
    },
    {
        name: "ლურჯი თოლია",
        stats: 180,
        imageUrl: "/avatar.png",
        rank: 4,
    },
];

export default function LeaderboardSection() {
    return (
        <section className="w-full bg-white px-4 py-8">
            {/* Divider Line */}
            <div className="max-w-[1300px] mx-auto mb-6">
                <div className="h-[3px] w-full bg-gradient-to-r from-white/0 via-white to-white/0" />
            </div>

            {/* Highlight Section */}
            <div className="max-w-[1300px] min-h-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="relative w-full h-[500px] rounded-md overflow-hidden">
                    <img src="/giraffe.png" alt="highlight" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                        <h3 className="text-white text-lg font-semibold mb-2">
                            ვინ იყო ვახტანგ გორგასლის დედა?
                        </h3>
                        <div className="flex flex-col text-sm text-gray-300">
                            <span className="flex items-center gap-2">
                                <span className="text-sm">👁 18,000 ნახვა</span>
                            </span>
                            <span className="text-sm">🕒 3 წუთის საკითხავი</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {["/preview.png", "/Pic.png"].map((src, i) => (
                        <div key={i} className="relative w-full h-[35%] rounded-md overflow-hidden">
                            <img src={src} alt="preview" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                                <h3 className="text-white text-base font-medium mb-1">
                                    ვინ იყო ვახტანგ გორგასლის დედა?
                                </h3>
                                <div className="flex flex-col text-sm text-gray-300">
                                    <span className="flex items-center gap-2">
                                        <span>👁 18,000 ნახვა</span>
                                    </span>
                                    <span>🕒 3 წუთის საკითხავი</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {leaderboardData.map((user, index) => (
                    <LeaderboardCard
                        key={index}
                        name={user.name}
                        stats={user.stats}
                        imageUrl={user.imageUrl}
                        rank={user.rank}
                    />
                ))}
            </div>
        </section>
    );
}