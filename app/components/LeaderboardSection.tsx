

import LeaderboardCard from "./LeaderboardCard1";

import GiraffeHighlightSwiper from "./GiraffeHighlightSwiper";

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
        <>
            <GiraffeHighlightSwiper />

            <section className="w-full bg-black px-4 py-8">
                {/* Divider Line */}
                <div className="max-w-[1300px] mx-auto mb-6">
                    <div className="h-[3px] w-full bg-gradient-to-r from-white/0 via-white to-white/0" />
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
        </>
    );
}
