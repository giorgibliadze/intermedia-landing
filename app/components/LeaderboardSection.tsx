

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

            <section className="w-full bg-white px-4 py-8">
                <GiraffeHighlightSwiper />
                <div className="max-w-full mx-auto grid grid-cols-2 md:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white text-black">
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
