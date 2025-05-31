

import ArticleGridSection from "./components/ArticleGridSection";
import FeaturedWithGrid from "./components/FeaturedWithGrid";
import FullContentCard from "./components/LargeCard";
import LeaderboardSection from "./components/LeaderboardSection";

import OnboardingSuccessCard from "./components/OnboardingSuccessCard";



export default function Home() {
  return (
    <>

      <div className="w-full justify-center md:flex md:flex-col bg-white px-[30px]">

        <div className="block md:flex justify-between gap-7 pt-[35px]">
          <FullContentCard
            title="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
            category="მეცნიერება"
            imageUrl="/Pic.png"
            excerpt="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
            author="ლურჯი თოლია"
            date="გუშინ, 18:40"
            avatarUrl="/avatar.png"
          />
          <OnboardingSuccessCard />
        </div>
        <div className="block md:flex justify-between gap-7 pt-[35px]">

          <FullContentCard
            title="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
            category="მეცნიერება"
            imageUrl="/Pic.png"
            excerpt="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
            author="ლურჯი თოლია"
            date="გუშინ, 18:40"
            avatarUrl="/avatar.png"
          />
          <FullContentCard
            title="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
            category="მეცნიერება"
            imageUrl="/Pic.png"
            excerpt="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
            author="ლურჯი თოლია"
            date="გუშინ, 18:40"
            avatarUrl="/avatar.png"
          />
        </div>
        <ArticleGridSection />
      </div>
      <FeaturedWithGrid />

      <LeaderboardSection />

    </>
  );
}
