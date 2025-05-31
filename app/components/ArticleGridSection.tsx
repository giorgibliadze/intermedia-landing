

import ArticleCard from "./ArticleCard";

const articles = Array(8).fill({
    title: "\"ბოდიოიდები\" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    imageUrl: "/Pic.png",
    author: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
    avatarUrl: "/avatar.png",
});

export default function ArticleGridSection() {
    return (
        <section className="w-full bg-white px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto">
                {articles.map((article, index) => (
                    <ArticleCard key={index}
                        title={article.title}
                        imageUrl={article.imageUrl}
                        author={article.author}
                        date={article.date}
                        avatarUrl={article.avatarUrl}
                    />
                ))}
            </div>
        </section>
    );
}
