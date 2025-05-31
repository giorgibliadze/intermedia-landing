import Image from "next/image";
import ArticleCard from "./ArticleCard";

const featuredArticle = {
  title: "\"ბოდიოიდები\" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
  imageUrl: "/featured.png",
  description:
    "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ...",
};

const articles = Array(3).fill({
  title:
    "მეცნიერებმა შეძლეს გასაოცარი შედეგი, რომელიც შთამბეჭდავი მეჩვენა და მოსწონს",
  imageUrl: "/Pic.png",
  author: "ლურჯი თოლია",
  date: "გუშინ, 18:40",
  avatarUrl: "/avatar.png",
});

export default function FeaturedWithGrid() {
  return (
    <section className="w-full bg-black px-4 py-10 text-white">
      {/* Featured article */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="relative w-full h-[300px] md:h-auto aspect-video rounded-md overflow-hidden">
          <Image
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
            {featuredArticle.title}
          </h2>
          <p className="text-sm md:text-base text-[#CFCFCF] leading-relaxed">
            {featuredArticle.description}
          </p>
        </div>
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
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
